module Hatchinq.DropDown exposing
    ( Config, Message, State, configure, dropDownCount, filled, init, label, outlined, searchable, update
    , multiSelectable
    )

{-|


# Exposed

@docs Config, Message, State, configure, dropDownCount, filled, init, label, outlined, searchable, update

-}

import Browser.Dom as Dom
import Dict
import Element exposing (Color, Element, Length, alignRight, below, centerY, column, el, fill, focused, height, htmlAttribute, inFront, mouseOver, padding, paddingEach, paddingXY, pointer, px, rgb, row, scale, scrollbarY, shrink, width)
import Element.Background as Background
import Element.Border as Border
import Element.Events as Events
import Element.Font as Font
import Element.Input as Input
import Hatchinq.Attribute exposing (Attribute, custom, toElement, toInternalConfig, toWidth)
import Hatchinq.Theme as Theme exposing (Theme, arrowTransition, icon, textWithEllipsis, transition)
import Hatchinq.Util exposing (arrowDownKeyCode, arrowUpKeyCode, enterKeyCode, escapeKeyCode, keysDownAttribute)
import Html.Attributes as Attr
import Set exposing (Set)
import Task



-- TYPES


type DropDownType
    = Outlined
    | Filled


type alias InternalConfig =
    { dropDownType : DropDownType
    , searchable : Bool
    , dropDownCount : Int
    , label : Maybe String
    , multiSelect : Bool
    }


{-| -}
type alias Config item msg =
    { theme : Theme
    , lift : Message item msg -> msg
    }


type Query
    = Query String


type Selection
    = Single (Maybe Int)
    | Multiple (Set Int) (Maybe Int)


type ItemSelection
    = Selected
    | Deselected
    | Unselectable


type UiState
    = Closed
    | Open Query


{-| -}
type alias State =
    { uiState : UiState
    , selection : Selection
    }


{-| -}
init : State
init =
    State Closed (Single Nothing)



-- MESSAGES


{-| -}
type Message item msg
    = OpenSelect (Maybe Int)
    | CloseSelect
    | Select item (Maybe msg)
    | SearchInput Query
    | ArrowUpPress (Maybe Int)
    | ArrowDownPress (Maybe Int)
    | SelectMulti Int
    | DeselectMulti Int
    | ToggleMulti Int
    | Focus (Result Dom.Error ())
    | Noop



-- UPDATE


{-| -}
update : Message item msg -> State -> ( State, Cmd msg )
update msg model =
    let
        a =
            Debug.log "" msg
    in
    case msg of
        OpenSelect maybeFocusedIndex ->
            let
                selection =
                    case model.selection of
                        Single _ ->
                            Single maybeFocusedIndex

                        Multiple set _ ->
                            Multiple set maybeFocusedIndex
            in
            ( { model | uiState = Open (Query ""), selection = selection }, Cmd.none )

        CloseSelect ->
            let
                selection =
                    case model.selection of
                        Single _ ->
                            Single Nothing

                        Multiple set _ ->
                            Multiple set Nothing
            in
            ( { model | uiState = Closed, selection = selection }, Cmd.none )

        Select _ onSelect ->
            let
                b =
                    Debug.log "SELECT" model
            in
            ( { model | uiState = Closed, selection = Single Nothing }
            , case onSelect of
                Just onSelectMsg ->
                    Task.succeed onSelectMsg |> Task.perform identity

                Nothing ->
                    Cmd.none
            )

        SearchInput query ->
            let
                selection =
                    case model.selection of
                        Single _ ->
                            Single Nothing

                        Multiple set _ ->
                            Multiple set Nothing
            in
            ( { model | uiState = Open query, selection = selection }, Cmd.none )

        ArrowUpPress maybeFocusedIndex ->
            let
                uiState =
                    case model.uiState of
                        Closed ->
                            Open (Query "")

                        _ ->
                            model.uiState

                selection =
                    case model.selection of
                        Single maybeIndex ->
                            case maybeIndex of
                                Just index ->
                                    Single (Just (index - 1))

                                Nothing ->
                                    Single (Just (Maybe.withDefault -1 maybeFocusedIndex))

                        Multiple set maybeIndex ->
                            case maybeIndex of
                                Just index ->
                                    Multiple set (Just (index - 1))

                                Nothing ->
                                    Multiple set (Just (Maybe.withDefault -1 maybeFocusedIndex))
            in
            ( { model | uiState = uiState, selection = selection }, Cmd.none )

        ArrowDownPress maybeFocusedIndex ->
            let
                uiState =
                    case model.uiState of
                        Closed ->
                            Open (Query "")

                        _ ->
                            model.uiState

                selection =
                    case model.selection of
                        Single maybeIndex ->
                            case maybeIndex of
                                Just index ->
                                    Single (Just (index + 1))

                                Nothing ->
                                    Single (Just (Maybe.withDefault 1 maybeFocusedIndex))

                        Multiple set maybeIndex ->
                            case maybeIndex of
                                Just index ->
                                    Multiple set (Just (index + 1))

                                Nothing ->
                                    Multiple set (Just (Maybe.withDefault 1 maybeFocusedIndex))
            in
            ( { model | uiState = uiState, selection = selection }, Cmd.none )

        Focus _ ->
            ( model, Cmd.none )

        Noop ->
            ( model, Cmd.none )

        SelectMulti index ->
            let
                selected =
                    case model.selection of
                        Single _ ->
                            Multiple (Set.singleton index) (Just -1)

                        Multiple set focused ->
                            Multiple (Set.insert index set) focused
            in
            ( { model | selection = selected }, Task.attempt Focus (Dom.focus "my-app-search-box") )

        DeselectMulti index ->
            let
                selected =
                    case model.selection of
                        Single _ ->
                            Multiple Set.empty (Just -1)

                        Multiple set focused ->
                            Multiple (Set.remove index set) focused
            in
            ( { model | selection = selected }, Cmd.none )

        ToggleMulti index ->
            let
                operator =
                    case model.selection of
                        Single _ ->
                            Set.insert

                        Multiple set _ ->
                            if Set.member index set then
                                Debug.log "remove" Set.remove

                            else
                                Debug.log "insert" Set.insert

                selected =
                    case model.selection of
                        Single _ ->
                            Multiple Set.empty (Just -1)

                        Multiple set focused ->
                            Multiple (operator index set) focused
            in
            ( { model | selection = selected, uiState = Open (Query "") }, Cmd.none )



-- VIEW


type alias View item msg =
    { items : List item
    , itemToString : item -> String
    , value : Maybe item
    , onChange : Maybe (item -> msg)
    , state : State
    }


{-| -}
configure : Config item msg -> (List (Attribute InternalConfig) -> View item msg -> Element msg)
configure config =
    view config


{-| -}
outlined : Attribute InternalConfig
outlined =
    custom (\v -> { v | dropDownType = Outlined })


{-| -}
filled : Attribute InternalConfig
filled =
    custom (\v -> { v | dropDownType = Filled })


{-| -}
searchable : Attribute InternalConfig
searchable =
    custom (\v -> { v | searchable = True })


{-| -}
multiSelectable : Attribute InternalConfig
multiSelectable =
    custom (\v -> { v | multiSelect = True })


{-| -}
dropDownCount : Int -> Attribute InternalConfig
dropDownCount count =
    custom (\v -> { v | dropDownCount = count })


{-| -}
label : String -> Attribute InternalConfig
label labelString =
    custom (\v -> { v | label = Just labelString })


view : Config item msg -> List (Attribute InternalConfig) -> View item msg -> Element msg
view config attributes data =
    let
        { theme, lift } =
            config

        defaultConfig =
            { dropDownType = Filled
            , searchable = False
            , dropDownCount = 10
            , label = Nothing
            , multiSelect = False
            }

        internalConfig =
            defaultConfig |> toInternalConfig attributes

        disabled =
            data.onChange == Nothing

        elementAttributes =
            toElement attributes

        widthLength =
            Maybe.withDefault (px 280) (toWidth attributes)

        state =
            data.state

        converter =
            data.itemToString

        standardLabelAttributes =
            [ width fill, height shrink, Font.family [ theme.font.main ], htmlAttribute transition, htmlAttribute <| Attr.style "pointer-events" "none" ]

        labelColor =
            if disabled then
                theme.colors.gray.color

            else
                theme.colors.gray.dark

        inputText =
            Maybe.map converter data.value

        ( ( query, text ), placeholder, labelAttributes ) =
            case state.uiState of
                Open (Query q) ->
                    ( ( Query q, q )
                    , if q == "" then
                        Maybe.map
                            (\t ->
                                Input.placeholder [] (el [ width fill, height fill ] (textWithEllipsis <| converter t))
                            )
                            data.value

                      else
                        Nothing
                    , paddingXY 12 8 :: Font.size theme.font.smallerSize :: Font.color theme.colors.secondary.color :: standardLabelAttributes
                    )

                Closed ->
                    ( ( Query "", Maybe.withDefault "" <| inputText )
                    , Nothing
                    , case data.value of
                        Just _ ->
                            pointer :: paddingXY 12 8 :: Font.size theme.font.smallerSize :: Font.color labelColor :: standardLabelAttributes

                        Nothing ->
                            pointer :: paddingXY 12 20 :: Font.size theme.font.defaultSize :: Font.color labelColor :: standardLabelAttributes
                    )

        labelElement =
            Element.el labelAttributes (textWithEllipsis (Maybe.withDefault "" internalConfig.label))

        inputStyledAttributes =
            case internalConfig.dropDownType of
                Filled ->
                    [ Background.color theme.colors.gray.lighter
                    , Border.roundEach { topLeft = 4, topRight = 4, bottomLeft = 0, bottomRight = 0 }
                    , Border.widthEach { left = 0, top = 0, right = 0, bottom = 2 }
                    , Border.color
                        (if disabled then
                            Theme.transparent

                         else
                            theme.colors.gray.color
                        )
                    , Font.color
                        (if disabled then
                            theme.colors.gray.withAlpha 0.48

                         else
                            Theme.black
                        )
                    , focused
                        [ Background.color theme.colors.gray.lightest
                        , Border.color theme.colors.secondary.color
                        ]
                    ]

                Outlined ->
                    [ Border.rounded 4
                    , Border.width
                        (if state.uiState == Closed then
                            1

                         else
                            2
                        )
                    , Border.color
                        (if disabled then
                            theme.colors.gray.lightest

                         else
                            theme.colors.gray.color
                        )
                    , Font.color
                        (if disabled then
                            theme.colors.gray.withAlpha 0.48

                         else
                            Theme.black
                        )
                    , focused
                        [ Border.color theme.colors.secondary.color ]
                    ]

        inputHoverAttributes =
            case internalConfig.dropDownType of
                Filled ->
                    if not disabled && state.uiState == Closed then
                        [ pointer
                        , mouseOver
                            [ Background.color theme.colors.gray.light
                            , Border.color theme.colors.gray.color
                            ]
                        ]

                    else
                        []

                Outlined ->
                    if not disabled && state.uiState == Closed then
                        [ pointer
                        , mouseOver
                            [ Border.color Theme.black
                            ]
                        ]

                    else
                        []

        items =
            case state.uiState of
                Open (Query q) ->
                    filteredValues data q

                Closed ->
                    data.items

        itemsSize =
            List.length data.items

        focus =
            case data.state.selection of
                Single select ->
                    Maybe.withDefault Nothing (Maybe.map (\index -> List.head (List.drop (modBy itemsSize index) data.items)) select)

                Multiple _ select ->
                    Maybe.withDefault Nothing (Maybe.map (\index -> List.head (List.drop (modBy itemsSize index) data.items)) select)

        selectedItemIndex =
            Maybe.withDefault Nothing
                (Maybe.map
                    (\selectedItem ->
                        List.head
                            (List.filterMap
                                (\( i, item ) ->
                                    if selectedItem == item then
                                        Just i

                                    else
                                        Nothing
                                )
                                (List.indexedMap (\i item -> ( i, item )) data.items)
                            )
                    )
                    data.value
                )

        selectMessage =
            if internalConfig.multiSelect then
                case state.selection of
                    Single _ ->
                        case focus of
                            Just item ->
                                case selectedItemIndex of
                                    Just index ->
                                        ToggleMulti index

                                    Nothing ->
                                        Noop

                            Nothing ->
                                case state.uiState of
                                    Closed ->
                                        OpenSelect selectedItemIndex

                                    _ ->
                                        Noop

                    Multiple set maybeIndex ->
                        case focus of
                            Just _ ->
                                case maybeIndex of
                                    Just index ->
                                        ToggleMulti index

                                    Nothing ->
                                        Noop

                            Nothing ->
                                case state.uiState of
                                    Closed ->
                                        OpenSelect selectedItemIndex

                                    _ ->
                                        Noop

            else
                case focus of
                    Just item ->
                        Select item (Maybe.map (\onChange -> onChange item) data.onChange)

                    Nothing ->
                        case state.uiState of
                            Closed ->
                                OpenSelect selectedItemIndex

                            _ ->
                                Noop

        keyDownAttributes =
            [ keysDownAttribute
                (Dict.fromList
                    [ ( arrowUpKeyCode, lift (ArrowUpPress selectedItemIndex) )
                    , ( arrowDownKeyCode, lift (ArrowDownPress selectedItemIndex) )
                    , ( enterKeyCode, lift selectMessage )
                    , ( escapeKeyCode, lift (Debug.log "escape" CloseSelect) )
                    ]
                )
            ]

        inputAttributes =
            Font.family [ theme.font.main ]
                :: Font.size theme.font.defaultSize
                :: width (px 280)
                :: height (px 56)
                :: (htmlAttribute <| Attr.style "display" "inline-block")
                :: (htmlAttribute <| Attr.style "overflow" "hidden")
                :: (htmlAttribute <| Attr.style "text-overflow" "ellipsis")
                :: paddingEach { left = 12, top = 32, right = 32, bottom = 4 }
                :: inFront labelElement
                :: Events.onClick (lift <| OpenSelect selectedItemIndex)
                :: (Events.onLoseFocus <|
                        lift <|
                            if disabled then
                                Noop

                            else
                                Debug.log "LOST FOCUS" Noop
                   )
                :: (Element.htmlAttribute <| Attr.disabled disabled)
                :: keyDownAttributes

        arrowAttributes =
            (htmlAttribute <| Attr.style "will-change" "transform")
                :: pointer
                :: alignRight
                :: centerY
                :: padding 8
                :: htmlAttribute arrowTransition
                :: Events.onClick (lift <| CloseSelect)
                :: (case state.uiState of
                        Open _ ->
                            [ Font.color theme.colors.secondary.color
                            , htmlAttribute <| Attr.style "transform" "rotate(180deg) translateY(-5px)"
                            ]

                        Closed ->
                            [ Font.color labelColor, htmlAttribute <| Attr.style "pointer-events" "none" ]
                   )
    in
    el
        (below (dropdownBody config internalConfig widthLength state query data)
            :: inFront
                (el arrowAttributes (icon "arrow_drop_down"))
            :: elementAttributes
        )
        (Input.text
            (inputStyledAttributes ++ inputAttributes ++ inputHoverAttributes ++ elementAttributes)
            { onChange = \newQuery -> lift <| SearchInput (Query newQuery)
            , text = text
            , placeholder = placeholder
            , label = Input.labelHidden (Maybe.withDefault "" internalConfig.label)
            }
        )


dropdownItem : Config item msg -> Length -> Bool -> ItemSelection -> Int -> item -> Maybe item -> View item msg -> Element msg
dropdownItem { theme, lift } widthLength focused selected index value selectedItem data =
    let
        onSelectMessage =
            Maybe.map (\onChange -> onChange value) data.onChange

        keyDownAttributes =
            keysDownAttribute
                (Dict.fromList
                    [ ( escapeKeyCode, lift (Debug.log "escape" CloseSelect) )
                    ]
                )

        commonList =
            pointer
                :: keyDownAttributes
                :: Font.family [ theme.font.main ]
                :: Font.size theme.font.defaultSize
                :: width widthLength
                :: height (px 56)
                :: paddingEach { left = 12, top = 20, right = 12, bottom = 4 }
                :: []

        itemAttributes =
            case selected of
                Unselectable ->
                    (Events.onMouseDown <| lift <| Select value onSelectMessage)
                        :: (if Just value == selectedItem then
                                if focused then
                                    [ Background.color theme.colors.secondary.light ]

                                else
                                    [ Background.color theme.colors.secondary.lighter ]

                            else if focused then
                                [ Background.color theme.colors.gray.light
                                , mouseOver [ Background.color theme.colors.gray.color ]
                                ]

                            else
                                [ mouseOver [ Background.color theme.colors.gray.lighter ] ]
                           )
                        ++ commonList

                Selected ->
                    (Events.onMouseDown <| lift <| DeselectMulti index)
                        :: (if focused then
                                [ Background.color theme.colors.secondary.lighter ]

                            else
                                [ Background.color theme.colors.secondary.light ]
                           )
                        ++ commonList

                Deselected ->
                    (Events.onMouseDown <| lift <| SelectMulti index)
                        :: (if focused then
                                [ Background.color theme.colors.gray.light
                                , mouseOver [ Background.color theme.colors.gray.color ]
                                ]

                            else
                                [ mouseOver [ Background.color theme.colors.gray.lighter ] ]
                           )
                        ++ commonList
    in
    el itemAttributes (textWithEllipsis <| data.itemToString value)


dropdownBody : Config item msg -> InternalConfig -> Length -> State -> Query -> View item msg -> Element msg
dropdownBody config internalConfig widthLength { uiState, selection } (Query query) data =
    let
        items =
            filteredValues data query

        itemHeightPx =
            56

        bodyHeight =
            px (min (max 1 internalConfig.dropDownCount) (List.length items) * itemHeightPx + 16)

        standardBodyAttributes =
            [ Border.rounded 4
            , Background.color Theme.white
            , height bodyHeight
            , width widthLength
            , paddingXY 0 8
            , htmlAttribute <| Attr.style "will-change" "transform, opacity"
            , htmlAttribute <| Attr.style "transform-origin" "center top 0px"
            , htmlAttribute <| Attr.style "box-shadow" "0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12)"
            , htmlAttribute <| Attr.style "-webkit-box-shadow" "0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12)"
            , htmlAttribute transition
            ]

        bodyAttributes =
            case uiState of
                Open _ ->
                    htmlAttribute (Attr.style "opacity" "1")
                        :: scale 1
                        :: standardBodyAttributes

                Closed ->
                    htmlAttribute (Attr.style "opacity" "0")
                        :: scale 0
                        :: standardBodyAttributes

        itemsSize =
            List.length items

        focusedIndex =
            case selection of
                Single select ->
                    Maybe.map (\index -> modBy itemsSize index) select

                Multiple _ select ->
                    Maybe.map (\index -> modBy itemsSize index) select

        indexToItemSelect : Int -> ItemSelection
        indexToItemSelect index =
            case selection of
                Single _ ->
                    if internalConfig.multiSelect then
                        Deselected

                    else
                        Unselectable

                Multiple set _ ->
                    if Set.member index set then
                        Selected

                    else
                        Deselected

        createDropDownItem index value =
            dropdownItem config widthLength (Just index == focusedIndex) (indexToItemSelect index) index value data.value data

        onClickAttribute =
            Events.onLoseFocus <|
                config.lift <|
                    if internalConfig.multiSelect then
                        CloseSelect

                    else
                        Noop
    in
    el
        bodyAttributes
        (column [ width widthLength, scrollbarY, onClickAttribute, htmlAttribute <| Attr.attribute "tabindex" "0" ] (List.indexedMap createDropDownItem items))


filteredValues : View item msg -> String -> List item
filteredValues data query =
    List.filter (\it -> matchQuery query (data.itemToString it)) data.items


matchQuery : String -> String -> Bool
matchQuery needle haystack =
    String.contains (String.toLower needle) (String.toLower haystack)
