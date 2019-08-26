(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.0/optimize for better performance and smaller assets.');


var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File === 'function' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[94m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = elm$core$Set$toList(x);
		y = elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? elm$core$Basics$LT : n ? elm$core$Basics$GT : elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === elm$core$Basics$EQ ? 0 : ord === elm$core$Basics$LT ? -1 : 1;
	}));
});



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return word
		? elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? elm$core$Maybe$Nothing
		: elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? elm$core$Maybe$Just(n) : elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




/**/
function _Json_errorToString(error)
{
	return elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? elm$core$Result$Ok(value)
		: (value instanceof String)
			? elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!elm$core$Result$isOk(result))
					{
						return elm$core$Result$Err(A2(elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return elm$core$Result$Ok(elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if (elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return elm$core$Result$Err(elm$json$Json$Decode$OneOf(elm$core$List$reverse(errors)));

		case 1:
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!elm$core$Result$isOk(result))
		{
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2(elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	result = init(result.a);
	var model = result.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		result = A2(update, msg, model);
		stepper(model = result.a, viewMetadata);
		_Platform_dispatchEffects(managers, result.b, subscriptions(model));
	}

	_Platform_dispatchEffects(managers, result.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				p: bag.n,
				q: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.q)
		{
			x = temp.p(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		r: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		r: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2(elm$json$Json$Decode$map, func, handler.a)
				:
			A3(elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? elm$browser$Browser$Internal(next)
							: elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return elm$core$Result$isOk(result) ? elm$core$Maybe$Just(result.a) : elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail(elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});
var QiTASC$hatchinq$Examples$LeftPanelMessage = function (a) {
	return {$: 'LeftPanelMessage', a: a};
};
var QiTASC$hatchinq$Examples$MainTab = {$: 'MainTab'};
var QiTASC$hatchinq$Examples$RightPanelMessage = function (a) {
	return {$: 'RightPanelMessage', a: a};
};
var QiTASC$hatchinq$Examples$WindowSizeChanged = F2(
	function (a, b) {
		return {$: 'WindowSizeChanged', a: a, b: b};
	});
var QiTASC$hatchinq$Examples$Person = F6(
	function (id, firstName, lastName, age, additionalInfo, imageSrc) {
		return {additionalInfo: additionalInfo, age: age, firstName: firstName, id: id, imageSrc: imageSrc, lastName: lastName};
	});
var elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var elm$core$Maybe$Nothing = {$: 'Nothing'};
var elm$core$Basics$EQ = {$: 'EQ'};
var elm$core$Basics$LT = {$: 'LT'};
var elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var elm$core$Array$foldr = F3(
	function (func, baseCase, _n0) {
		var tree = _n0.c;
		var tail = _n0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3(elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3(elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			elm$core$Elm$JsArray$foldr,
			helper,
			A3(elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var elm$core$List$cons = _List_cons;
var elm$core$Array$toList = function (array) {
	return A3(elm$core$Array$foldr, elm$core$List$cons, _List_Nil, array);
};
var elm$core$Basics$GT = {$: 'GT'};
var elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3(elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var elm$core$Dict$toList = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var elm$core$Dict$keys = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2(elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var elm$core$Set$toList = function (_n0) {
	var dict = _n0.a;
	return elm$core$Dict$keys(dict);
};
var QiTASC$hatchinq$Examples$persons = _List_fromArray(
	[
		A6(
		QiTASC$hatchinq$Examples$Person,
		0,
		'Bob',
		'Sponge',
		20,
		elm$core$Maybe$Just('Awesome guy'),
		'https://vignette.wikia.nocookie.net/lostmedia/images/6/60/Spongebill.png'),
		A6(
		QiTASC$hatchinq$Examples$Person,
		1,
		'Morty',
		'Smith',
		29,
		elm$core$Maybe$Just('Cool guy'),
		'https://qph.fs.quoracdn.net/main-qimg-9a1a3120354b2b345c5e5c6a1647fb6a'),
		A6(
		QiTASC$hatchinq$Examples$Person,
		2,
		'Rick',
		'Sanchez',
		40,
		elm$core$Maybe$Just('Loves Elm'),
		'https://pbs.twimg.com/profile_images/686425525032632320/D6_xAbDK_400x400.jpg'),
		A6(QiTASC$hatchinq$Examples$Person, 3, 'Thanos', 'Mad Titan', 35, elm$core$Maybe$Nothing, 'https://www.sideshowtoy.com/wp-content/uploads/2018/04/marvel-avengers-infinity-war-thanos-sixth-scale-figure-hot-toys-feature-903429-1.jpg')
	]);
var elm$core$Basics$False = {$: 'False'};
var QiTASC$hatchinq$Hatchinq$Card$init = {contentExpanded: false};
var QiTASC$hatchinq$Hatchinq$DataTable$NoSort = {$: 'NoSort'};
var QiTASC$hatchinq$Hatchinq$DataTable$init = {hoveredHeader: elm$core$Maybe$Nothing, sort: QiTASC$hatchinq$Hatchinq$DataTable$NoSort};
var QiTASC$hatchinq$Hatchinq$DropDown$Closed = {$: 'Closed'};
var QiTASC$hatchinq$Hatchinq$DropDown$State = F2(
	function (uiState, focusedItem) {
		return {focusedItem: focusedItem, uiState: uiState};
	});
var QiTASC$hatchinq$Hatchinq$DropDown$init = A2(QiTASC$hatchinq$Hatchinq$DropDown$State, QiTASC$hatchinq$Hatchinq$DropDown$Closed, elm$core$Maybe$Nothing);
var QiTASC$hatchinq$Hatchinq$List$State = F2(
	function (id, selected) {
		return {id: id, selected: selected};
	});
var QiTASC$hatchinq$Hatchinq$List$init = A2(QiTASC$hatchinq$Hatchinq$List$State, elm$core$Maybe$Nothing, elm$core$Maybe$Nothing);
var QiTASC$hatchinq$Hatchinq$ProgressIndicator$Determinate = function (a) {
	return {$: 'Determinate', a: a};
};
var QiTASC$hatchinq$Hatchinq$ProgressIndicator$Indeterminate = {$: 'Indeterminate'};
var QiTASC$hatchinq$Hatchinq$SidePanel$State = F5(
	function (openedContainerId, containerWidth, containerWidths, beingDragged, windowSize) {
		return {beingDragged: beingDragged, containerWidth: containerWidth, containerWidths: containerWidths, openedContainerId: openedContainerId, windowSize: windowSize};
	});
var QiTASC$hatchinq$Hatchinq$SidePanel$WindowSize = F2(
	function (width, height) {
		return {height: height, width: width};
	});
var elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var elm$core$Basics$never = function (_n0) {
	never:
	while (true) {
		var nvr = _n0.a;
		var $temp$_n0 = nvr;
		_n0 = $temp$_n0;
		continue never;
	}
};
var elm$core$Basics$True = {$: 'True'};
var elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var elm$core$Basics$identity = function (x) {
	return x;
};
var elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var elm$core$Task$succeed = _Scheduler_succeed;
var elm$core$Task$init = elm$core$Task$succeed(_Utils_Tuple0);
var elm$core$Basics$add = _Basics_add;
var elm$core$Basics$gt = _Utils_gt;
var elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var elm$core$List$reverse = function (list) {
	return A3(elm$core$List$foldl, elm$core$List$cons, _List_Nil, list);
};
var elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							elm$core$List$foldl,
							fn,
							acc,
							elm$core$List$reverse(r4)) : A4(elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4(elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var elm$core$Task$andThen = _Scheduler_andThen;
var elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			elm$core$Task$andThen,
			function (a) {
				return elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			elm$core$Task$andThen,
			function (a) {
				return A2(
					elm$core$Task$andThen,
					function (b) {
						return elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var elm$core$Task$sequence = function (tasks) {
	return A3(
		elm$core$List$foldr,
		elm$core$Task$map2(elm$core$List$cons),
		elm$core$Task$succeed(_List_Nil),
		tasks);
};
var elm$core$Array$branchFactor = 32;
var elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var elm$core$Basics$ceiling = _Basics_ceiling;
var elm$core$Basics$fdiv = _Basics_fdiv;
var elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var elm$core$Basics$toFloat = _Basics_toFloat;
var elm$core$Array$shiftStep = elm$core$Basics$ceiling(
	A2(elm$core$Basics$logBase, 2, elm$core$Array$branchFactor));
var elm$core$Elm$JsArray$empty = _JsArray_empty;
var elm$core$Array$empty = A4(elm$core$Array$Array_elm_builtin, 0, elm$core$Array$shiftStep, elm$core$Elm$JsArray$empty, elm$core$Elm$JsArray$empty);
var elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _n0 = A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodes);
			var node = _n0.a;
			var remainingNodes = _n0.b;
			var newAcc = A2(
				elm$core$List$cons,
				elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var elm$core$Basics$eq = _Utils_equal;
var elm$core$Tuple$first = function (_n0) {
	var x = _n0.a;
	return x;
};
var elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = elm$core$Basics$ceiling(nodeListSize / elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2(elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var elm$core$Basics$floor = _Basics_floor;
var elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var elm$core$Basics$mul = _Basics_mul;
var elm$core$Basics$sub = _Basics_sub;
var elm$core$Elm$JsArray$length = _JsArray_length;
var elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.tail),
				elm$core$Array$shiftStep,
				elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * elm$core$Array$branchFactor;
			var depth = elm$core$Basics$floor(
				A2(elm$core$Basics$logBase, elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2(elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2(elm$core$Basics$max, 5, depth * elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var elm$core$Basics$idiv = _Basics_idiv;
var elm$core$Basics$lt = _Utils_lt;
var elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = elm$core$Array$Leaf(
					A3(elm$core$Elm$JsArray$initialize, elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2(elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var elm$core$Basics$le = _Utils_le;
var elm$core$Basics$remainderBy = _Basics_remainderBy;
var elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return elm$core$Array$empty;
		} else {
			var tailLen = len % elm$core$Array$branchFactor;
			var tail = A3(elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - elm$core$Array$branchFactor;
			return A5(elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var elm$core$Basics$and = _Basics_and;
var elm$core$Basics$append = _Utils_append;
var elm$core$Basics$or = _Basics_or;
var elm$core$Char$toCode = _Char_toCode;
var elm$core$Char$isLower = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var elm$core$Char$isUpper = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var elm$core$Char$isAlpha = function (_char) {
	return elm$core$Char$isLower(_char) || elm$core$Char$isUpper(_char);
};
var elm$core$Char$isDigit = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var elm$core$Char$isAlphaNum = function (_char) {
	return elm$core$Char$isLower(_char) || (elm$core$Char$isUpper(_char) || elm$core$Char$isDigit(_char));
};
var elm$core$List$length = function (xs) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (_n0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var elm$core$List$map2 = _List_map2;
var elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2(elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var elm$core$List$range = F2(
	function (lo, hi) {
		return A3(elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			elm$core$List$map2,
			f,
			A2(
				elm$core$List$range,
				0,
				elm$core$List$length(xs) - 1),
			xs);
	});
var elm$core$String$all = _String_all;
var elm$core$String$fromInt = _String_fromNumber;
var elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var elm$core$String$uncons = _String_uncons;
var elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var elm$json$Json$Decode$indent = function (str) {
	return A2(
		elm$core$String$join,
		'\n    ',
		A2(elm$core$String$split, '\n', str));
};
var elm$json$Json$Encode$encode = _Json_encode;
var elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + (elm$core$String$fromInt(i + 1) + (') ' + elm$json$Json$Decode$indent(
			elm$json$Json$Decode$errorToString(error))));
	});
var elm$json$Json$Decode$errorToString = function (error) {
	return A2(elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _n1 = elm$core$String$uncons(f);
						if (_n1.$ === 'Nothing') {
							return false;
						} else {
							var _n2 = _n1.a;
							var _char = _n2.a;
							var rest = _n2.b;
							return elm$core$Char$isAlpha(_char) && A2(elm$core$String$all, elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + (elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									elm$core$String$join,
									'',
									elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										elm$core$String$join,
										'',
										elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + (elm$core$String$fromInt(
								elm$core$List$length(errors)) + ' ways:'));
							return A2(
								elm$core$String$join,
								'\n\n',
								A2(
									elm$core$List$cons,
									introduction,
									A2(elm$core$List$indexedMap, elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								elm$core$String$join,
								'',
								elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + (elm$json$Json$Decode$indent(
						A2(elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var elm$core$Platform$sendToApp = _Platform_sendToApp;
var elm$core$Task$spawnCmd = F2(
	function (router, _n0) {
		var task = _n0.a;
		return _Scheduler_spawn(
			A2(
				elm$core$Task$andThen,
				elm$core$Platform$sendToApp(router),
				task));
	});
var elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			elm$core$Task$map,
			function (_n0) {
				return _Utils_Tuple0;
			},
			elm$core$Task$sequence(
				A2(
					elm$core$List$map,
					elm$core$Task$spawnCmd(router),
					commands)));
	});
var elm$core$Task$onSelfMsg = F3(
	function (_n0, _n1, _n2) {
		return elm$core$Task$succeed(_Utils_Tuple0);
	});
var elm$core$Task$cmdMap = F2(
	function (tagger, _n0) {
		var task = _n0.a;
		return elm$core$Task$Perform(
			A2(elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager(elm$core$Task$init, elm$core$Task$onEffects, elm$core$Task$onSelfMsg, elm$core$Task$cmdMap);
var elm$core$Task$command = _Platform_leaf('Task');
var elm$core$Task$perform = F2(
	function (toMessage, task) {
		return elm$core$Task$command(
			elm$core$Task$Perform(
				A2(elm$core$Task$map, toMessage, task)));
	});
var elm$json$Json$Decode$map = _Json_map1;
var elm$json$Json$Decode$map2 = _Json_map2;
var elm$json$Json$Decode$succeed = _Json_succeed;
var elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var elm$core$String$length = _String_length;
var elm$core$String$slice = _String_slice;
var elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			elm$core$String$slice,
			n,
			elm$core$String$length(string),
			string);
	});
var elm$core$String$startsWith = _String_startsWith;
var elm$url$Url$Http = {$: 'Http'};
var elm$url$Url$Https = {$: 'Https'};
var elm$core$String$indexes = _String_indexes;
var elm$core$String$isEmpty = function (string) {
	return string === '';
};
var elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(elm$core$String$slice, 0, n, string);
	});
var elm$core$String$contains = _String_contains;
var elm$core$String$toInt = _String_toInt;
var elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if (elm$core$String$isEmpty(str) || A2(elm$core$String$contains, '@', str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, ':', str);
			if (!_n0.b) {
				return elm$core$Maybe$Just(
					A6(elm$url$Url$Url, protocol, str, elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_n0.b.b) {
					var i = _n0.a;
					var _n1 = elm$core$String$toInt(
						A2(elm$core$String$dropLeft, i + 1, str));
					if (_n1.$ === 'Nothing') {
						return elm$core$Maybe$Nothing;
					} else {
						var port_ = _n1;
						return elm$core$Maybe$Just(
							A6(
								elm$url$Url$Url,
								protocol,
								A2(elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return elm$core$Maybe$Nothing;
				}
			}
		}
	});
var elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '/', str);
			if (!_n0.b) {
				return A5(elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _n0.a;
				return A5(
					elm$url$Url$chompBeforePath,
					protocol,
					A2(elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '?', str);
			if (!_n0.b) {
				return A4(elm$url$Url$chompBeforeQuery, protocol, elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _n0.a;
				return A4(
					elm$url$Url$chompBeforeQuery,
					protocol,
					elm$core$Maybe$Just(
						A2(elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '#', str);
			if (!_n0.b) {
				return A3(elm$url$Url$chompBeforeFragment, protocol, elm$core$Maybe$Nothing, str);
			} else {
				var i = _n0.a;
				return A3(
					elm$url$Url$chompBeforeFragment,
					protocol,
					elm$core$Maybe$Just(
						A2(elm$core$String$dropLeft, i + 1, str)),
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$fromString = function (str) {
	return A2(elm$core$String$startsWith, 'http://', str) ? A2(
		elm$url$Url$chompAfterProtocol,
		elm$url$Url$Http,
		A2(elm$core$String$dropLeft, 7, str)) : (A2(elm$core$String$startsWith, 'https://', str) ? A2(
		elm$url$Url$chompAfterProtocol,
		elm$url$Url$Https,
		A2(elm$core$String$dropLeft, 8, str)) : elm$core$Maybe$Nothing);
};
var elm$browser$Browser$Dom$getViewport = _Browser_withWindow(_Browser_getViewport);
var elm$core$Basics$negate = function (n) {
	return -n;
};
var elm$core$Basics$round = _Basics_round;
var elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var elm$core$Dict$empty = elm$core$Dict$RBEmpty_elm_builtin;
var elm$core$Platform$Cmd$map = _Platform_map;
var QiTASC$hatchinq$Hatchinq$SidePanel$init = function (lift) {
	var state = A5(
		QiTASC$hatchinq$Hatchinq$SidePanel$State,
		-1,
		0,
		elm$core$Dict$empty,
		false,
		A2(QiTASC$hatchinq$Hatchinq$SidePanel$WindowSize, 0, 0));
	return _Utils_Tuple2(
		state,
		A2(
			elm$core$Platform$Cmd$map,
			lift,
			A2(
				elm$core$Task$perform,
				function (v) {
					return _Utils_update(
						state,
						{
							windowSize: A2(
								QiTASC$hatchinq$Hatchinq$SidePanel$WindowSize,
								elm$core$Basics$round(v.viewport.width),
								elm$core$Basics$round(v.viewport.height))
						});
				},
				elm$browser$Browser$Dom$getViewport)));
};
var QiTASC$hatchinq$Hatchinq$Snackbar$init = {currentValue: elm$core$Maybe$Nothing, id: 0, isOpen: false, values: _List_Nil};
var QiTASC$hatchinq$Hatchinq$TabBar$init = {focused: -1};
var QiTASC$hatchinq$Hatchinq$TextField$InternalState = function (a) {
	return {$: 'InternalState', a: a};
};
var QiTASC$hatchinq$Hatchinq$TextField$init = QiTASC$hatchinq$Hatchinq$TextField$InternalState(elm$core$Maybe$Nothing);
var QiTASC$hatchinq$Hatchinq$Tree$ExpandedNode = function (a) {
	return {$: 'ExpandedNode', a: a};
};
var QiTASC$hatchinq$Hatchinq$Tree$init = {
	rootExpandedNode: QiTASC$hatchinq$Hatchinq$Tree$ExpandedNode(
		{expandedNodes: elm$core$Dict$empty})
};
var elm$core$Platform$Cmd$batch = _Platform_batch;
var elm$core$Dict$Black = {$: 'Black'};
var elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var elm$core$Dict$singleton = F2(
	function (key, value) {
		return A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, key, value, elm$core$Dict$RBEmpty_elm_builtin, elm$core$Dict$RBEmpty_elm_builtin);
	});
var elm$core$Set$Set_elm_builtin = function (a) {
	return {$: 'Set_elm_builtin', a: a};
};
var elm$core$Set$singleton = function (key) {
	return elm$core$Set$Set_elm_builtin(
		A2(elm$core$Dict$singleton, key, _Utils_Tuple0));
};
var QiTASC$hatchinq$Examples$init = function (_n0) {
	var _n1 = QiTASC$hatchinq$Hatchinq$SidePanel$init(QiTASC$hatchinq$Examples$RightPanelMessage);
	var rightPanelState = _n1.a;
	var rightPanelCmd = _n1.b;
	var _n2 = QiTASC$hatchinq$Hatchinq$SidePanel$init(QiTASC$hatchinq$Examples$LeftPanelMessage);
	var leftPanelState = _n2.a;
	var leftPanelCmd = _n2.b;
	return _Utils_Tuple2(
		{
			cardState: QiTASC$hatchinq$Hatchinq$Card$init,
			checkboxValue: elm$core$Maybe$Nothing,
			counter: 0,
			dataTable: QiTASC$hatchinq$Hatchinq$DataTable$init,
			defaultDropdown: QiTASC$hatchinq$Hatchinq$DropDown$init,
			defaultDropdownValue: elm$core$Maybe$Nothing,
			disabledDropdown: QiTASC$hatchinq$Hatchinq$DropDown$init,
			disabledDropdownValue: elm$core$Maybe$Nothing,
			expandedPersons: elm$core$Set$singleton(2),
			filesTreeState: QiTASC$hatchinq$Hatchinq$Tree$init,
			fullWidthDropdown: QiTASC$hatchinq$Hatchinq$DropDown$init,
			fullWidthDropdownValue: elm$core$Maybe$Nothing,
			infinitePersons: _Utils_ap(
				QiTASC$hatchinq$Examples$persons,
				_Utils_ap(QiTASC$hatchinq$Examples$persons, QiTASC$hatchinq$Examples$persons)),
			inputField: QiTASC$hatchinq$Hatchinq$TextField$init,
			inputValue: '',
			leftSidePanelState: leftPanelState,
			list1State: QiTASC$hatchinq$Hatchinq$List$init,
			list2State: QiTASC$hatchinq$Hatchinq$List$init,
			list3State: QiTASC$hatchinq$Hatchinq$List$init,
			list3Value: elm$core$Maybe$Nothing,
			list4State: QiTASC$hatchinq$Hatchinq$List$init,
			list4Value: elm$core$Maybe$Nothing,
			loadingBottom: elm$core$Maybe$Nothing,
			loadingTop: elm$core$Maybe$Nothing,
			multilineValue: '',
			persons: QiTASC$hatchinq$Examples$persons,
			progressIndicator1: QiTASC$hatchinq$Hatchinq$ProgressIndicator$Determinate(0),
			progressIndicator2: QiTASC$hatchinq$Hatchinq$ProgressIndicator$Indeterminate,
			progressIndicatorVisiblity1: true,
			progressIndicatorVisiblity2: true,
			rightSidePanelState: rightPanelState,
			secondInputValue: 'Some text',
			secondMultilineValue: 'Some text\nOn multiple lines',
			selectedPerson: elm$core$Maybe$Nothing,
			selectedPersons: elm$core$Set$singleton(1),
			selectedTab: QiTASC$hatchinq$Examples$MainTab,
			snackbarState: QiTASC$hatchinq$Hatchinq$Snackbar$init,
			tabBarState: QiTASC$hatchinq$Hatchinq$TabBar$init,
			windowSize: _Utils_Tuple2(0, 0)
		},
		elm$core$Platform$Cmd$batch(
			_List_fromArray(
				[
					leftPanelCmd,
					rightPanelCmd,
					A2(
					elm$core$Task$perform,
					function (v) {
						return A2(
							QiTASC$hatchinq$Examples$WindowSizeChanged,
							elm$core$Basics$round(v.viewport.width),
							elm$core$Basics$round(v.viewport.height));
					},
					elm$browser$Browser$Dom$getViewport)
				])));
};
var QiTASC$hatchinq$Hatchinq$Color$CC = F4(
	function (a, b, c, d) {
		return {$: 'CC', a: a, b: b, c: c, d: d};
	});
var QiTASC$hatchinq$Hatchinq$Color$rgba = QiTASC$hatchinq$Hatchinq$Color$CC;
var QiTASC$hatchinq$Hatchinq$Color$alpha = function (_n0) {
	var a = _n0.d;
	return a;
};
var QiTASC$hatchinq$Hatchinq$Color$blue = function (_n0) {
	var b = _n0.c;
	return b;
};
var QiTASC$hatchinq$Hatchinq$Color$green = function (_n0) {
	var g = _n0.b;
	return g;
};
var QiTASC$hatchinq$Hatchinq$Color$isBrighter = F2(
	function (_n0, _n1) {
		var lr = _n0.a;
		var lg = _n0.b;
		var lb = _n0.c;
		var la = _n0.d;
		var rr = _n1.a;
		var rg = _n1.b;
		var rb = _n1.c;
		var ra = _n1.d;
		return _Utils_cmp(((lr + lg) + lb) / la, ((rr + rg) + rb) / ra) > 0;
	});
var QiTASC$hatchinq$Hatchinq$Color$red = function (_n0) {
	var r = _n0.a;
	return r;
};
var mdgriffith$elm_ui$Internal$Model$Rgba = F4(
	function (a, b, c, d) {
		return {$: 'Rgba', a: a, b: b, c: c, d: d};
	});
var mdgriffith$elm_ui$Element$rgba255 = F4(
	function (red, green, blue, a) {
		return A4(mdgriffith$elm_ui$Internal$Model$Rgba, red / 255, green / 255, blue / 255, a);
	});
var QiTASC$hatchinq$Hatchinq$Color$toElement = function (_n0) {
	var r = _n0.a;
	var g = _n0.b;
	var b = _n0.c;
	var a = _n0.d;
	return A4(mdgriffith$elm_ui$Element$rgba255, r, g, b, a);
};
var QiTASC$hatchinq$Hatchinq$Color$withAlpha = F2(
	function (a, _n0) {
		var r = _n0.a;
		var g = _n0.b;
		var b = _n0.c;
		return A4(QiTASC$hatchinq$Hatchinq$Color$CC, r, g, b, a);
	});
var QiTASC$hatchinq$Hatchinq$Theme$darkGray = QiTASC$hatchinq$Hatchinq$Color$toElement(
	A4(QiTASC$hatchinq$Hatchinq$Color$rgba, 0, 0, 0, 0.6));
var QiTASC$hatchinq$Hatchinq$Theme$lightGray = QiTASC$hatchinq$Hatchinq$Color$toElement(
	A4(QiTASC$hatchinq$Hatchinq$Color$rgba, 0, 0, 0, 0.12));
var QiTASC$hatchinq$Hatchinq$Theme$lighterGray = QiTASC$hatchinq$Hatchinq$Color$toElement(
	A4(QiTASC$hatchinq$Hatchinq$Color$rgba, 0, 0, 0, 8.0e-2));
var QiTASC$hatchinq$Hatchinq$Theme$lightestGray = QiTASC$hatchinq$Hatchinq$Color$toElement(
	A4(QiTASC$hatchinq$Hatchinq$Color$rgba, 0, 0, 0, 4.0e-2));
var QiTASC$hatchinq$Hatchinq$Theme$mqBlack = A4(QiTASC$hatchinq$Hatchinq$Color$rgba, 0, 0, 0, 1);
var QiTASC$hatchinq$Hatchinq$Theme$mqGray = A4(QiTASC$hatchinq$Hatchinq$Color$rgba, 0, 0, 0, 0.24);
var QiTASC$hatchinq$Hatchinq$Theme$mqWhite = A4(QiTASC$hatchinq$Hatchinq$Color$rgba, 255, 255, 255, 1);
var QiTASC$hatchinq$Hatchinq$Theme$colors = F2(
	function (primaryColor, secondaryColor) {
		var isBright = function (color) {
			return A2(
				QiTASC$hatchinq$Hatchinq$Color$isBrighter,
				color,
				A2(QiTASC$hatchinq$Hatchinq$Color$withAlpha, 0.5, QiTASC$hatchinq$Hatchinq$Theme$mqWhite));
		};
		var textColor = function (color) {
			return isBright(color) ? QiTASC$hatchinq$Hatchinq$Theme$mqBlack : QiTASC$hatchinq$Hatchinq$Theme$mqWhite;
		};
		var darker = function (channel) {
			return elm$core$Basics$round(channel * 0.77);
		};
		var primaryDarkColor = A4(
			QiTASC$hatchinq$Hatchinq$Color$rgba,
			darker(
				QiTASC$hatchinq$Hatchinq$Color$red(primaryColor)),
			darker(
				QiTASC$hatchinq$Hatchinq$Color$green(primaryColor)),
			darker(
				QiTASC$hatchinq$Hatchinq$Color$blue(primaryColor)),
			QiTASC$hatchinq$Hatchinq$Color$alpha(primaryColor));
		var secondaryDarkColor = A4(
			QiTASC$hatchinq$Hatchinq$Color$rgba,
			darker(
				QiTASC$hatchinq$Hatchinq$Color$red(secondaryColor)),
			darker(
				QiTASC$hatchinq$Hatchinq$Color$green(secondaryColor)),
			darker(
				QiTASC$hatchinq$Hatchinq$Color$blue(secondaryColor)),
			QiTASC$hatchinq$Hatchinq$Color$alpha(primaryColor));
		return {
			gray: {
				color: QiTASC$hatchinq$Hatchinq$Color$toElement(QiTASC$hatchinq$Hatchinq$Theme$mqGray),
				dark: QiTASC$hatchinq$Hatchinq$Theme$darkGray,
				light: QiTASC$hatchinq$Hatchinq$Theme$lightGray,
				lighter: QiTASC$hatchinq$Hatchinq$Theme$lighterGray,
				lightest: QiTASC$hatchinq$Hatchinq$Theme$lightestGray,
				original: QiTASC$hatchinq$Hatchinq$Theme$mqGray,
				textColor: QiTASC$hatchinq$Hatchinq$Color$toElement(
					textColor(QiTASC$hatchinq$Hatchinq$Theme$mqGray)),
				withAlpha: function (alpha) {
					return QiTASC$hatchinq$Hatchinq$Color$toElement(
						A2(QiTASC$hatchinq$Hatchinq$Color$withAlpha, alpha, QiTASC$hatchinq$Hatchinq$Theme$mqBlack));
				}
			},
			primary: {
				color: QiTASC$hatchinq$Hatchinq$Color$toElement(primaryColor),
				dark: QiTASC$hatchinq$Hatchinq$Color$toElement(primaryDarkColor),
				light: QiTASC$hatchinq$Hatchinq$Color$toElement(
					A2(QiTASC$hatchinq$Hatchinq$Color$withAlpha, 0.76, primaryColor)),
				lighter: QiTASC$hatchinq$Hatchinq$Color$toElement(
					A2(QiTASC$hatchinq$Hatchinq$Color$withAlpha, 0.24, primaryColor)),
				lightest: QiTASC$hatchinq$Hatchinq$Color$toElement(
					A2(QiTASC$hatchinq$Hatchinq$Color$withAlpha, 8.0e-2, primaryColor)),
				original: primaryColor,
				textColor: QiTASC$hatchinq$Hatchinq$Color$toElement(
					textColor(primaryColor)),
				withAlpha: function (alpha) {
					return QiTASC$hatchinq$Hatchinq$Color$toElement(
						A2(QiTASC$hatchinq$Hatchinq$Color$withAlpha, alpha, primaryColor));
				}
			},
			secondary: {
				color: QiTASC$hatchinq$Hatchinq$Color$toElement(secondaryColor),
				dark: QiTASC$hatchinq$Hatchinq$Color$toElement(secondaryDarkColor),
				light: QiTASC$hatchinq$Hatchinq$Color$toElement(
					A2(QiTASC$hatchinq$Hatchinq$Color$withAlpha, 0.76, secondaryColor)),
				lighter: QiTASC$hatchinq$Hatchinq$Color$toElement(
					A2(QiTASC$hatchinq$Hatchinq$Color$withAlpha, 0.24, secondaryColor)),
				lightest: QiTASC$hatchinq$Hatchinq$Color$toElement(
					A2(QiTASC$hatchinq$Hatchinq$Color$withAlpha, 8.0e-2, secondaryColor)),
				original: secondaryColor,
				textColor: QiTASC$hatchinq$Hatchinq$Color$toElement(
					textColor(secondaryColor)),
				withAlpha: function (alpha) {
					return QiTASC$hatchinq$Hatchinq$Color$toElement(
						A2(QiTASC$hatchinq$Hatchinq$Color$withAlpha, alpha, secondaryColor));
				}
			}
		};
	});
var mdgriffith$elm_ui$Internal$Model$Typeface = function (a) {
	return {$: 'Typeface', a: a};
};
var mdgriffith$elm_ui$Element$Font$typeface = mdgriffith$elm_ui$Internal$Model$Typeface;
var QiTASC$hatchinq$Hatchinq$Theme$font = mdgriffith$elm_ui$Element$Font$typeface('Avenir');
var QiTASC$hatchinq$Hatchinq$Theme$default = function () {
	var secondaryColor = A4(QiTASC$hatchinq$Hatchinq$Color$rgba, 0, 155, 164, 1);
	var primaryColor = A4(QiTASC$hatchinq$Hatchinq$Color$rgba, 247, 148, 30, 1);
	return {
		colors: A2(QiTASC$hatchinq$Hatchinq$Theme$colors, primaryColor, secondaryColor),
		font: {defaultSize: 16, main: QiTASC$hatchinq$Hatchinq$Theme$font, smallSize: 14, smallerSize: 12, smallestSize: 10},
		sizes: {
			minRowHeight: 48,
			table: {
				cellPadding: {bottom: 0, left: 8, right: 8, top: 0},
				expansionPadding: {bottom: 12, left: 12, right: 12, top: 12},
				rowHeight: 48,
				rowPadding: {bottom: 12, left: 4, right: 4, top: 12}
			}
		}
	};
}();
var QiTASC$hatchinq$Examples$theme = QiTASC$hatchinq$Hatchinq$Theme$default;
var QiTASC$hatchinq$Hatchinq$SidePanel$LeftHand = {$: 'LeftHand'};
var QiTASC$hatchinq$Examples$leftPanelConfig = {lift: QiTASC$hatchinq$Examples$LeftPanelMessage, maxWidthFraction: 0.33, orientation: QiTASC$hatchinq$Hatchinq$SidePanel$LeftHand, theme: QiTASC$hatchinq$Examples$theme};
var QiTASC$hatchinq$Hatchinq$SidePanel$RightHand = {$: 'RightHand'};
var QiTASC$hatchinq$Examples$rightPanelConfig = {lift: QiTASC$hatchinq$Examples$RightPanelMessage, maxWidthFraction: 0.33, orientation: QiTASC$hatchinq$Hatchinq$SidePanel$RightHand, theme: QiTASC$hatchinq$Examples$theme};
var NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom = elm$json$Json$Decode$map2(elm$core$Basics$apR);
var elm$json$Json$Decode$field = _Json_decodeField;
var NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required = F3(
	function (key, valDecoder, decoder) {
		return A2(
			NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom,
			A2(elm$json$Json$Decode$field, key, valDecoder),
			decoder);
	});
var QiTASC$hatchinq$Hatchinq$MouseDecoder$MousePosition = F2(
	function (x, y) {
		return {x: x, y: y};
	});
var elm$json$Json$Decode$int = _Json_decodeInt;
var QiTASC$hatchinq$Hatchinq$MouseDecoder$positionDecoder = A3(
	NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
	'pageY',
	elm$json$Json$Decode$int,
	A3(
		NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
		'pageX',
		elm$json$Json$Decode$int,
		elm$json$Json$Decode$succeed(QiTASC$hatchinq$Hatchinq$MouseDecoder$MousePosition)));
var QiTASC$hatchinq$Hatchinq$SidePanel$closedSidePanelWidth = 33;
var QiTASC$hatchinq$Hatchinq$SidePanel$stateFromDrag = F3(
	function (config, state, pos) {
		var newWidth = _Utils_eq(config.orientation, QiTASC$hatchinq$Hatchinq$SidePanel$LeftHand) ? (pos.x - QiTASC$hatchinq$Hatchinq$SidePanel$closedSidePanelWidth) : ((state.windowSize.width - QiTASC$hatchinq$Hatchinq$SidePanel$closedSidePanelWidth) - pos.x);
		var maxWidth = elm$core$Basics$round(config.maxWidthFraction * state.windowSize.width);
		var clampedWidth = (newWidth < 0) ? 0 : ((_Utils_cmp(newWidth, maxWidth) > 0) ? maxWidth : newWidth);
		return _Utils_update(
			state,
			{containerWidth: clampedWidth});
	});
var elm$browser$Browser$Events$Document = {$: 'Document'};
var elm$browser$Browser$Events$MySub = F3(
	function (a, b, c) {
		return {$: 'MySub', a: a, b: b, c: c};
	});
var elm$browser$Browser$Events$State = F2(
	function (subs, pids) {
		return {pids: pids, subs: subs};
	});
var elm$browser$Browser$Events$init = elm$core$Task$succeed(
	A2(elm$browser$Browser$Events$State, _List_Nil, elm$core$Dict$empty));
var elm$browser$Browser$Events$nodeToKey = function (node) {
	if (node.$ === 'Document') {
		return 'd_';
	} else {
		return 'w_';
	}
};
var elm$browser$Browser$Events$addKey = function (sub) {
	var node = sub.a;
	var name = sub.b;
	return _Utils_Tuple2(
		_Utils_ap(
			elm$browser$Browser$Events$nodeToKey(node),
			name),
		sub);
};
var elm$browser$Browser$Events$Event = F2(
	function (key, event) {
		return {event: event, key: key};
	});
var elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var elm$browser$Browser$Events$spawn = F3(
	function (router, key, _n0) {
		var node = _n0.a;
		var name = _n0.b;
		var actualNode = function () {
			if (node.$ === 'Document') {
				return _Browser_doc;
			} else {
				return _Browser_window;
			}
		}();
		return A2(
			elm$core$Task$map,
			function (value) {
				return _Utils_Tuple2(key, value);
			},
			A3(
				_Browser_on,
				actualNode,
				name,
				function (event) {
					return A2(
						elm$core$Platform$sendToSelf,
						router,
						A2(elm$browser$Browser$Events$Event, key, event));
				}));
	});
var elm$core$Basics$compare = _Utils_compare;
var elm$core$Dict$Red = {$: 'Red'};
var elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _n1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _n3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Red,
					key,
					value,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _n5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _n6 = left.d;
				var _n7 = _n6.a;
				var llK = _n6.b;
				var llV = _n6.c;
				var llLeft = _n6.d;
				var llRight = _n6.e;
				var lRight = left.e;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Red,
					lK,
					lV,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5(elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, key, value, elm$core$Dict$RBEmpty_elm_builtin, elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _n1 = A2(elm$core$Basics$compare, key, nKey);
			switch (_n1.$) {
				case 'LT':
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3(elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5(elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3(elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _n0 = A3(elm$core$Dict$insertHelp, key, value, dict);
		if ((_n0.$ === 'RBNode_elm_builtin') && (_n0.a.$ === 'Red')) {
			var _n1 = _n0.a;
			var k = _n0.b;
			var v = _n0.c;
			var l = _n0.d;
			var r = _n0.e;
			return A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _n0;
			return x;
		}
	});
var elm$core$Dict$fromList = function (assocs) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (_n0, dict) {
				var key = _n0.a;
				var value = _n0.b;
				return A3(elm$core$Dict$insert, key, value, dict);
			}),
		elm$core$Dict$empty,
		assocs);
};
var elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3(elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var elm$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _n0) {
				stepState:
				while (true) {
					var list = _n0.a;
					var result = _n0.b;
					if (!list.b) {
						return _Utils_Tuple2(
							list,
							A3(rightStep, rKey, rValue, result));
					} else {
						var _n2 = list.a;
						var lKey = _n2.a;
						var lValue = _n2.b;
						var rest = list.b;
						if (_Utils_cmp(lKey, rKey) < 0) {
							var $temp$rKey = rKey,
								$temp$rValue = rValue,
								$temp$_n0 = _Utils_Tuple2(
								rest,
								A3(leftStep, lKey, lValue, result));
							rKey = $temp$rKey;
							rValue = $temp$rValue;
							_n0 = $temp$_n0;
							continue stepState;
						} else {
							if (_Utils_cmp(lKey, rKey) > 0) {
								return _Utils_Tuple2(
									list,
									A3(rightStep, rKey, rValue, result));
							} else {
								return _Utils_Tuple2(
									rest,
									A4(bothStep, lKey, lValue, rValue, result));
							}
						}
					}
				}
			});
		var _n3 = A3(
			elm$core$Dict$foldl,
			stepState,
			_Utils_Tuple2(
				elm$core$Dict$toList(leftDict),
				initialResult),
			rightDict);
		var leftovers = _n3.a;
		var intermediateResult = _n3.b;
		return A3(
			elm$core$List$foldl,
			F2(
				function (_n4, result) {
					var k = _n4.a;
					var v = _n4.b;
					return A3(leftStep, k, v, result);
				}),
			intermediateResult,
			leftovers);
	});
var elm$core$Dict$union = F2(
	function (t1, t2) {
		return A3(elm$core$Dict$foldl, elm$core$Dict$insert, t2, t1);
	});
var elm$core$Process$kill = _Scheduler_kill;
var elm$browser$Browser$Events$onEffects = F3(
	function (router, subs, state) {
		var stepRight = F3(
			function (key, sub, _n6) {
				var deads = _n6.a;
				var lives = _n6.b;
				var news = _n6.c;
				return _Utils_Tuple3(
					deads,
					lives,
					A2(
						elm$core$List$cons,
						A3(elm$browser$Browser$Events$spawn, router, key, sub),
						news));
			});
		var stepLeft = F3(
			function (_n4, pid, _n5) {
				var deads = _n5.a;
				var lives = _n5.b;
				var news = _n5.c;
				return _Utils_Tuple3(
					A2(elm$core$List$cons, pid, deads),
					lives,
					news);
			});
		var stepBoth = F4(
			function (key, pid, _n2, _n3) {
				var deads = _n3.a;
				var lives = _n3.b;
				var news = _n3.c;
				return _Utils_Tuple3(
					deads,
					A3(elm$core$Dict$insert, key, pid, lives),
					news);
			});
		var newSubs = A2(elm$core$List$map, elm$browser$Browser$Events$addKey, subs);
		var _n0 = A6(
			elm$core$Dict$merge,
			stepLeft,
			stepBoth,
			stepRight,
			state.pids,
			elm$core$Dict$fromList(newSubs),
			_Utils_Tuple3(_List_Nil, elm$core$Dict$empty, _List_Nil));
		var deadPids = _n0.a;
		var livePids = _n0.b;
		var makeNewPids = _n0.c;
		return A2(
			elm$core$Task$andThen,
			function (pids) {
				return elm$core$Task$succeed(
					A2(
						elm$browser$Browser$Events$State,
						newSubs,
						A2(
							elm$core$Dict$union,
							livePids,
							elm$core$Dict$fromList(pids))));
			},
			A2(
				elm$core$Task$andThen,
				function (_n1) {
					return elm$core$Task$sequence(makeNewPids);
				},
				elm$core$Task$sequence(
					A2(elm$core$List$map, elm$core$Process$kill, deadPids))));
	});
var elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _n0 = f(mx);
		if (_n0.$ === 'Just') {
			var x = _n0.a;
			return A2(elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			elm$core$List$foldr,
			elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var elm$browser$Browser$Events$onSelfMsg = F3(
	function (router, _n0, state) {
		var key = _n0.key;
		var event = _n0.event;
		var toMessage = function (_n2) {
			var subKey = _n2.a;
			var _n3 = _n2.b;
			var node = _n3.a;
			var name = _n3.b;
			var decoder = _n3.c;
			return _Utils_eq(subKey, key) ? A2(_Browser_decodeEvent, decoder, event) : elm$core$Maybe$Nothing;
		};
		var messages = A2(elm$core$List$filterMap, toMessage, state.subs);
		return A2(
			elm$core$Task$andThen,
			function (_n1) {
				return elm$core$Task$succeed(state);
			},
			elm$core$Task$sequence(
				A2(
					elm$core$List$map,
					elm$core$Platform$sendToApp(router),
					messages)));
	});
var elm$browser$Browser$Events$subMap = F2(
	function (func, _n0) {
		var node = _n0.a;
		var name = _n0.b;
		var decoder = _n0.c;
		return A3(
			elm$browser$Browser$Events$MySub,
			node,
			name,
			A2(elm$json$Json$Decode$map, func, decoder));
	});
_Platform_effectManagers['Browser.Events'] = _Platform_createManager(elm$browser$Browser$Events$init, elm$browser$Browser$Events$onEffects, elm$browser$Browser$Events$onSelfMsg, 0, elm$browser$Browser$Events$subMap);
var elm$browser$Browser$Events$subscription = _Platform_leaf('Browser.Events');
var elm$browser$Browser$Events$on = F3(
	function (node, name, decoder) {
		return elm$browser$Browser$Events$subscription(
			A3(elm$browser$Browser$Events$MySub, node, name, decoder));
	});
var elm$browser$Browser$Events$onMouseMove = A2(elm$browser$Browser$Events$on, elm$browser$Browser$Events$Document, 'mousemove');
var elm$browser$Browser$Events$onMouseUp = A2(elm$browser$Browser$Events$on, elm$browser$Browser$Events$Document, 'mouseup');
var elm$browser$Browser$Events$Window = {$: 'Window'};
var elm$browser$Browser$Events$onResize = function (func) {
	return A3(
		elm$browser$Browser$Events$on,
		elm$browser$Browser$Events$Window,
		'resize',
		A2(
			elm$json$Json$Decode$field,
			'target',
			A3(
				elm$json$Json$Decode$map2,
				func,
				A2(elm$json$Json$Decode$field, 'innerWidth', elm$json$Json$Decode$int),
				A2(elm$json$Json$Decode$field, 'innerHeight', elm$json$Json$Decode$int))));
};
var elm$core$Platform$Sub$batch = _Platform_batch;
var QiTASC$hatchinq$Hatchinq$SidePanel$subscriptions = F2(
	function (config, state) {
		return state.beingDragged ? elm$core$Platform$Sub$batch(
			_List_fromArray(
				[
					elm$browser$Browser$Events$onMouseMove(
					A2(
						elm$json$Json$Decode$map,
						config.lift,
						A2(
							elm$json$Json$Decode$map,
							function (pos) {
								return A3(QiTASC$hatchinq$Hatchinq$SidePanel$stateFromDrag, config, state, pos);
							},
							QiTASC$hatchinq$Hatchinq$MouseDecoder$positionDecoder))),
					elm$browser$Browser$Events$onMouseUp(
					A2(
						elm$json$Json$Decode$map,
						config.lift,
						elm$json$Json$Decode$succeed(
							_Utils_update(
								state,
								{beingDragged: false}))))
				])) : elm$core$Platform$Sub$batch(
			_List_fromArray(
				[
					elm$browser$Browser$Events$onResize(
					F2(
						function (width, height) {
							return config.lift(
								_Utils_update(
									state,
									{
										windowSize: A2(QiTASC$hatchinq$Hatchinq$SidePanel$WindowSize, width, height)
									}));
						}))
				]));
	});
var QiTASC$hatchinq$Examples$subscriptions = function (model) {
	return elm$core$Platform$Sub$batch(
		_List_fromArray(
			[
				A2(QiTASC$hatchinq$Hatchinq$SidePanel$subscriptions, QiTASC$hatchinq$Examples$leftPanelConfig, model.leftSidePanelState),
				A2(QiTASC$hatchinq$Hatchinq$SidePanel$subscriptions, QiTASC$hatchinq$Examples$rightPanelConfig, model.rightSidePanelState),
				elm$browser$Browser$Events$onResize(
				F2(
					function (width, height) {
						return A2(QiTASC$hatchinq$Examples$WindowSizeChanged, width, height);
					}))
			]));
};
var QiTASC$hatchinq$Examples$CardLift = function (a) {
	return {$: 'CardLift', a: a};
};
var QiTASC$hatchinq$Examples$GotPeople = function (a) {
	return {$: 'GotPeople', a: a};
};
var QiTASC$hatchinq$Examples$SnackbarLift = function (a) {
	return {$: 'SnackbarLift', a: a};
};
var QiTASC$hatchinq$Examples$TabBarLift = function (a) {
	return {$: 'TabBarLift', a: a};
};
var elm$core$Basics$not = _Basics_not;
var elm$core$Platform$Cmd$none = elm$core$Platform$Cmd$batch(_List_Nil);
var QiTASC$hatchinq$Hatchinq$Card$update = F3(
	function (lift, message, state) {
		return _Utils_Tuple2(
			_Utils_update(
				state,
				{contentExpanded: !state.contentExpanded}),
			elm$core$Platform$Cmd$none);
	});
var QiTASC$hatchinq$Hatchinq$DataTable$Down = {$: 'Down'};
var QiTASC$hatchinq$Hatchinq$DataTable$Up = {$: 'Up'};
var QiTASC$hatchinq$Hatchinq$DataTable$Decreasing = F2(
	function (a, b) {
		return {$: 'Decreasing', a: a, b: b};
	});
var QiTASC$hatchinq$Hatchinq$DataTable$Increasing = F2(
	function (a, b) {
		return {$: 'Increasing', a: a, b: b};
	});
var QiTASC$hatchinq$Hatchinq$DataTable$scrolledToBottom = F2(
	function (tolerance, pos) {
		return _Utils_cmp(
			(pos.contentHeight - pos.containerHeight) - tolerance,
			elm$core$Basics$round(pos.scrollTop)) < 1;
	});
var QiTASC$hatchinq$Hatchinq$DataTable$scrolledToTop = F2(
	function (tolerance, pos) {
		return _Utils_cmp(
			elm$core$Basics$round(pos.scrollTop),
			tolerance) < 1;
	});
var elm$browser$Browser$Dom$setViewportOf = _Browser_setViewportOf;
var elm$core$Basics$neq = _Utils_notEqual;
var elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var elm$core$Task$onError = _Scheduler_onError;
var elm$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return elm$core$Task$command(
			elm$core$Task$Perform(
				A2(
					elm$core$Task$onError,
					A2(
						elm$core$Basics$composeL,
						A2(elm$core$Basics$composeL, elm$core$Task$succeed, resultToMessage),
						elm$core$Result$Err),
					A2(
						elm$core$Task$andThen,
						A2(
							elm$core$Basics$composeL,
							A2(elm$core$Basics$composeL, elm$core$Task$succeed, resultToMessage),
							elm$core$Result$Ok),
						task))));
	});
var QiTASC$hatchinq$Hatchinq$DataTable$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 'Sort':
				var columnIndex = msg.a;
				var sorter = msg.b;
				var _n1 = function () {
					if (sorter.$ === 'Lambda') {
						var func = sorter.a;
						return _Utils_Tuple2(
							elm$core$Maybe$Just(func),
							function (_n3) {
								return elm$core$Platform$Cmd$none;
							});
					} else {
						var updateMsg = sorter.a;
						return _Utils_Tuple2(
							elm$core$Maybe$Nothing,
							function (sortOrder) {
								return A2(
									elm$core$Task$perform,
									elm$core$Basics$identity,
									elm$core$Task$succeed(
										A2(updateMsg, columnIndex, sortOrder)));
							});
					}
				}();
				var sorterFunc = _n1.a;
				var command = _n1.b;
				var _n4 = model.sort;
				switch (_n4.$) {
					case 'NoSort':
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									sort: A2(QiTASC$hatchinq$Hatchinq$DataTable$Increasing, columnIndex, sorterFunc)
								}),
							command(
								elm$core$Maybe$Just(true)));
					case 'Increasing':
						var index = _n4.a;
						return _Utils_eq(index, columnIndex) ? _Utils_Tuple2(
							_Utils_update(
								model,
								{
									sort: A2(QiTASC$hatchinq$Hatchinq$DataTable$Decreasing, columnIndex, sorterFunc)
								}),
							command(
								elm$core$Maybe$Just(false))) : _Utils_Tuple2(
							_Utils_update(
								model,
								{
									sort: A2(QiTASC$hatchinq$Hatchinq$DataTable$Increasing, columnIndex, sorterFunc)
								}),
							command(
								elm$core$Maybe$Just(true)));
					default:
						var index = _n4.a;
						return _Utils_eq(index, columnIndex) ? _Utils_Tuple2(
							_Utils_update(
								model,
								{sort: QiTASC$hatchinq$Hatchinq$DataTable$NoSort}),
							command(elm$core$Maybe$Nothing)) : _Utils_Tuple2(
							_Utils_update(
								model,
								{
									sort: A2(QiTASC$hatchinq$Hatchinq$DataTable$Increasing, columnIndex, sorterFunc)
								}),
							command(
								elm$core$Maybe$Just(true)));
				}
			case 'TableScroll':
				var noOp = msg.a;
				var rowHeight = msg.b;
				var elementId = msg.c;
				var infiniteView = msg.d;
				var scrollPos = msg.e;
				if (_Utils_eq(infiniteView.loadingBottom, elm$core$Maybe$Nothing) && A2(QiTASC$hatchinq$Hatchinq$DataTable$scrolledToBottom, 0, scrollPos)) {
					var loadExtraItems = infiniteView.loadExtraItems(QiTASC$hatchinq$Hatchinq$DataTable$Down);
					var cmd = function () {
						if (loadExtraItems.$ === 'Just') {
							var loadCount = loadExtraItems.a.loadCount;
							var excessCount = loadExtraItems.a.excessCount;
							var loadMsg = loadExtraItems.a.loadMsg;
							return elm$core$Platform$Cmd$batch(
								_List_fromArray(
									[
										A2(
										elm$core$Task$perform,
										elm$core$Basics$identity,
										elm$core$Task$succeed(loadMsg)),
										(excessCount > 0) ? A2(
										elm$core$Task$attempt,
										function (_n6) {
											return noOp;
										},
										A3(
											elm$browser$Browser$Dom$setViewportOf,
											elementId,
											0,
											elm$core$Basics$round(scrollPos.scrollTop) - (excessCount * rowHeight))) : elm$core$Platform$Cmd$none
									]));
						} else {
							return elm$core$Platform$Cmd$none;
						}
					}();
					return _Utils_Tuple2(model, cmd);
				} else {
					if (_Utils_eq(infiniteView.loadingTop, elm$core$Maybe$Nothing) && A2(QiTASC$hatchinq$Hatchinq$DataTable$scrolledToTop, 0, scrollPos)) {
						var loadExtraItems = infiniteView.loadExtraItems(QiTASC$hatchinq$Hatchinq$DataTable$Up);
						var cmd = function () {
							if (loadExtraItems.$ === 'Just') {
								var loadCount = loadExtraItems.a.loadCount;
								var excessCount = loadExtraItems.a.excessCount;
								var loadMsg = loadExtraItems.a.loadMsg;
								return elm$core$Platform$Cmd$batch(
									_List_fromArray(
										[
											A2(
											elm$core$Task$perform,
											elm$core$Basics$identity,
											elm$core$Task$succeed(loadMsg)),
											(loadCount > 0) ? A2(
											elm$core$Task$attempt,
											function (_n8) {
												return noOp;
											},
											A3(
												elm$browser$Browser$Dom$setViewportOf,
												elementId,
												0,
												elm$core$Basics$round(scrollPos.scrollTop) + (loadCount * rowHeight))) : elm$core$Platform$Cmd$none
										]));
							} else {
								return elm$core$Platform$Cmd$none;
							}
						}();
						return _Utils_Tuple2(model, cmd);
					} else {
						if ((!_Utils_eq(infiniteView.loadingBottom, elm$core$Maybe$Nothing)) && A2(QiTASC$hatchinq$Hatchinq$DataTable$scrolledToBottom, 1, scrollPos)) {
							return _Utils_Tuple2(
								model,
								A2(
									elm$core$Task$attempt,
									function (_n9) {
										return noOp;
									},
									A3(elm$browser$Browser$Dom$setViewportOf, elementId, 0, (scrollPos.contentHeight - scrollPos.containerHeight) - 1)));
						} else {
							if ((!_Utils_eq(infiniteView.loadingTop, elm$core$Maybe$Nothing)) && A2(QiTASC$hatchinq$Hatchinq$DataTable$scrolledToTop, 1, scrollPos)) {
								return _Utils_Tuple2(
									model,
									A2(
										elm$core$Task$attempt,
										function (_n10) {
											return noOp;
										},
										A3(elm$browser$Browser$Dom$setViewportOf, elementId, 0, 1)));
							} else {
								return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
							}
						}
					}
				}
			default:
				return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
		}
	});
var QiTASC$hatchinq$Hatchinq$DropDown$Open = function (a) {
	return {$: 'Open', a: a};
};
var QiTASC$hatchinq$Hatchinq$DropDown$Query = function (a) {
	return {$: 'Query', a: a};
};
var elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var QiTASC$hatchinq$Hatchinq$DropDown$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 'OpenSelect':
				var maybeFocusedIndex = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							focusedItem: maybeFocusedIndex,
							uiState: QiTASC$hatchinq$Hatchinq$DropDown$Open(
								QiTASC$hatchinq$Hatchinq$DropDown$Query(''))
						}),
					elm$core$Platform$Cmd$none);
			case 'CloseSelect':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{focusedItem: elm$core$Maybe$Nothing, uiState: QiTASC$hatchinq$Hatchinq$DropDown$Closed}),
					elm$core$Platform$Cmd$none);
			case 'Select':
				var onSelect = msg.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{focusedItem: elm$core$Maybe$Nothing, uiState: QiTASC$hatchinq$Hatchinq$DropDown$Closed}),
					function () {
						if (onSelect.$ === 'Just') {
							var onSelectMsg = onSelect.a;
							return A2(
								elm$core$Task$perform,
								elm$core$Basics$identity,
								elm$core$Task$succeed(onSelectMsg));
						} else {
							return elm$core$Platform$Cmd$none;
						}
					}());
			case 'SearchInput':
				var query = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							focusedItem: elm$core$Maybe$Nothing,
							uiState: QiTASC$hatchinq$Hatchinq$DropDown$Open(query)
						}),
					elm$core$Platform$Cmd$none);
			case 'ArrowUpPress':
				var maybeFocusedIndex = msg.a;
				var uiState = function () {
					var _n3 = model.uiState;
					if (_n3.$ === 'Closed') {
						return QiTASC$hatchinq$Hatchinq$DropDown$Open(
							QiTASC$hatchinq$Hatchinq$DropDown$Query(''));
					} else {
						return model.uiState;
					}
				}();
				var focusedItem = function () {
					var _n2 = model.focusedItem;
					if (_n2.$ === 'Just') {
						var index = _n2.a;
						return elm$core$Maybe$Just(index - 1);
					} else {
						return elm$core$Maybe$Just(
							A2(elm$core$Maybe$withDefault, -1, maybeFocusedIndex));
					}
				}();
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{focusedItem: focusedItem, uiState: uiState}),
					elm$core$Platform$Cmd$none);
			case 'ArrowDownPress':
				var maybeFocusedIndex = msg.a;
				var uiState = function () {
					var _n5 = model.uiState;
					if (_n5.$ === 'Closed') {
						return QiTASC$hatchinq$Hatchinq$DropDown$Open(
							QiTASC$hatchinq$Hatchinq$DropDown$Query(''));
					} else {
						return model.uiState;
					}
				}();
				var focusedItem = function () {
					var _n4 = model.focusedItem;
					if (_n4.$ === 'Just') {
						var index = _n4.a;
						return elm$core$Maybe$Just(index + 1);
					} else {
						return elm$core$Maybe$Just(
							A2(elm$core$Maybe$withDefault, 0, maybeFocusedIndex));
					}
				}();
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{focusedItem: focusedItem, uiState: uiState}),
					elm$core$Platform$Cmd$none);
			default:
				return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
		}
	});
var QiTASC$hatchinq$Hatchinq$List$update = F2(
	function (message, state) {
		var item = message.a;
		var onSelect = message.b;
		return _Utils_Tuple2(
			_Utils_update(
				state,
				{selected: item}),
			function () {
				if (onSelect.$ === 'Just') {
					var msg = onSelect.a;
					return A2(
						elm$core$Task$perform,
						elm$core$Basics$identity,
						elm$core$Task$succeed(msg));
				} else {
					return elm$core$Platform$Cmd$none;
				}
			}());
	});
var QiTASC$hatchinq$Hatchinq$Snackbar$Open = function (a) {
	return {$: 'Open', a: a};
};
var QiTASC$hatchinq$Hatchinq$Snackbar$alert = F2(
	function (lift, content) {
		return A2(
			elm$core$Platform$Cmd$map,
			lift,
			elm$core$Platform$Cmd$batch(
				_List_fromArray(
					[
						A2(
						elm$core$Task$perform,
						elm$core$Basics$identity,
						elm$core$Task$succeed(
							QiTASC$hatchinq$Hatchinq$Snackbar$Open(
								elm$core$Maybe$Just(content))))
					])));
	});
var QiTASC$hatchinq$Hatchinq$Snackbar$Close = F2(
	function (a, b) {
		return {$: 'Close', a: a, b: b};
	});
var andrewMacmurray$elm_delay$Delay$Millisecond = {$: 'Millisecond'};
var andrewMacmurray$elm_delay$Delay$Duration = F2(
	function (a, b) {
		return {$: 'Duration', a: a, b: b};
	});
var elm$core$Basics$always = F2(
	function (a, _n0) {
		return a;
	});
var elm$core$Process$sleep = _Process_sleep;
var andrewMacmurray$elm_delay$Delay$after_ = F2(
	function (time, msg) {
		return A2(
			elm$core$Task$perform,
			elm$core$Basics$always(msg),
			elm$core$Process$sleep(time));
	});
var andrewMacmurray$elm_delay$Delay$Minute = {$: 'Minute'};
var andrewMacmurray$elm_delay$Delay$Second = {$: 'Second'};
var andrewMacmurray$elm_delay$Delay$toMillis = function (_n0) {
	var t = _n0.a;
	var u = _n0.b;
	switch (u.$) {
		case 'Millisecond':
			return t;
		case 'Second':
			return 1000 * t;
		case 'Minute':
			return andrewMacmurray$elm_delay$Delay$toMillis(
				A2(andrewMacmurray$elm_delay$Delay$Duration, 60 * t, andrewMacmurray$elm_delay$Delay$Second));
		default:
			return andrewMacmurray$elm_delay$Delay$toMillis(
				A2(andrewMacmurray$elm_delay$Delay$Duration, 60 * t, andrewMacmurray$elm_delay$Delay$Minute));
	}
};
var andrewMacmurray$elm_delay$Delay$after = F3(
	function (time, unit, msg) {
		return A2(
			andrewMacmurray$elm_delay$Delay$after_,
			andrewMacmurray$elm_delay$Delay$toMillis(
				A2(andrewMacmurray$elm_delay$Delay$Duration, time, unit)),
			msg);
	});
var QiTASC$hatchinq$Hatchinq$Snackbar$update = F3(
	function (lift, message, state) {
		if (message.$ === 'Open') {
			var maybeContent = message.a;
			var values = function () {
				if (maybeContent.$ === 'Just') {
					var newContent = maybeContent.a;
					return _Utils_ap(
						state.values,
						_List_fromArray(
							[newContent]));
				} else {
					return state.values;
				}
			}();
			var newId = state.id + 1;
			var close = function (content) {
				return A2(
					elm$core$Platform$Cmd$map,
					lift,
					A3(
						andrewMacmurray$elm_delay$Delay$after,
						5000,
						andrewMacmurray$elm_delay$Delay$Millisecond,
						A2(QiTASC$hatchinq$Hatchinq$Snackbar$Close, newId, elm$core$Maybe$Nothing)));
			};
			if (state.isOpen) {
				return _Utils_Tuple2(
					_Utils_update(
						state,
						{values: values}),
					elm$core$Platform$Cmd$none);
			} else {
				if (values.b) {
					var head = values.a;
					var otherValues = values.b;
					return (_Utils_eq(maybeContent, elm$core$Maybe$Nothing) || _Utils_eq(state.currentValue, elm$core$Maybe$Nothing)) ? _Utils_Tuple2(
						_Utils_update(
							state,
							{
								currentValue: elm$core$Maybe$Just(head),
								id: newId,
								isOpen: true,
								values: otherValues
							}),
						close(head)) : _Utils_Tuple2(
						_Utils_update(
							state,
							{values: values}),
						elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple2(
						_Utils_update(
							state,
							{currentValue: elm$core$Maybe$Nothing}),
						elm$core$Platform$Cmd$none);
				}
			}
		} else {
			var id = message.a;
			var maybeAction = message.b;
			if (_Utils_eq(state.id, id)) {
				var openAgainCmd = A2(
					elm$core$Platform$Cmd$map,
					lift,
					A3(
						andrewMacmurray$elm_delay$Delay$after,
						500,
						andrewMacmurray$elm_delay$Delay$Millisecond,
						QiTASC$hatchinq$Hatchinq$Snackbar$Open(elm$core$Maybe$Nothing)));
				var actionCmd = function () {
					if (maybeAction.$ === 'Just') {
						var action = maybeAction.a;
						return A2(
							elm$core$Task$perform,
							elm$core$Basics$identity,
							elm$core$Task$succeed(action));
					} else {
						return elm$core$Platform$Cmd$none;
					}
				}();
				return _Utils_Tuple2(
					_Utils_update(
						state,
						{isOpen: false}),
					elm$core$Platform$Cmd$batch(
						_List_fromArray(
							[openAgainCmd, actionCmd])));
			} else {
				return _Utils_Tuple2(state, elm$core$Platform$Cmd$none);
			}
		}
	});
var QiTASC$hatchinq$Hatchinq$TabBar$update = F3(
	function (lift, message, state) {
		switch (message.$) {
			case 'SelectTab':
				var index = message.a;
				var onSelect = message.b;
				return _Utils_Tuple2(
					_Utils_update(
						state,
						{focused: index}),
					A2(
						elm$core$Task$perform,
						elm$core$Basics$identity,
						elm$core$Task$succeed(onSelect)));
			case 'Focus':
				var index = message.a;
				return _Utils_Tuple2(
					_Utils_update(
						state,
						{focused: index}),
					elm$core$Platform$Cmd$none);
			default:
				return _Utils_Tuple2(
					_Utils_update(
						state,
						{focused: -1}),
					elm$core$Platform$Cmd$none);
		}
	});
var QiTASC$hatchinq$Hatchinq$TextField$update = F2(
	function (message, _n0) {
		var state = _n0.a;
		return QiTASC$hatchinq$Hatchinq$TextField$InternalState(
			function () {
				switch (message.$) {
					case 'Focus':
						var id = message.a;
						return elm$core$Maybe$Just(id);
					case 'Blur':
						var id = message.a;
						return _Utils_eq(
							state,
							elm$core$Maybe$Just(id)) ? elm$core$Maybe$Nothing : state;
					default:
						return state;
				}
			}());
	});
var elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _n1 = A2(elm$core$Basics$compare, targetKey, key);
				switch (_n1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.e.d.$ === 'RBNode_elm_builtin') && (dict.e.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n1 = dict.d;
			var lClr = _n1.a;
			var lK = _n1.b;
			var lV = _n1.c;
			var lLeft = _n1.d;
			var lRight = _n1.e;
			var _n2 = dict.e;
			var rClr = _n2.a;
			var rK = _n2.b;
			var rV = _n2.c;
			var rLeft = _n2.d;
			var _n3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _n2.e;
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				elm$core$Dict$Red,
				rlK,
				rlV,
				A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Black,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, lK, lV, lLeft, lRight),
					rlL),
				A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n4 = dict.d;
			var lClr = _n4.a;
			var lK = _n4.b;
			var lV = _n4.c;
			var lLeft = _n4.d;
			var lRight = _n4.e;
			var _n5 = dict.e;
			var rClr = _n5.a;
			var rK = _n5.b;
			var rV = _n5.c;
			var rLeft = _n5.d;
			var rRight = _n5.e;
			if (clr.$ === 'Black') {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Black,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Black,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.d.d.$ === 'RBNode_elm_builtin') && (dict.d.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n1 = dict.d;
			var lClr = _n1.a;
			var lK = _n1.b;
			var lV = _n1.c;
			var _n2 = _n1.d;
			var _n3 = _n2.a;
			var llK = _n2.b;
			var llV = _n2.c;
			var llLeft = _n2.d;
			var llRight = _n2.e;
			var lRight = _n1.e;
			var _n4 = dict.e;
			var rClr = _n4.a;
			var rK = _n4.b;
			var rV = _n4.c;
			var rLeft = _n4.d;
			var rRight = _n4.e;
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				elm$core$Dict$Red,
				lK,
				lV,
				A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, llK, llV, llLeft, llRight),
				A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Black,
					k,
					v,
					lRight,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n5 = dict.d;
			var lClr = _n5.a;
			var lK = _n5.b;
			var lV = _n5.c;
			var lLeft = _n5.d;
			var lRight = _n5.e;
			var _n6 = dict.e;
			var rClr = _n6.a;
			var rK = _n6.b;
			var rV = _n6.c;
			var rLeft = _n6.d;
			var rRight = _n6.e;
			if (clr.$ === 'Black') {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Black,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Black,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
			var _n1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, key, value, lRight, right));
		} else {
			_n2$2:
			while (true) {
				if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Black')) {
					if (right.d.$ === 'RBNode_elm_builtin') {
						if (right.d.a.$ === 'Black') {
							var _n3 = right.a;
							var _n4 = right.d;
							var _n5 = _n4.a;
							return elm$core$Dict$moveRedRight(dict);
						} else {
							break _n2$2;
						}
					} else {
						var _n6 = right.a;
						var _n7 = right.d;
						return elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _n2$2;
				}
			}
			return dict;
		}
	});
var elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor.$ === 'Black') {
			if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
				var _n3 = lLeft.a;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					elm$core$Dict$removeMin(left),
					right);
			} else {
				var _n4 = elm$core$Dict$moveRedLeft(dict);
				if (_n4.$ === 'RBNode_elm_builtin') {
					var nColor = _n4.a;
					var nKey = _n4.b;
					var nValue = _n4.c;
					var nLeft = _n4.d;
					var nRight = _n4.e;
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Black')) {
					var _n4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
						var _n6 = lLeft.a;
						return A5(
							elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2(elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _n7 = elm$core$Dict$moveRedLeft(dict);
						if (_n7.$ === 'RBNode_elm_builtin') {
							var nColor = _n7.a;
							var nKey = _n7.b;
							var nValue = _n7.c;
							var nLeft = _n7.d;
							var nRight = _n7.e;
							return A5(
								elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2(elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2(elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7(elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBNode_elm_builtin') {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _n1 = elm$core$Dict$getMin(right);
				if (_n1.$ === 'RBNode_elm_builtin') {
					var minKey = _n1.b;
					var minValue = _n1.c;
					return A5(
						elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						elm$core$Dict$removeMin(right));
				} else {
					return elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2(elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var elm$core$Dict$remove = F2(
	function (key, dict) {
		var _n0 = A2(elm$core$Dict$removeHelp, key, dict);
		if ((_n0.$ === 'RBNode_elm_builtin') && (_n0.a.$ === 'Red')) {
			var _n1 = _n0.a;
			var k = _n0.b;
			var v = _n0.c;
			var l = _n0.d;
			var r = _n0.e;
			return A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _n0;
			return x;
		}
	});
var elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var QiTASC$hatchinq$Hatchinq$Tree$toggleTreeNodeAtPath = F2(
	function (expandedNode, path) {
		var _n0 = expandedNode;
		var expandedNodes = _n0.a.expandedNodes;
		if (!path.b) {
			return expandedNode;
		} else {
			var targetNodeIndex = path.a;
			var nextLayerPath = path.b;
			var _n2 = A2(elm$core$Dict$get, targetNodeIndex, expandedNodes);
			if (_n2.$ === 'Just') {
				var childNode = _n2.a;
				return elm$core$List$isEmpty(nextLayerPath) ? QiTASC$hatchinq$Hatchinq$Tree$ExpandedNode(
					{
						expandedNodes: A2(elm$core$Dict$remove, targetNodeIndex, expandedNodes)
					}) : QiTASC$hatchinq$Hatchinq$Tree$ExpandedNode(
					{
						expandedNodes: A3(
							elm$core$Dict$insert,
							targetNodeIndex,
							A2(QiTASC$hatchinq$Hatchinq$Tree$toggleTreeNodeAtPath, childNode, nextLayerPath),
							expandedNodes)
					});
			} else {
				var newChildren = A2(
					QiTASC$hatchinq$Hatchinq$Tree$toggleTreeNodeAtPath,
					QiTASC$hatchinq$Hatchinq$Tree$ExpandedNode(
						{expandedNodes: elm$core$Dict$empty}),
					nextLayerPath);
				return QiTASC$hatchinq$Hatchinq$Tree$ExpandedNode(
					{
						expandedNodes: A3(elm$core$Dict$insert, targetNodeIndex, newChildren, expandedNodes)
					});
			}
		}
	});
var QiTASC$hatchinq$Hatchinq$Tree$update = F2(
	function (message, state) {
		var path = message.a;
		return _Utils_update(
			state,
			{
				rootExpandedNode: A2(QiTASC$hatchinq$Hatchinq$Tree$toggleTreeNodeAtPath, state.rootExpandedNode, path)
			});
	});
var elm$core$List$sortBy = _List_sortBy;
var elm$core$Set$empty = elm$core$Set$Set_elm_builtin(elm$core$Dict$empty);
var elm$core$Set$insert = F2(
	function (key, _n0) {
		var dict = _n0.a;
		return elm$core$Set$Set_elm_builtin(
			A3(elm$core$Dict$insert, key, _Utils_Tuple0, dict));
	});
var elm$core$Set$fromList = function (list) {
	return A3(elm$core$List$foldl, elm$core$Set$insert, elm$core$Set$empty, list);
};
var elm$core$Set$remove = F2(
	function (key, _n0) {
		var dict = _n0.a;
		return elm$core$Set$Set_elm_builtin(
			A2(elm$core$Dict$remove, key, dict));
	});
var elm$time$Time$posixToMillis = function (_n0) {
	var millis = _n0.a;
	return millis;
};
var QiTASC$hatchinq$Examples$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 'PressMinus':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{counter: model.counter - 1}),
					elm$core$Platform$Cmd$none);
			case 'PressPlus':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{counter: model.counter + 1}),
					elm$core$Platform$Cmd$none);
			case 'InputChange':
				var fieldId = msg.a;
				var newValue = msg.b;
				switch (fieldId.$) {
					case 'FirstInputField':
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{inputValue: newValue}),
							elm$core$Platform$Cmd$none);
					case 'SecondInputField':
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{secondInputValue: newValue}),
							elm$core$Platform$Cmd$none);
					case 'FirstMultiline':
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{multilineValue: newValue}),
							elm$core$Platform$Cmd$none);
					default:
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{secondMultilineValue: newValue}),
							elm$core$Platform$Cmd$none);
				}
			case 'InputStateChange':
				var inputMessage = msg.a;
				var newInputField = A2(QiTASC$hatchinq$Hatchinq$TextField$update, inputMessage, model.inputField);
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{inputField: newInputField}),
					elm$core$Platform$Cmd$none);
			case 'SearchPage':
				return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
			case 'OpenUserOptions':
				return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
			case 'ToggleNavigation':
				return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
			case 'LeftPanelMessage':
				var state = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{leftSidePanelState: state}),
					elm$core$Platform$Cmd$none);
			case 'RightPanelMessage':
				var state = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{rightSidePanelState: state}),
					elm$core$Platform$Cmd$none);
			case 'DropdownValueChange':
				var id = msg.a;
				var newValue = msg.b;
				switch (id.$) {
					case 'Default':
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									defaultDropdownValue: elm$core$Maybe$Just(newValue)
								}),
							elm$core$Platform$Cmd$none);
					case 'Disabled':
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									disabledDropdownValue: elm$core$Maybe$Just(newValue)
								}),
							elm$core$Platform$Cmd$none);
					default:
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									fullWidthDropdownValue: elm$core$Maybe$Just(newValue)
								}),
							elm$core$Platform$Cmd$none);
				}
			case 'DropdownStateChange':
				var id = msg.a;
				var internalMsg = msg.b;
				switch (id.$) {
					case 'Default':
						var _n4 = A2(QiTASC$hatchinq$Hatchinq$DropDown$update, internalMsg, model.defaultDropdown);
						var newState = _n4.a;
						var cmd = _n4.b;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{defaultDropdown: newState}),
							cmd);
					case 'Disabled':
						var _n5 = A2(QiTASC$hatchinq$Hatchinq$DropDown$update, internalMsg, model.disabledDropdown);
						var newState = _n5.a;
						var cmd = _n5.b;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{disabledDropdown: newState}),
							cmd);
					default:
						var _n6 = A2(QiTASC$hatchinq$Hatchinq$DropDown$update, internalMsg, model.fullWidthDropdown);
						var newState = _n6.a;
						var cmd = _n6.b;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{fullWidthDropdown: newState}),
							cmd);
				}
			case 'DataTableChange':
				var internalMsg = msg.a;
				var _n7 = A2(QiTASC$hatchinq$Hatchinq$DataTable$update, internalMsg, model.dataTable);
				var newState = _n7.a;
				var cmd = _n7.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{dataTable: newState}),
					cmd);
			case 'DataTableSortChange':
				var sortOrder = msg.b;
				var newPersons = function () {
					if (sortOrder.$ === 'Nothing') {
						return QiTASC$hatchinq$Examples$persons;
					} else {
						var order = sortOrder.a;
						return order ? A2(
							elm$core$List$sortBy,
							function (p) {
								return p.age;
							},
							QiTASC$hatchinq$Examples$persons) : elm$core$List$reverse(
							A2(
								elm$core$List$sortBy,
								function (p) {
									return p.age;
								},
								QiTASC$hatchinq$Examples$persons));
					}
				}();
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{persons: newPersons}),
					elm$core$Platform$Cmd$none);
			case 'DataTableSelectionChange':
				var maybePerson = msg.a;
				var checked = msg.b;
				var newSelectedPersons = function () {
					if (maybePerson.$ === 'Just') {
						var person = maybePerson.a;
						return checked ? A2(elm$core$Set$insert, person.id, model.selectedPersons) : A2(elm$core$Set$remove, person.id, model.selectedPersons);
					} else {
						return checked ? elm$core$Set$fromList(
							A2(
								elm$core$List$map,
								function ($) {
									return $.id;
								},
								QiTASC$hatchinq$Examples$persons)) : elm$core$Set$empty;
					}
				}();
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{selectedPersons: newSelectedPersons}),
					elm$core$Platform$Cmd$none);
			case 'DataTableExpansionChange':
				var person = msg.a;
				var expanded = msg.b;
				var newExpandedPersons = expanded ? A2(elm$core$Set$insert, person.id, model.expandedPersons) : A2(elm$core$Set$remove, person.id, model.expandedPersons);
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{expandedPersons: newExpandedPersons}),
					elm$core$Platform$Cmd$none);
			case 'ListStateChange':
				var id = msg.a;
				var internalMsg = msg.b;
				switch (id.$) {
					case 'Simple':
						var _n11 = A2(QiTASC$hatchinq$Hatchinq$List$update, internalMsg, model.list1State);
						var newState = _n11.a;
						var cmd = _n11.b;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{list1State: newState}),
							cmd);
					case 'WithSecondaryText':
						var _n12 = A2(QiTASC$hatchinq$Hatchinq$List$update, internalMsg, model.list2State);
						var newState = _n12.a;
						var cmd = _n12.b;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{list2State: newState}),
							cmd);
					case 'WithImagesAndSelectable':
						var _n13 = A2(QiTASC$hatchinq$Hatchinq$List$update, internalMsg, model.list3State);
						var newState = _n13.a;
						var cmd = _n13.b;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{list3State: newState}),
							cmd);
					default:
						var _n14 = A2(QiTASC$hatchinq$Hatchinq$List$update, internalMsg, model.list4State);
						var newState = _n14.a;
						var cmd = _n14.b;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{list4State: newState}),
							cmd);
				}
			case 'ListValueChange':
				var id = msg.a;
				var value = msg.b;
				switch (id.$) {
					case 'WithImagesAndSelectable':
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									list3Value: elm$core$Maybe$Just(value)
								}),
							elm$core$Platform$Cmd$none);
					case 'WithImagesAndSecondaryTextAndSelectable':
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									list4Value: elm$core$Maybe$Just(value)
								}),
							elm$core$Platform$Cmd$none);
					default:
						return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
				}
			case 'CheckboxValueChange':
				var value = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							checkboxValue: elm$core$Maybe$Just(value)
						}),
					elm$core$Platform$Cmd$none);
			case 'SelectPerson':
				var person = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{selectedPerson: person}),
					elm$core$Platform$Cmd$none);
			case 'WindowSizeChanged':
				var width = msg.a;
				var height = msg.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							windowSize: _Utils_Tuple2(width, height)
						}),
					elm$core$Platform$Cmd$none);
			case 'FilesTreeLift':
				var message = msg.a;
				var newFilesTreeState = A2(QiTASC$hatchinq$Hatchinq$Tree$update, message, model.filesTreeState);
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{filesTreeState: newFilesTreeState}),
					elm$core$Platform$Cmd$none);
			case 'LoadPeople':
				var direction = msg.a;
				var totalItemsCount = (elm$core$List$length(model.infinitePersons) + A2(elm$core$Maybe$withDefault, 0, model.loadingTop)) + A2(elm$core$Maybe$withDefault, 0, model.loadingBottom);
				var deltaItemsCount = elm$core$List$length(QiTASC$hatchinq$Examples$persons);
				if (direction.$ === 'Up') {
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								loadingTop: elm$core$Maybe$Just(deltaItemsCount)
							}),
						A3(
							andrewMacmurray$elm_delay$Delay$after,
							1000,
							andrewMacmurray$elm_delay$Delay$Millisecond,
							QiTASC$hatchinq$Examples$GotPeople(QiTASC$hatchinq$Hatchinq$DataTable$Up)));
				} else {
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								loadingBottom: elm$core$Maybe$Just(deltaItemsCount)
							}),
						A3(
							andrewMacmurray$elm_delay$Delay$after,
							1000,
							andrewMacmurray$elm_delay$Delay$Millisecond,
							QiTASC$hatchinq$Examples$GotPeople(QiTASC$hatchinq$Hatchinq$DataTable$Down)));
				}
			case 'GotPeople':
				var direction = msg.a;
				if (direction.$ === 'Up') {
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								infinitePersons: _Utils_ap(model.infinitePersons, QiTASC$hatchinq$Examples$persons),
								loadingTop: elm$core$Maybe$Nothing
							}),
						elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								infinitePersons: _Utils_ap(model.infinitePersons, QiTASC$hatchinq$Examples$persons),
								loadingBottom: elm$core$Maybe$Nothing
							}),
						elm$core$Platform$Cmd$none);
				}
			case 'Tick':
				var posix = msg.a;
				var millis = elm$time$Time$posixToMillis(posix);
				var progress1 = (millis % 4000) / 20;
				var progressVisibility = (progress1 > 100) ? false : true;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							progressIndicator1: QiTASC$hatchinq$Hatchinq$ProgressIndicator$Determinate(progress1),
							progressIndicatorVisiblity1: progressVisibility,
							progressIndicatorVisiblity2: progressVisibility
						}),
					elm$core$Platform$Cmd$none);
			case 'SnackbarLift':
				var internalMsg = msg.a;
				var _n18 = A3(QiTASC$hatchinq$Hatchinq$Snackbar$update, QiTASC$hatchinq$Examples$SnackbarLift, internalMsg, model.snackbarState);
				var state = _n18.a;
				var cmd = _n18.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{snackbarState: state}),
					cmd);
			case 'SnackbarAlert':
				var content = msg.a;
				return _Utils_Tuple2(
					model,
					A2(QiTASC$hatchinq$Hatchinq$Snackbar$alert, QiTASC$hatchinq$Examples$SnackbarLift, content));
			case 'TabBarLift':
				var internalMsg = msg.a;
				var _n19 = A3(QiTASC$hatchinq$Hatchinq$TabBar$update, QiTASC$hatchinq$Examples$TabBarLift, internalMsg, model.tabBarState);
				var state = _n19.a;
				var cmd = _n19.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{tabBarState: state}),
					cmd);
			case 'TabBarSelect':
				var tab = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{selectedTab: tab}),
					elm$core$Platform$Cmd$none);
			case 'CardLift':
				var internalMsg = msg.a;
				var _n20 = A3(QiTASC$hatchinq$Hatchinq$Card$update, QiTASC$hatchinq$Examples$CardLift, internalMsg, model.cardState);
				var state = _n20.a;
				var cmd = _n20.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{cardState: state}),
					cmd);
			default:
				return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
		}
	});
var QiTASC$hatchinq$Examples$OpenUserOptions = {$: 'OpenUserOptions'};
var QiTASC$hatchinq$Examples$SearchPage = {$: 'SearchPage'};
var QiTASC$hatchinq$Examples$ToggleNavigation = {$: 'ToggleNavigation'};
var QiTASC$hatchinq$Hatchinq$AppBar$appBarHeight = 56;
var elm$html$Html$i = _VirtualDom_node('i');
var elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var elm$html$Html$text = elm$virtual_dom$VirtualDom$text;
var elm$json$Json$Encode$string = _Json_wrap;
var elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			elm$json$Json$Encode$string(string));
	});
var elm$html$Html$Attributes$class = elm$html$Html$Attributes$stringProperty('className');
var elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var elm$html$Html$Attributes$style = elm$virtual_dom$VirtualDom$style;
var mdgriffith$elm_ui$Internal$Model$Unstyled = function (a) {
	return {$: 'Unstyled', a: a};
};
var mdgriffith$elm_ui$Internal$Model$unstyled = A2(elm$core$Basics$composeL, mdgriffith$elm_ui$Internal$Model$Unstyled, elm$core$Basics$always);
var mdgriffith$elm_ui$Element$html = mdgriffith$elm_ui$Internal$Model$unstyled;
var QiTASC$hatchinq$Hatchinq$Theme$icon = function (name) {
	return mdgriffith$elm_ui$Element$html(
		A2(
			elm$html$Html$i,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('material-icons'),
					A2(elm$html$Html$Attributes$style, 'user-select', 'none')
				]),
			_List_fromArray(
				[
					elm$html$Html$text(name)
				])));
};
var elm$html$Html$Attributes$id = elm$html$Html$Attributes$stringProperty('id');
var mdgriffith$elm_ui$Internal$Model$AlignX = function (a) {
	return {$: 'AlignX', a: a};
};
var mdgriffith$elm_ui$Internal$Model$CenterX = {$: 'CenterX'};
var mdgriffith$elm_ui$Element$centerX = mdgriffith$elm_ui$Internal$Model$AlignX(mdgriffith$elm_ui$Internal$Model$CenterX);
var mdgriffith$elm_ui$Internal$Model$AlignY = function (a) {
	return {$: 'AlignY', a: a};
};
var mdgriffith$elm_ui$Internal$Model$CenterY = {$: 'CenterY'};
var mdgriffith$elm_ui$Element$centerY = mdgriffith$elm_ui$Internal$Model$AlignY(mdgriffith$elm_ui$Internal$Model$CenterY);
var mdgriffith$elm_ui$Internal$Model$Height = function (a) {
	return {$: 'Height', a: a};
};
var mdgriffith$elm_ui$Element$height = mdgriffith$elm_ui$Internal$Model$Height;
var mdgriffith$elm_ui$Internal$Model$Content = {$: 'Content'};
var mdgriffith$elm_ui$Element$shrink = mdgriffith$elm_ui$Internal$Model$Content;
var mdgriffith$elm_ui$Internal$Model$Width = function (a) {
	return {$: 'Width', a: a};
};
var mdgriffith$elm_ui$Element$width = mdgriffith$elm_ui$Internal$Model$Width;
var mdgriffith$elm_ui$Internal$Model$Unkeyed = function (a) {
	return {$: 'Unkeyed', a: a};
};
var mdgriffith$elm_ui$Internal$Model$AsEl = {$: 'AsEl'};
var mdgriffith$elm_ui$Internal$Model$asEl = mdgriffith$elm_ui$Internal$Model$AsEl;
var mdgriffith$elm_ui$Internal$Model$Generic = {$: 'Generic'};
var mdgriffith$elm_ui$Internal$Model$div = mdgriffith$elm_ui$Internal$Model$Generic;
var mdgriffith$elm_ui$Internal$Flag$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var mdgriffith$elm_ui$Internal$Flag$none = A2(mdgriffith$elm_ui$Internal$Flag$Field, 0, 0);
var mdgriffith$elm_ui$Internal$Model$NoNearbyChildren = {$: 'NoNearbyChildren'};
var mdgriffith$elm_ui$Internal$Style$classes = {above: 'a', active: 'atv', alignBottom: 'ab', alignCenterX: 'cx', alignCenterY: 'cy', alignContainerBottom: 'acb', alignContainerCenterX: 'accx', alignContainerCenterY: 'accy', alignContainerRight: 'acr', alignLeft: 'al', alignRight: 'ar', alignTop: 'at', alignedHorizontally: 'ah', alignedVertically: 'av', any: 's', behind: 'bh', below: 'b', bold: 'w7', borderDashed: 'bd', borderDotted: 'bdt', borderNone: 'bn', borderSolid: 'bs', capturePointerEvents: 'cpe', clip: 'cp', clipX: 'cpx', clipY: 'cpy', column: 'c', container: 'ctr', contentBottom: 'cb', contentCenterX: 'ccx', contentCenterY: 'ccy', contentLeft: 'cl', contentRight: 'cr', contentTop: 'ct', cursorPointer: 'cptr', cursorText: 'ctxt', focus: 'fcs', focusedWithin: 'focus-within', fullSize: 'fs', grid: 'g', hasBehind: 'hbh', heightContent: 'hc', heightExact: 'he', heightFill: 'hf', heightFillPortion: 'hfp', hover: 'hv', imageContainer: 'ic', inFront: 'fr', inputMultiline: 'iml', inputMultilineFiller: 'imlf', inputMultilineParent: 'imlp', inputMultilineWrapper: 'implw', inputText: 'it', italic: 'i', link: 'lnk', nearby: 'nb', noTextSelection: 'notxt', onLeft: 'ol', onRight: 'or', opaque: 'oq', overflowHidden: 'oh', page: 'pg', paragraph: 'p', passPointerEvents: 'ppe', root: 'ui', row: 'r', scrollbars: 'sb', scrollbarsX: 'sbx', scrollbarsY: 'sby', seButton: 'sbt', single: 'e', sizeByCapital: 'cap', spaceEvenly: 'sev', strike: 'sk', text: 't', textCenter: 'tc', textExtraBold: 'w8', textExtraLight: 'w2', textHeavy: 'w9', textJustify: 'tj', textJustifyAll: 'tja', textLeft: 'tl', textLight: 'w3', textMedium: 'w5', textNormalWeight: 'w4', textRight: 'tr', textSemiBold: 'w6', textThin: 'w1', textUnitalicized: 'tun', transition: 'ts', transparent: 'clr', underline: 'u', widthContent: 'wc', widthExact: 'we', widthFill: 'wf', widthFillPortion: 'wfp', wrapped: 'wrp'};
var mdgriffith$elm_ui$Internal$Model$columnClass = mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + mdgriffith$elm_ui$Internal$Style$classes.column);
var mdgriffith$elm_ui$Internal$Model$gridClass = mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + mdgriffith$elm_ui$Internal$Style$classes.grid);
var mdgriffith$elm_ui$Internal$Model$pageClass = mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + mdgriffith$elm_ui$Internal$Style$classes.page);
var mdgriffith$elm_ui$Internal$Model$paragraphClass = mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + mdgriffith$elm_ui$Internal$Style$classes.paragraph);
var mdgriffith$elm_ui$Internal$Model$rowClass = mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + mdgriffith$elm_ui$Internal$Style$classes.row);
var mdgriffith$elm_ui$Internal$Model$singleClass = mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + mdgriffith$elm_ui$Internal$Style$classes.single);
var mdgriffith$elm_ui$Internal$Model$contextClasses = function (context) {
	switch (context.$) {
		case 'AsRow':
			return mdgriffith$elm_ui$Internal$Model$rowClass;
		case 'AsColumn':
			return mdgriffith$elm_ui$Internal$Model$columnClass;
		case 'AsEl':
			return mdgriffith$elm_ui$Internal$Model$singleClass;
		case 'AsGrid':
			return mdgriffith$elm_ui$Internal$Model$gridClass;
		case 'AsParagraph':
			return mdgriffith$elm_ui$Internal$Model$paragraphClass;
		default:
			return mdgriffith$elm_ui$Internal$Model$pageClass;
	}
};
var mdgriffith$elm_ui$Internal$Model$Keyed = function (a) {
	return {$: 'Keyed', a: a};
};
var mdgriffith$elm_ui$Internal$Model$NoStyleSheet = {$: 'NoStyleSheet'};
var mdgriffith$elm_ui$Internal$Model$Styled = function (a) {
	return {$: 'Styled', a: a};
};
var mdgriffith$elm_ui$Internal$Model$addChildren = F2(
	function (existing, nearbyChildren) {
		switch (nearbyChildren.$) {
			case 'NoNearbyChildren':
				return existing;
			case 'ChildrenBehind':
				var behind = nearbyChildren.a;
				return _Utils_ap(behind, existing);
			case 'ChildrenInFront':
				var inFront = nearbyChildren.a;
				return _Utils_ap(existing, inFront);
			default:
				var behind = nearbyChildren.a;
				var inFront = nearbyChildren.b;
				return _Utils_ap(
					behind,
					_Utils_ap(existing, inFront));
		}
	});
var mdgriffith$elm_ui$Internal$Model$addKeyedChildren = F3(
	function (key, existing, nearbyChildren) {
		switch (nearbyChildren.$) {
			case 'NoNearbyChildren':
				return existing;
			case 'ChildrenBehind':
				var behind = nearbyChildren.a;
				return _Utils_ap(
					A2(
						elm$core$List$map,
						function (x) {
							return _Utils_Tuple2(key, x);
						},
						behind),
					existing);
			case 'ChildrenInFront':
				var inFront = nearbyChildren.a;
				return _Utils_ap(
					existing,
					A2(
						elm$core$List$map,
						function (x) {
							return _Utils_Tuple2(key, x);
						},
						inFront));
			default:
				var behind = nearbyChildren.a;
				var inFront = nearbyChildren.b;
				return _Utils_ap(
					A2(
						elm$core$List$map,
						function (x) {
							return _Utils_Tuple2(key, x);
						},
						behind),
					_Utils_ap(
						existing,
						A2(
							elm$core$List$map,
							function (x) {
								return _Utils_Tuple2(key, x);
							},
							inFront)));
		}
	});
var mdgriffith$elm_ui$Internal$Model$AsParagraph = {$: 'AsParagraph'};
var mdgriffith$elm_ui$Internal$Model$asParagraph = mdgriffith$elm_ui$Internal$Model$AsParagraph;
var elm$html$Html$div = _VirtualDom_node('div');
var elm$html$Html$p = _VirtualDom_node('p');
var elm$html$Html$s = _VirtualDom_node('s');
var elm$html$Html$u = _VirtualDom_node('u');
var elm$virtual_dom$VirtualDom$keyedNode = function (tag) {
	return _VirtualDom_keyedNode(
		_VirtualDom_noScript(tag));
};
var elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var mdgriffith$elm_ui$Internal$Flag$Flag = function (a) {
	return {$: 'Flag', a: a};
};
var mdgriffith$elm_ui$Internal$Flag$Second = function (a) {
	return {$: 'Second', a: a};
};
var mdgriffith$elm_ui$Internal$Flag$flag = function (i) {
	return (i > 31) ? mdgriffith$elm_ui$Internal$Flag$Second(1 << (i - 32)) : mdgriffith$elm_ui$Internal$Flag$Flag(1 << i);
};
var mdgriffith$elm_ui$Internal$Flag$alignBottom = mdgriffith$elm_ui$Internal$Flag$flag(41);
var mdgriffith$elm_ui$Internal$Flag$alignRight = mdgriffith$elm_ui$Internal$Flag$flag(40);
var mdgriffith$elm_ui$Internal$Flag$centerX = mdgriffith$elm_ui$Internal$Flag$flag(42);
var mdgriffith$elm_ui$Internal$Flag$centerY = mdgriffith$elm_ui$Internal$Flag$flag(43);
var mdgriffith$elm_ui$Internal$Flag$heightBetween = mdgriffith$elm_ui$Internal$Flag$flag(45);
var mdgriffith$elm_ui$Internal$Flag$heightFill = mdgriffith$elm_ui$Internal$Flag$flag(37);
var elm$core$Bitwise$and = _Bitwise_and;
var mdgriffith$elm_ui$Internal$Flag$present = F2(
	function (myFlag, _n0) {
		var fieldOne = _n0.a;
		var fieldTwo = _n0.b;
		if (myFlag.$ === 'Flag') {
			var first = myFlag.a;
			return _Utils_eq(first & fieldOne, first);
		} else {
			var second = myFlag.a;
			return _Utils_eq(second & fieldTwo, second);
		}
	});
var mdgriffith$elm_ui$Internal$Flag$widthBetween = mdgriffith$elm_ui$Internal$Flag$flag(44);
var mdgriffith$elm_ui$Internal$Flag$widthFill = mdgriffith$elm_ui$Internal$Flag$flag(39);
var elm$core$Tuple$second = function (_n0) {
	var y = _n0.b;
	return y;
};
var elm$core$Dict$member = F2(
	function (key, dict) {
		var _n0 = A2(elm$core$Dict$get, key, dict);
		if (_n0.$ === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var elm$core$Set$member = F2(
	function (key, _n0) {
		var dict = _n0.a;
		return A2(elm$core$Dict$member, key, dict);
	});
var mdgriffith$elm_ui$Internal$Model$lengthClassName = function (x) {
	switch (x.$) {
		case 'Px':
			var px = x.a;
			return elm$core$String$fromInt(px) + 'px';
		case 'Content':
			return 'auto';
		case 'Fill':
			var i = x.a;
			return elm$core$String$fromInt(i) + 'fr';
		case 'Min':
			var min = x.a;
			var len = x.b;
			return 'min' + (elm$core$String$fromInt(min) + mdgriffith$elm_ui$Internal$Model$lengthClassName(len));
		default:
			var max = x.a;
			var len = x.b;
			return 'max' + (elm$core$String$fromInt(max) + mdgriffith$elm_ui$Internal$Model$lengthClassName(len));
	}
};
var mdgriffith$elm_ui$Internal$Model$floatClass = function (x) {
	return elm$core$String$fromInt(
		elm$core$Basics$round(x * 255));
};
var mdgriffith$elm_ui$Internal$Model$transformClass = function (transform) {
	switch (transform.$) {
		case 'Untransformed':
			return elm$core$Maybe$Nothing;
		case 'Moved':
			var _n1 = transform.a;
			var x = _n1.a;
			var y = _n1.b;
			var z = _n1.c;
			return elm$core$Maybe$Just(
				'mv-' + (mdgriffith$elm_ui$Internal$Model$floatClass(x) + ('-' + (mdgriffith$elm_ui$Internal$Model$floatClass(y) + ('-' + mdgriffith$elm_ui$Internal$Model$floatClass(z))))));
		default:
			var _n2 = transform.a;
			var tx = _n2.a;
			var ty = _n2.b;
			var tz = _n2.c;
			var _n3 = transform.b;
			var sx = _n3.a;
			var sy = _n3.b;
			var sz = _n3.c;
			var _n4 = transform.c;
			var ox = _n4.a;
			var oy = _n4.b;
			var oz = _n4.c;
			var angle = transform.d;
			return elm$core$Maybe$Just(
				'tfrm-' + (mdgriffith$elm_ui$Internal$Model$floatClass(tx) + ('-' + (mdgriffith$elm_ui$Internal$Model$floatClass(ty) + ('-' + (mdgriffith$elm_ui$Internal$Model$floatClass(tz) + ('-' + (mdgriffith$elm_ui$Internal$Model$floatClass(sx) + ('-' + (mdgriffith$elm_ui$Internal$Model$floatClass(sy) + ('-' + (mdgriffith$elm_ui$Internal$Model$floatClass(sz) + ('-' + (mdgriffith$elm_ui$Internal$Model$floatClass(ox) + ('-' + (mdgriffith$elm_ui$Internal$Model$floatClass(oy) + ('-' + (mdgriffith$elm_ui$Internal$Model$floatClass(oz) + ('-' + mdgriffith$elm_ui$Internal$Model$floatClass(angle))))))))))))))))))));
	}
};
var mdgriffith$elm_ui$Internal$Model$getStyleName = function (style) {
	switch (style.$) {
		case 'Shadows':
			var name = style.a;
			return name;
		case 'Transparency':
			var name = style.a;
			var o = style.b;
			return name;
		case 'Style':
			var _class = style.a;
			return _class;
		case 'FontFamily':
			var name = style.a;
			return name;
		case 'FontSize':
			var i = style.a;
			return 'font-size-' + elm$core$String$fromInt(i);
		case 'Single':
			var _class = style.a;
			return _class;
		case 'Colored':
			var _class = style.a;
			return _class;
		case 'SpacingStyle':
			var cls = style.a;
			var x = style.b;
			var y = style.c;
			return cls;
		case 'PaddingStyle':
			var cls = style.a;
			var top = style.b;
			var right = style.c;
			var bottom = style.d;
			var left = style.e;
			return cls;
		case 'BorderWidth':
			var cls = style.a;
			var top = style.b;
			var right = style.c;
			var bottom = style.d;
			var left = style.e;
			return cls;
		case 'GridTemplateStyle':
			var template = style.a;
			return 'grid-rows-' + (A2(
				elm$core$String$join,
				'-',
				A2(elm$core$List$map, mdgriffith$elm_ui$Internal$Model$lengthClassName, template.rows)) + ('-cols-' + (A2(
				elm$core$String$join,
				'-',
				A2(elm$core$List$map, mdgriffith$elm_ui$Internal$Model$lengthClassName, template.columns)) + ('-space-x-' + (mdgriffith$elm_ui$Internal$Model$lengthClassName(template.spacing.a) + ('-space-y-' + mdgriffith$elm_ui$Internal$Model$lengthClassName(template.spacing.b)))))));
		case 'GridPosition':
			var pos = style.a;
			return 'gp grid-pos-' + (elm$core$String$fromInt(pos.row) + ('-' + (elm$core$String$fromInt(pos.col) + ('-' + (elm$core$String$fromInt(pos.width) + ('-' + elm$core$String$fromInt(pos.height)))))));
		case 'PseudoSelector':
			var selector = style.a;
			var subStyle = style.b;
			var name = function () {
				switch (selector.$) {
					case 'Focus':
						return 'fs';
					case 'Hover':
						return 'hv';
					default:
						return 'act';
				}
			}();
			return A2(
				elm$core$String$join,
				' ',
				A2(
					elm$core$List$map,
					function (sty) {
						var _n1 = mdgriffith$elm_ui$Internal$Model$getStyleName(sty);
						if (_n1 === '') {
							return '';
						} else {
							var styleName = _n1;
							return styleName + ('-' + name);
						}
					},
					subStyle));
		default:
			var x = style.a;
			return A2(
				elm$core$Maybe$withDefault,
				'',
				mdgriffith$elm_ui$Internal$Model$transformClass(x));
	}
};
var mdgriffith$elm_ui$Internal$Model$reduceStyles = F2(
	function (style, nevermind) {
		var cache = nevermind.a;
		var existing = nevermind.b;
		var styleName = mdgriffith$elm_ui$Internal$Model$getStyleName(style);
		return A2(elm$core$Set$member, styleName, cache) ? nevermind : _Utils_Tuple2(
			A2(elm$core$Set$insert, styleName, cache),
			A2(elm$core$List$cons, style, existing));
	});
var elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return elm$core$Maybe$Just(
				f(value));
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var elm$core$Tuple$mapFirst = F2(
	function (func, _n0) {
		var x = _n0.a;
		var y = _n0.b;
		return _Utils_Tuple2(
			func(x),
			y);
	});
var elm$core$Tuple$mapSecond = F2(
	function (func, _n0) {
		var x = _n0.a;
		var y = _n0.b;
		return _Utils_Tuple2(
			x,
			func(y));
	});
var mdgriffith$elm_ui$Internal$Model$Property = F2(
	function (a, b) {
		return {$: 'Property', a: a, b: b};
	});
var mdgriffith$elm_ui$Internal$Model$Style = F2(
	function (a, b) {
		return {$: 'Style', a: a, b: b};
	});
var elm$core$String$fromFloat = _String_fromNumber;
var mdgriffith$elm_ui$Internal$Model$formatColor = function (_n0) {
	var red = _n0.a;
	var green = _n0.b;
	var blue = _n0.c;
	var alpha = _n0.d;
	return 'rgba(' + (elm$core$String$fromInt(
		elm$core$Basics$round(red * 255)) + ((',' + elm$core$String$fromInt(
		elm$core$Basics$round(green * 255))) + ((',' + elm$core$String$fromInt(
		elm$core$Basics$round(blue * 255))) + (',' + (elm$core$String$fromFloat(alpha) + ')')))));
};
var mdgriffith$elm_ui$Internal$Model$formatBoxShadow = function (shadow) {
	return A2(
		elm$core$String$join,
		' ',
		A2(
			elm$core$List$filterMap,
			elm$core$Basics$identity,
			_List_fromArray(
				[
					shadow.inset ? elm$core$Maybe$Just('inset') : elm$core$Maybe$Nothing,
					elm$core$Maybe$Just(
					elm$core$String$fromFloat(shadow.offset.a) + 'px'),
					elm$core$Maybe$Just(
					elm$core$String$fromFloat(shadow.offset.b) + 'px'),
					elm$core$Maybe$Just(
					elm$core$String$fromFloat(shadow.blur) + 'px'),
					elm$core$Maybe$Just(
					elm$core$String$fromFloat(shadow.size) + 'px'),
					elm$core$Maybe$Just(
					mdgriffith$elm_ui$Internal$Model$formatColor(shadow.color))
				])));
};
var mdgriffith$elm_ui$Internal$Style$dot = function (c) {
	return '.' + c;
};
var mdgriffith$elm_ui$Internal$Model$renderFocusStyle = function (focus) {
	return _List_fromArray(
		[
			A2(
			mdgriffith$elm_ui$Internal$Model$Style,
			mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.focusedWithin) + ':focus-within',
			A2(
				elm$core$List$filterMap,
				elm$core$Basics$identity,
				_List_fromArray(
					[
						A2(
						elm$core$Maybe$map,
						function (color) {
							return A2(
								mdgriffith$elm_ui$Internal$Model$Property,
								'border-color',
								mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.borderColor),
						A2(
						elm$core$Maybe$map,
						function (color) {
							return A2(
								mdgriffith$elm_ui$Internal$Model$Property,
								'background-color',
								mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.backgroundColor),
						A2(
						elm$core$Maybe$map,
						function (shadow) {
							return A2(
								mdgriffith$elm_ui$Internal$Model$Property,
								'box-shadow',
								mdgriffith$elm_ui$Internal$Model$formatBoxShadow(
									{
										blur: shadow.blur,
										color: shadow.color,
										inset: false,
										offset: A2(
											elm$core$Tuple$mapSecond,
											elm$core$Basics$toFloat,
											A2(elm$core$Tuple$mapFirst, elm$core$Basics$toFloat, shadow.offset)),
										size: shadow.size
									}));
						},
						focus.shadow),
						elm$core$Maybe$Just(
						A2(mdgriffith$elm_ui$Internal$Model$Property, 'outline', 'none'))
					]))),
			A2(
			mdgriffith$elm_ui$Internal$Model$Style,
			mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.any) + (':focus .focusable, ' + (mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.any) + '.focusable:focus')),
			A2(
				elm$core$List$filterMap,
				elm$core$Basics$identity,
				_List_fromArray(
					[
						A2(
						elm$core$Maybe$map,
						function (color) {
							return A2(
								mdgriffith$elm_ui$Internal$Model$Property,
								'border-color',
								mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.borderColor),
						A2(
						elm$core$Maybe$map,
						function (color) {
							return A2(
								mdgriffith$elm_ui$Internal$Model$Property,
								'background-color',
								mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.backgroundColor),
						A2(
						elm$core$Maybe$map,
						function (shadow) {
							return A2(
								mdgriffith$elm_ui$Internal$Model$Property,
								'box-shadow',
								mdgriffith$elm_ui$Internal$Model$formatBoxShadow(
									{
										blur: shadow.blur,
										color: shadow.color,
										inset: false,
										offset: A2(
											elm$core$Tuple$mapSecond,
											elm$core$Basics$toFloat,
											A2(elm$core$Tuple$mapFirst, elm$core$Basics$toFloat, shadow.offset)),
										size: shadow.size
									}));
						},
						focus.shadow),
						elm$core$Maybe$Just(
						A2(mdgriffith$elm_ui$Internal$Model$Property, 'outline', 'none'))
					])))
		]);
};
var elm$virtual_dom$VirtualDom$property = F2(
	function (key, value) {
		return A2(
			_VirtualDom_property,
			_VirtualDom_noInnerHtmlOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var mdgriffith$elm_ui$Internal$Style$Batch = function (a) {
	return {$: 'Batch', a: a};
};
var mdgriffith$elm_ui$Internal$Style$Child = F2(
	function (a, b) {
		return {$: 'Child', a: a, b: b};
	});
var mdgriffith$elm_ui$Internal$Style$Class = F2(
	function (a, b) {
		return {$: 'Class', a: a, b: b};
	});
var mdgriffith$elm_ui$Internal$Style$Descriptor = F2(
	function (a, b) {
		return {$: 'Descriptor', a: a, b: b};
	});
var mdgriffith$elm_ui$Internal$Style$Left = {$: 'Left'};
var mdgriffith$elm_ui$Internal$Style$Prop = F2(
	function (a, b) {
		return {$: 'Prop', a: a, b: b};
	});
var mdgriffith$elm_ui$Internal$Style$Right = {$: 'Right'};
var mdgriffith$elm_ui$Internal$Style$Self = function (a) {
	return {$: 'Self', a: a};
};
var mdgriffith$elm_ui$Internal$Style$Supports = F2(
	function (a, b) {
		return {$: 'Supports', a: a, b: b};
	});
var elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3(elm$core$List$foldr, elm$core$List$cons, ys, xs);
		}
	});
var elm$core$List$concat = function (lists) {
	return A3(elm$core$List$foldr, elm$core$List$append, _List_Nil, lists);
};
var elm$core$List$concatMap = F2(
	function (f, list) {
		return elm$core$List$concat(
			A2(elm$core$List$map, f, list));
	});
var mdgriffith$elm_ui$Internal$Style$Content = function (a) {
	return {$: 'Content', a: a};
};
var mdgriffith$elm_ui$Internal$Style$Bottom = {$: 'Bottom'};
var mdgriffith$elm_ui$Internal$Style$CenterX = {$: 'CenterX'};
var mdgriffith$elm_ui$Internal$Style$CenterY = {$: 'CenterY'};
var mdgriffith$elm_ui$Internal$Style$Top = {$: 'Top'};
var mdgriffith$elm_ui$Internal$Style$alignments = _List_fromArray(
	[mdgriffith$elm_ui$Internal$Style$Top, mdgriffith$elm_ui$Internal$Style$Bottom, mdgriffith$elm_ui$Internal$Style$Right, mdgriffith$elm_ui$Internal$Style$Left, mdgriffith$elm_ui$Internal$Style$CenterX, mdgriffith$elm_ui$Internal$Style$CenterY]);
var mdgriffith$elm_ui$Internal$Style$contentName = function (desc) {
	switch (desc.a.$) {
		case 'Top':
			var _n1 = desc.a;
			return mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.contentTop);
		case 'Bottom':
			var _n2 = desc.a;
			return mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.contentBottom);
		case 'Right':
			var _n3 = desc.a;
			return mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.contentRight);
		case 'Left':
			var _n4 = desc.a;
			return mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.contentLeft);
		case 'CenterX':
			var _n5 = desc.a;
			return mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.contentCenterX);
		default:
			var _n6 = desc.a;
			return mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.contentCenterY);
	}
};
var mdgriffith$elm_ui$Internal$Style$selfName = function (desc) {
	switch (desc.a.$) {
		case 'Top':
			var _n1 = desc.a;
			return mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.alignTop);
		case 'Bottom':
			var _n2 = desc.a;
			return mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.alignBottom);
		case 'Right':
			var _n3 = desc.a;
			return mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.alignRight);
		case 'Left':
			var _n4 = desc.a;
			return mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.alignLeft);
		case 'CenterX':
			var _n5 = desc.a;
			return mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.alignCenterX);
		default:
			var _n6 = desc.a;
			return mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.alignCenterY);
	}
};
var mdgriffith$elm_ui$Internal$Style$describeAlignment = function (values) {
	var createDescription = function (alignment) {
		var _n0 = values(alignment);
		var content = _n0.a;
		var indiv = _n0.b;
		return _List_fromArray(
			[
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$contentName(
					mdgriffith$elm_ui$Internal$Style$Content(alignment)),
				content),
				A2(
				mdgriffith$elm_ui$Internal$Style$Child,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.any),
				_List_fromArray(
					[
						A2(
						mdgriffith$elm_ui$Internal$Style$Descriptor,
						mdgriffith$elm_ui$Internal$Style$selfName(
							mdgriffith$elm_ui$Internal$Style$Self(alignment)),
						indiv)
					]))
			]);
	};
	return mdgriffith$elm_ui$Internal$Style$Batch(
		A2(elm$core$List$concatMap, createDescription, mdgriffith$elm_ui$Internal$Style$alignments));
};
var mdgriffith$elm_ui$Internal$Style$elDescription = _List_fromArray(
	[
		A2(mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
		A2(mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'column'),
		A2(mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre'),
		A2(
		mdgriffith$elm_ui$Internal$Style$Descriptor,
		mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.hasBehind),
		_List_fromArray(
			[
				A2(mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
				A2(
				mdgriffith$elm_ui$Internal$Style$Child,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.behind),
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '-1')
					]))
			])),
		A2(
		mdgriffith$elm_ui$Internal$Style$Descriptor,
		mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.seButton),
		_List_fromArray(
			[
				A2(
				mdgriffith$elm_ui$Internal$Style$Child,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.text),
				_List_fromArray(
					[
						A2(
						mdgriffith$elm_ui$Internal$Style$Descriptor,
						mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.heightFill),
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						mdgriffith$elm_ui$Internal$Style$Descriptor,
						mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.widthFill),
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'auto !important')
							]))
					]))
			])),
		A2(
		mdgriffith$elm_ui$Internal$Style$Child,
		mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.heightContent),
		_List_fromArray(
			[
				A2(mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto')
			])),
		A2(
		mdgriffith$elm_ui$Internal$Style$Child,
		mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.heightFill),
		_List_fromArray(
			[
				A2(mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '100000')
			])),
		A2(
		mdgriffith$elm_ui$Internal$Style$Child,
		mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.widthFill),
		_List_fromArray(
			[
				A2(mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
			])),
		A2(
		mdgriffith$elm_ui$Internal$Style$Child,
		mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.widthFillPortion),
		_List_fromArray(
			[
				A2(mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
			])),
		A2(
		mdgriffith$elm_ui$Internal$Style$Child,
		mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.widthContent),
		_List_fromArray(
			[
				A2(mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
			])),
		mdgriffith$elm_ui$Internal$Style$describeAlignment(
		function (alignment) {
			switch (alignment.$) {
				case 'Top':
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
							]),
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important'),
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', '0 !important')
							]));
				case 'Bottom':
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
							]),
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', '0 !important')
							]));
				case 'Right':
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
							]),
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-end')
							]));
				case 'Left':
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
							]),
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
							]));
				case 'CenterX':
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
							]),
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'center')
							]));
				default:
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2(
								mdgriffith$elm_ui$Internal$Style$Child,
								mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.any),
								_List_fromArray(
									[
										A2(mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto'),
										A2(mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto')
									]))
							]),
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important')
							]));
			}
		})
	]);
var mdgriffith$elm_ui$Internal$Style$gridAlignments = function (values) {
	var createDescription = function (alignment) {
		return _List_fromArray(
			[
				A2(
				mdgriffith$elm_ui$Internal$Style$Child,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.any),
				_List_fromArray(
					[
						A2(
						mdgriffith$elm_ui$Internal$Style$Descriptor,
						mdgriffith$elm_ui$Internal$Style$selfName(
							mdgriffith$elm_ui$Internal$Style$Self(alignment)),
						values(alignment))
					]))
			]);
	};
	return mdgriffith$elm_ui$Internal$Style$Batch(
		A2(elm$core$List$concatMap, createDescription, mdgriffith$elm_ui$Internal$Style$alignments));
};
var mdgriffith$elm_ui$Internal$Style$Above = {$: 'Above'};
var mdgriffith$elm_ui$Internal$Style$Behind = {$: 'Behind'};
var mdgriffith$elm_ui$Internal$Style$Below = {$: 'Below'};
var mdgriffith$elm_ui$Internal$Style$OnLeft = {$: 'OnLeft'};
var mdgriffith$elm_ui$Internal$Style$OnRight = {$: 'OnRight'};
var mdgriffith$elm_ui$Internal$Style$Within = {$: 'Within'};
var mdgriffith$elm_ui$Internal$Style$locations = function () {
	var loc = mdgriffith$elm_ui$Internal$Style$Above;
	var _n0 = function () {
		switch (loc.$) {
			case 'Above':
				return _Utils_Tuple0;
			case 'Below':
				return _Utils_Tuple0;
			case 'OnRight':
				return _Utils_Tuple0;
			case 'OnLeft':
				return _Utils_Tuple0;
			case 'Within':
				return _Utils_Tuple0;
			default:
				return _Utils_Tuple0;
		}
	}();
	return _List_fromArray(
		[mdgriffith$elm_ui$Internal$Style$Above, mdgriffith$elm_ui$Internal$Style$Below, mdgriffith$elm_ui$Internal$Style$OnRight, mdgriffith$elm_ui$Internal$Style$OnLeft, mdgriffith$elm_ui$Internal$Style$Within, mdgriffith$elm_ui$Internal$Style$Behind]);
}();
var mdgriffith$elm_ui$Internal$Style$baseSheet = _List_fromArray(
	[
		A2(
		mdgriffith$elm_ui$Internal$Style$Class,
		'html,body',
		_List_fromArray(
			[
				A2(mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
				A2(mdgriffith$elm_ui$Internal$Style$Prop, 'padding', '0'),
				A2(mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0')
			])),
		A2(
		mdgriffith$elm_ui$Internal$Style$Class,
		_Utils_ap(
			mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.any),
			_Utils_ap(
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.single),
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.imageContainer))),
		_List_fromArray(
			[
				A2(mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'block')
			])),
		A2(
		mdgriffith$elm_ui$Internal$Style$Class,
		mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.any) + ':focus',
		_List_fromArray(
			[
				A2(mdgriffith$elm_ui$Internal$Style$Prop, 'outline', 'none')
			])),
		A2(
		mdgriffith$elm_ui$Internal$Style$Class,
		mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.root),
		_List_fromArray(
			[
				A2(mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
				A2(mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto'),
				A2(mdgriffith$elm_ui$Internal$Style$Prop, 'min-height', '100%'),
				A2(mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				_Utils_ap(
					mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.any),
					mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.heightFill)),
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
						A2(
						mdgriffith$elm_ui$Internal$Style$Child,
						mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.heightFill),
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%')
							]))
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Child,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.inFront),
				_List_fromArray(
					[
						A2(
						mdgriffith$elm_ui$Internal$Style$Descriptor,
						mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.nearby),
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'fixed')
							]))
					]))
			])),
		A2(
		mdgriffith$elm_ui$Internal$Style$Class,
		mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.nearby),
		_List_fromArray(
			[
				A2(mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'relative'),
				A2(mdgriffith$elm_ui$Internal$Style$Prop, 'border', 'none'),
				A2(mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
				A2(mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'row'),
				A2(mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.single),
				mdgriffith$elm_ui$Internal$Style$elDescription),
				mdgriffith$elm_ui$Internal$Style$Batch(
				function (fn) {
					return A2(elm$core$List$map, fn, mdgriffith$elm_ui$Internal$Style$locations);
				}(
					function (loc) {
						switch (loc.$) {
							case 'Above':
								return A2(
									mdgriffith$elm_ui$Internal$Style$Descriptor,
									mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.above),
									_List_fromArray(
										[
											A2(mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2(mdgriffith$elm_ui$Internal$Style$Prop, 'bottom', '100%'),
											A2(mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2(mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2(mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2(mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2(
											mdgriffith$elm_ui$Internal$Style$Child,
											mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.heightFill),
											_List_fromArray(
												[
													A2(mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto')
												])),
											A2(
											mdgriffith$elm_ui$Internal$Style$Child,
											mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.widthFill),
											_List_fromArray(
												[
													A2(mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
												])),
											A2(mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2(mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							case 'Below':
								return A2(
									mdgriffith$elm_ui$Internal$Style$Descriptor,
									mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.below),
									_List_fromArray(
										[
											A2(mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2(mdgriffith$elm_ui$Internal$Style$Prop, 'bottom', '0'),
											A2(mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2(mdgriffith$elm_ui$Internal$Style$Prop, 'height', '0'),
											A2(mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2(mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2(mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2(mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2(mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												])),
											A2(
											mdgriffith$elm_ui$Internal$Style$Child,
											mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.heightFill),
											_List_fromArray(
												[
													A2(mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto')
												]))
										]));
							case 'OnRight':
								return A2(
									mdgriffith$elm_ui$Internal$Style$Descriptor,
									mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.onRight),
									_List_fromArray(
										[
											A2(mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2(mdgriffith$elm_ui$Internal$Style$Prop, 'left', '100%'),
											A2(mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2(mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2(mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2(mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2(mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2(mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							case 'OnLeft':
								return A2(
									mdgriffith$elm_ui$Internal$Style$Descriptor,
									mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.onLeft),
									_List_fromArray(
										[
											A2(mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2(mdgriffith$elm_ui$Internal$Style$Prop, 'right', '100%'),
											A2(mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2(mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2(mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2(mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2(mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2(mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							case 'Within':
								return A2(
									mdgriffith$elm_ui$Internal$Style$Descriptor,
									mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.inFront),
									_List_fromArray(
										[
											A2(mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2(mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2(mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2(mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2(mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2(mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2(mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2(mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							default:
								return A2(
									mdgriffith$elm_ui$Internal$Style$Descriptor,
									mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.behind),
									_List_fromArray(
										[
											A2(mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2(mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2(mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2(mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2(mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2(mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2(mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
											A2(mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2(mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
						}
					}))
			])),
		A2(
		mdgriffith$elm_ui$Internal$Style$Class,
		mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.any),
		_List_fromArray(
			[
				A2(mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'relative'),
				A2(mdgriffith$elm_ui$Internal$Style$Prop, 'border', 'none'),
				A2(mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '0'),
				A2(mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
				A2(mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'row'),
				A2(mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
				A2(mdgriffith$elm_ui$Internal$Style$Prop, 'resize', 'none'),
				A2(mdgriffith$elm_ui$Internal$Style$Prop, 'font-feature-settings', 'inherit'),
				A2(mdgriffith$elm_ui$Internal$Style$Prop, 'box-sizing', 'border-box'),
				A2(mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0'),
				A2(mdgriffith$elm_ui$Internal$Style$Prop, 'padding', '0'),
				A2(mdgriffith$elm_ui$Internal$Style$Prop, 'border-width', '0'),
				A2(mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'solid'),
				A2(mdgriffith$elm_ui$Internal$Style$Prop, 'font-size', 'inherit'),
				A2(mdgriffith$elm_ui$Internal$Style$Prop, 'color', 'inherit'),
				A2(mdgriffith$elm_ui$Internal$Style$Prop, 'font-family', 'inherit'),
				A2(mdgriffith$elm_ui$Internal$Style$Prop, 'line-height', '1'),
				A2(mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', 'inherit'),
				A2(mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'none'),
				A2(mdgriffith$elm_ui$Internal$Style$Prop, 'font-style', 'inherit'),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.wrapped),
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'flex-wrap', 'wrap')
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.noTextSelection),
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, '-moz-user-select', 'none'),
						A2(mdgriffith$elm_ui$Internal$Style$Prop, '-webkit-user-select', 'none'),
						A2(mdgriffith$elm_ui$Internal$Style$Prop, '-ms-user-select', 'none'),
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'user-select', 'none')
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.cursorPointer),
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'cursor', 'pointer')
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.cursorText),
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'cursor', 'text')
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.passPointerEvents),
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none !important')
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.capturePointerEvents),
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto !important')
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.transparent),
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.opaque),
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap(mdgriffith$elm_ui$Internal$Style$classes.hover, mdgriffith$elm_ui$Internal$Style$classes.transparent)) + ':hover',
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap(mdgriffith$elm_ui$Internal$Style$classes.hover, mdgriffith$elm_ui$Internal$Style$classes.opaque)) + ':hover',
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap(mdgriffith$elm_ui$Internal$Style$classes.focus, mdgriffith$elm_ui$Internal$Style$classes.transparent)) + ':focus',
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap(mdgriffith$elm_ui$Internal$Style$classes.focus, mdgriffith$elm_ui$Internal$Style$classes.opaque)) + ':focus',
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap(mdgriffith$elm_ui$Internal$Style$classes.active, mdgriffith$elm_ui$Internal$Style$classes.transparent)) + ':active',
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap(mdgriffith$elm_ui$Internal$Style$classes.active, mdgriffith$elm_ui$Internal$Style$classes.opaque)) + ':active',
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.transition),
				_List_fromArray(
					[
						A2(
						mdgriffith$elm_ui$Internal$Style$Prop,
						'transition',
						A2(
							elm$core$String$join,
							', ',
							A2(
								elm$core$List$map,
								function (x) {
									return x + ' 160ms';
								},
								_List_fromArray(
									['transform', 'opacity', 'filter', 'background-color', 'color', 'font-size']))))
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.scrollbars),
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'overflow', 'auto'),
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.scrollbarsX),
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-x', 'auto'),
						A2(
						mdgriffith$elm_ui$Internal$Style$Descriptor,
						mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.row),
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
							]))
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.scrollbarsY),
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-y', 'auto'),
						A2(
						mdgriffith$elm_ui$Internal$Style$Descriptor,
						mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.column),
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
							])),
						A2(
						mdgriffith$elm_ui$Internal$Style$Descriptor,
						mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.single),
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
							]))
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.clip),
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'overflow', 'hidden')
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.clipX),
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-x', 'hidden')
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.clipY),
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-y', 'hidden')
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.widthContent),
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'width', 'auto')
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.borderNone),
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'border-width', '0')
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.borderDashed),
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'dashed')
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.borderDotted),
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'dotted')
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.borderSolid),
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'solid')
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.text),
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre'),
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-block')
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.inputText),
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'line-height', '1.05'),
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'background', 'transparent')
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.single),
				mdgriffith$elm_ui$Internal$Style$elDescription),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.row),
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'row'),
						A2(
						mdgriffith$elm_ui$Internal$Style$Child,
						mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.any),
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', '0%'),
								A2(
								mdgriffith$elm_ui$Internal$Style$Descriptor,
								mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.widthExact),
								_List_fromArray(
									[
										A2(mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
									])),
								A2(
								mdgriffith$elm_ui$Internal$Style$Descriptor,
								mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.link),
								_List_fromArray(
									[
										A2(mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
									]))
							])),
						A2(
						mdgriffith$elm_ui$Internal$Style$Child,
						mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.heightFill),
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						mdgriffith$elm_ui$Internal$Style$Child,
						mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.heightFillPortion),
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						mdgriffith$elm_ui$Internal$Style$Child,
						mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.widthFill),
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '100000')
							])),
						A2(
						mdgriffith$elm_ui$Internal$Style$Child,
						mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.container),
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0'),
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch')
							])),
						A2(
						mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + mdgriffith$elm_ui$Internal$Style$classes.alignContainerRight,
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1')
							])),
						A2(
						mdgriffith$elm_ui$Internal$Style$Child,
						's:first-of-type.' + mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX,
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								mdgriffith$elm_ui$Internal$Style$Child,
								mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.alignCenterX),
								_List_fromArray(
									[
										A2(mdgriffith$elm_ui$Internal$Style$Prop, 'margin-left', 'auto !important')
									]))
							])),
						A2(
						mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX,
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								mdgriffith$elm_ui$Internal$Style$Child,
								mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.alignCenterX),
								_List_fromArray(
									[
										A2(mdgriffith$elm_ui$Internal$Style$Prop, 'margin-right', 'auto !important')
									]))
							])),
						A2(
						mdgriffith$elm_ui$Internal$Style$Child,
						's:only-of-type.' + mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX,
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								mdgriffith$elm_ui$Internal$Style$Child,
								mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.alignCenterY),
								_List_fromArray(
									[
										A2(mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2(mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important')
									]))
							])),
						A2(
						mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + (mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX + ' ~ u'),
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + (mdgriffith$elm_ui$Internal$Style$classes.alignContainerRight + (' ~ s.' + mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX)),
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment.$) {
								case 'Top':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2(mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
											]),
										_List_fromArray(
											[
												A2(mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
											]));
								case 'Bottom':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2(mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
											]),
										_List_fromArray(
											[
												A2(mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-end')
											]));
								case 'Right':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2(mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
											]),
										_List_Nil);
								case 'Left':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2(mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
											]),
										_List_Nil);
								case 'CenterX':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2(mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'center')
											]),
										_List_Nil);
								default:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2(mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
											]),
										_List_fromArray(
											[
												A2(mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'center')
											]));
							}
						}),
						A2(
						mdgriffith$elm_ui$Internal$Style$Descriptor,
						mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.spaceEvenly),
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'space-between')
							]))
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.column),
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'column'),
						A2(
						mdgriffith$elm_ui$Internal$Style$Child,
						mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.any),
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', '0%'),
								A2(
								mdgriffith$elm_ui$Internal$Style$Descriptor,
								mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.heightExact),
								_List_fromArray(
									[
										A2(mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
									])),
								A2(
								mdgriffith$elm_ui$Internal$Style$Descriptor,
								mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.column),
								_List_fromArray(
									[
										A2(mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
									]))
							])),
						A2(
						mdgriffith$elm_ui$Internal$Style$Child,
						mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.heightFill),
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '100000')
							])),
						A2(
						mdgriffith$elm_ui$Internal$Style$Child,
						mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.widthFill),
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
							])),
						A2(
						mdgriffith$elm_ui$Internal$Style$Child,
						mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.widthFillPortion),
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
							])),
						A2(
						mdgriffith$elm_ui$Internal$Style$Child,
						mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.widthContent),
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
							])),
						A2(
						mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + mdgriffith$elm_ui$Internal$Style$classes.alignContainerBottom,
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1')
							])),
						A2(
						mdgriffith$elm_ui$Internal$Style$Child,
						's:first-of-type.' + mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY,
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								mdgriffith$elm_ui$Internal$Style$Child,
								mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.alignCenterY),
								_List_fromArray(
									[
										A2(mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2(mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', '0 !important')
									]))
							])),
						A2(
						mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY,
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								mdgriffith$elm_ui$Internal$Style$Child,
								mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.alignCenterY),
								_List_fromArray(
									[
										A2(mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important'),
										A2(mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', '0 !important')
									]))
							])),
						A2(
						mdgriffith$elm_ui$Internal$Style$Child,
						's:only-of-type.' + mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY,
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								mdgriffith$elm_ui$Internal$Style$Child,
								mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.alignCenterY),
								_List_fromArray(
									[
										A2(mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2(mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important')
									]))
							])),
						A2(
						mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + (mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY + ' ~ u'),
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + (mdgriffith$elm_ui$Internal$Style$classes.alignContainerBottom + (' ~ s.' + mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY)),
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment.$) {
								case 'Top':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2(mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
											]),
										_List_fromArray(
											[
												A2(mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto')
											]));
								case 'Bottom':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2(mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
											]),
										_List_fromArray(
											[
												A2(mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto')
											]));
								case 'Right':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2(mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
											]),
										_List_fromArray(
											[
												A2(mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-end')
											]));
								case 'Left':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2(mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
											]),
										_List_fromArray(
											[
												A2(mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
											]));
								case 'CenterX':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2(mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
											]),
										_List_fromArray(
											[
												A2(mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'center')
											]));
								default:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2(mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'center')
											]),
										_List_Nil);
							}
						}),
						A2(
						mdgriffith$elm_ui$Internal$Style$Child,
						mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.container),
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0'),
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						mdgriffith$elm_ui$Internal$Style$Descriptor,
						mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.spaceEvenly),
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'space-between')
							]))
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.grid),
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'display', '-ms-grid'),
						A2(
						mdgriffith$elm_ui$Internal$Style$Child,
						'.gp',
						_List_fromArray(
							[
								A2(
								mdgriffith$elm_ui$Internal$Style$Child,
								mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.any),
								_List_fromArray(
									[
										A2(mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
									]))
							])),
						A2(
						mdgriffith$elm_ui$Internal$Style$Supports,
						_Utils_Tuple2('display', 'grid'),
						_List_fromArray(
							[
								_Utils_Tuple2('display', 'grid')
							])),
						mdgriffith$elm_ui$Internal$Style$gridAlignments(
						function (alignment) {
							switch (alignment.$) {
								case 'Top':
									return _List_fromArray(
										[
											A2(mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
										]);
								case 'Bottom':
									return _List_fromArray(
										[
											A2(mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
										]);
								case 'Right':
									return _List_fromArray(
										[
											A2(mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
										]);
								case 'Left':
									return _List_fromArray(
										[
											A2(mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
										]);
								case 'CenterX':
									return _List_fromArray(
										[
											A2(mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
										]);
								default:
									return _List_fromArray(
										[
											A2(mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'center')
										]);
							}
						})
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.page),
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'block'),
						A2(
						mdgriffith$elm_ui$Internal$Style$Child,
						mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.any + ':first-child'),
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important')
							])),
						A2(
						mdgriffith$elm_ui$Internal$Style$Child,
						mdgriffith$elm_ui$Internal$Style$dot(
							mdgriffith$elm_ui$Internal$Style$classes.any + (mdgriffith$elm_ui$Internal$Style$selfName(
								mdgriffith$elm_ui$Internal$Style$Self(mdgriffith$elm_ui$Internal$Style$Left)) + (':first-child + .' + mdgriffith$elm_ui$Internal$Style$classes.any))),
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important')
							])),
						A2(
						mdgriffith$elm_ui$Internal$Style$Child,
						mdgriffith$elm_ui$Internal$Style$dot(
							mdgriffith$elm_ui$Internal$Style$classes.any + (mdgriffith$elm_ui$Internal$Style$selfName(
								mdgriffith$elm_ui$Internal$Style$Self(mdgriffith$elm_ui$Internal$Style$Right)) + (':first-child + .' + mdgriffith$elm_ui$Internal$Style$classes.any))),
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important')
							])),
						mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment.$) {
								case 'Top':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 'Bottom':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 'Right':
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2(mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'right'),
												A2(
												mdgriffith$elm_ui$Internal$Style$Descriptor,
												'::after',
												_List_fromArray(
													[
														A2(mdgriffith$elm_ui$Internal$Style$Prop, 'content', '\"\"'),
														A2(mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'table'),
														A2(mdgriffith$elm_ui$Internal$Style$Prop, 'clear', 'both')
													]))
											]));
								case 'Left':
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2(mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'left'),
												A2(
												mdgriffith$elm_ui$Internal$Style$Descriptor,
												'::after',
												_List_fromArray(
													[
														A2(mdgriffith$elm_ui$Internal$Style$Prop, 'content', '\"\"'),
														A2(mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'table'),
														A2(mdgriffith$elm_ui$Internal$Style$Prop, 'clear', 'both')
													]))
											]));
								case 'CenterX':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								default:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
							}
						})
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.inputMultiline),
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre-wrap'),
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'background-color', 'transparent')
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.inputMultilineWrapper),
				_List_fromArray(
					[
						A2(
						mdgriffith$elm_ui$Internal$Style$Descriptor,
						mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.single),
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
							]))
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.inputMultilineParent),
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre-wrap'),
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'cursor', 'text'),
						A2(
						mdgriffith$elm_ui$Internal$Style$Child,
						mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.inputMultilineFiller),
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre-wrap'),
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'color', 'transparent')
							]))
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.paragraph),
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'block'),
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal'),
						A2(
						mdgriffith$elm_ui$Internal$Style$Descriptor,
						mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.hasBehind),
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
								A2(
								mdgriffith$elm_ui$Internal$Style$Child,
								mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.behind),
								_List_fromArray(
									[
										A2(mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '-1')
									]))
							])),
						A2(
						mdgriffith$elm_ui$Internal$Style$Child,
						mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.text),
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal')
							])),
						A2(
						mdgriffith$elm_ui$Internal$Style$Child,
						mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.single),
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal'),
								A2(
								mdgriffith$elm_ui$Internal$Style$Descriptor,
								mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.inFront),
								_List_fromArray(
									[
										A2(mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								mdgriffith$elm_ui$Internal$Style$Descriptor,
								mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.behind),
								_List_fromArray(
									[
										A2(mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								mdgriffith$elm_ui$Internal$Style$Descriptor,
								mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.above),
								_List_fromArray(
									[
										A2(mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								mdgriffith$elm_ui$Internal$Style$Descriptor,
								mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.below),
								_List_fromArray(
									[
										A2(mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								mdgriffith$elm_ui$Internal$Style$Descriptor,
								mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.onRight),
								_List_fromArray(
									[
										A2(mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								mdgriffith$elm_ui$Internal$Style$Descriptor,
								mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.onLeft),
								_List_fromArray(
									[
										A2(mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								mdgriffith$elm_ui$Internal$Style$Child,
								mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.text),
								_List_fromArray(
									[
										A2(mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
										A2(mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal')
									])),
								A2(
								mdgriffith$elm_ui$Internal$Style$Child,
								mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.single),
								_List_fromArray(
									[
										A2(
										mdgriffith$elm_ui$Internal$Style$Child,
										mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.text),
										_List_fromArray(
											[
												A2(mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
												A2(mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal')
											]))
									]))
							])),
						A2(
						mdgriffith$elm_ui$Internal$Style$Child,
						mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.row),
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-flex')
							])),
						A2(
						mdgriffith$elm_ui$Internal$Style$Child,
						mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.column),
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-flex')
							])),
						A2(
						mdgriffith$elm_ui$Internal$Style$Child,
						mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.grid),
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-grid')
							])),
						mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment.$) {
								case 'Top':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 'Bottom':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 'Right':
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2(mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'right')
											]));
								case 'Left':
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2(mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'left')
											]));
								case 'CenterX':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								default:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
							}
						})
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				'.hidden',
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'none')
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.textThin),
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '100')
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.textExtraLight),
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '200')
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.textLight),
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '300')
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.textNormalWeight),
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '400')
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.textMedium),
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '500')
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.textSemiBold),
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '600')
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.bold),
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '700')
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.textExtraBold),
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '800')
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.textHeavy),
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '900')
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.italic),
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'font-style', 'italic')
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.strike),
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'line-through')
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.underline),
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'underline'),
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip-ink', 'auto'),
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip', 'ink')
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				_Utils_ap(
					mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.underline),
					mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.strike)),
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'line-through underline'),
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip-ink', 'auto'),
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip', 'ink')
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.textUnitalicized),
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'font-style', 'normal')
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.textJustify),
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'justify')
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.textJustifyAll),
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'justify-all')
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.textCenter),
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'center')
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.textRight),
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'right')
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.textLeft),
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'left')
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Descriptor,
				'.modal',
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'fixed'),
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none')
					]))
			]))
	]);
var mdgriffith$elm_ui$Internal$Style$fontVariant = function (_var) {
	return _List_fromArray(
		[
			A2(
			mdgriffith$elm_ui$Internal$Style$Class,
			'.v-' + _var,
			_List_fromArray(
				[
					A2(mdgriffith$elm_ui$Internal$Style$Prop, 'font-feature-settings', '\"' + (_var + '\"'))
				])),
			A2(
			mdgriffith$elm_ui$Internal$Style$Class,
			'.v-' + (_var + '-off'),
			_List_fromArray(
				[
					A2(mdgriffith$elm_ui$Internal$Style$Prop, 'font-feature-settings', '\"' + (_var + '\" 0'))
				]))
		]);
};
var mdgriffith$elm_ui$Internal$Style$commonValues = elm$core$List$concat(
	_List_fromArray(
		[
			A2(
			elm$core$List$map,
			function (x) {
				return A2(
					mdgriffith$elm_ui$Internal$Style$Class,
					'.border-' + elm$core$String$fromInt(x),
					_List_fromArray(
						[
							A2(
							mdgriffith$elm_ui$Internal$Style$Prop,
							'border-width',
							elm$core$String$fromInt(x) + 'px')
						]));
			},
			A2(elm$core$List$range, 0, 6)),
			A2(
			elm$core$List$map,
			function (i) {
				return A2(
					mdgriffith$elm_ui$Internal$Style$Class,
					'.font-size-' + elm$core$String$fromInt(i),
					_List_fromArray(
						[
							A2(
							mdgriffith$elm_ui$Internal$Style$Prop,
							'font-size',
							elm$core$String$fromInt(i) + 'px')
						]));
			},
			A2(elm$core$List$range, 8, 32)),
			A2(
			elm$core$List$map,
			function (i) {
				return A2(
					mdgriffith$elm_ui$Internal$Style$Class,
					'.p-' + elm$core$String$fromInt(i),
					_List_fromArray(
						[
							A2(
							mdgriffith$elm_ui$Internal$Style$Prop,
							'padding',
							elm$core$String$fromInt(i) + 'px')
						]));
			},
			A2(elm$core$List$range, 0, 24)),
			_List_fromArray(
			[
				A2(
				mdgriffith$elm_ui$Internal$Style$Class,
				'.v-smcp',
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'font-variant', 'small-caps')
					])),
				A2(
				mdgriffith$elm_ui$Internal$Style$Class,
				'.v-smcp-off',
				_List_fromArray(
					[
						A2(mdgriffith$elm_ui$Internal$Style$Prop, 'font-variant', 'normal')
					]))
			]),
			mdgriffith$elm_ui$Internal$Style$fontVariant('zero'),
			mdgriffith$elm_ui$Internal$Style$fontVariant('onum'),
			mdgriffith$elm_ui$Internal$Style$fontVariant('liga'),
			mdgriffith$elm_ui$Internal$Style$fontVariant('dlig'),
			mdgriffith$elm_ui$Internal$Style$fontVariant('ordn'),
			mdgriffith$elm_ui$Internal$Style$fontVariant('tnum'),
			mdgriffith$elm_ui$Internal$Style$fontVariant('afrc'),
			mdgriffith$elm_ui$Internal$Style$fontVariant('frac')
		]));
var mdgriffith$elm_ui$Internal$Style$explainer = '\n.explain {\n    border: 6px solid rgb(174, 121, 15) !important;\n}\n.explain > .' + (mdgriffith$elm_ui$Internal$Style$classes.any + (' {\n    border: 4px dashed rgb(0, 151, 167) !important;\n}\n\n.ctr {\n    border: none !important;\n}\n.explain > .ctr > .' + (mdgriffith$elm_ui$Internal$Style$classes.any + ' {\n    border: 4px dashed rgb(0, 151, 167) !important;\n}\n\n')));
var mdgriffith$elm_ui$Internal$Style$inputTextReset = '\ninput[type="search"],\ninput[type="search"]::-webkit-search-decoration,\ninput[type="search"]::-webkit-search-cancel-button,\ninput[type="search"]::-webkit-search-results-button,\ninput[type="search"]::-webkit-search-results-decoration {\n  -webkit-appearance:none;\n}\n';
var mdgriffith$elm_ui$Internal$Style$sliderReset = '\ninput[type=range] {\n  -webkit-appearance: none; \n  background: transparent;\n  position:absolute;\n  left:0;\n  top:0;\n  z-index:10;\n  width: 100%;\n  outline: dashed 1px;\n  height: 100%;\n  opacity: 0;\n}\n';
var mdgriffith$elm_ui$Internal$Style$thumbReset = '\ninput[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range]::-moz-range-thumb {\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range]::-ms-thumb {\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range][orient=vertical]{\n    writing-mode: bt-lr; /* IE */\n    -webkit-appearance: slider-vertical;  /* WebKit */\n}\n';
var mdgriffith$elm_ui$Internal$Style$trackReset = '\ninput[type=range]::-moz-range-track {\n    background: transparent;\n    cursor: pointer;\n}\ninput[type=range]::-ms-track {\n    background: transparent;\n    cursor: pointer;\n}\ninput[type=range]::-webkit-slider-runnable-track {\n    background: transparent;\n    cursor: pointer;\n}\n';
var mdgriffith$elm_ui$Internal$Style$overrides = '@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {' + (mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.any) + (mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.row) + (' > ' + (mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.any) + (' { flex-basis: auto !important; } ' + (mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.any) + (mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.row) + (' > ' + (mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.any) + (mdgriffith$elm_ui$Internal$Style$dot(mdgriffith$elm_ui$Internal$Style$classes.container) + (' { flex-basis: auto !important; }}' + (mdgriffith$elm_ui$Internal$Style$inputTextReset + (mdgriffith$elm_ui$Internal$Style$sliderReset + (mdgriffith$elm_ui$Internal$Style$trackReset + (mdgriffith$elm_ui$Internal$Style$thumbReset + mdgriffith$elm_ui$Internal$Style$explainer)))))))))))))));
var elm$core$String$concat = function (strings) {
	return A2(elm$core$String$join, '', strings);
};
var mdgriffith$elm_ui$Internal$Style$Intermediate = function (a) {
	return {$: 'Intermediate', a: a};
};
var mdgriffith$elm_ui$Internal$Style$emptyIntermediate = F2(
	function (selector, closing) {
		return mdgriffith$elm_ui$Internal$Style$Intermediate(
			{closing: closing, others: _List_Nil, props: _List_Nil, selector: selector});
	});
var mdgriffith$elm_ui$Internal$Style$renderRules = F2(
	function (_n0, rulesToRender) {
		var parent = _n0.a;
		var generateIntermediates = F2(
			function (rule, rendered) {
				switch (rule.$) {
					case 'Prop':
						var name = rule.a;
						var val = rule.b;
						return _Utils_update(
							rendered,
							{
								props: A2(
									elm$core$List$cons,
									_Utils_Tuple2(name, val),
									rendered.props)
							});
					case 'Supports':
						var _n2 = rule.a;
						var prop = _n2.a;
						var value = _n2.b;
						var props = rule.b;
						return _Utils_update(
							rendered,
							{
								others: A2(
									elm$core$List$cons,
									mdgriffith$elm_ui$Internal$Style$Intermediate(
										{closing: '\n}', others: _List_Nil, props: props, selector: '@supports (' + (prop + (':' + (value + (') {' + parent.selector))))}),
									rendered.others)
							});
					case 'Adjacent':
						var selector = rule.a;
						var adjRules = rule.b;
						return _Utils_update(
							rendered,
							{
								others: A2(
									elm$core$List$cons,
									A2(
										mdgriffith$elm_ui$Internal$Style$renderRules,
										A2(mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.selector + (' + ' + selector), ''),
										adjRules),
									rendered.others)
							});
					case 'Child':
						var child = rule.a;
						var childRules = rule.b;
						return _Utils_update(
							rendered,
							{
								others: A2(
									elm$core$List$cons,
									A2(
										mdgriffith$elm_ui$Internal$Style$renderRules,
										A2(mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.selector + (' > ' + child), ''),
										childRules),
									rendered.others)
							});
					case 'Descriptor':
						var descriptor = rule.a;
						var descriptorRules = rule.b;
						return _Utils_update(
							rendered,
							{
								others: A2(
									elm$core$List$cons,
									A2(
										mdgriffith$elm_ui$Internal$Style$renderRules,
										A2(
											mdgriffith$elm_ui$Internal$Style$emptyIntermediate,
											_Utils_ap(parent.selector, descriptor),
											''),
										descriptorRules),
									rendered.others)
							});
					default:
						var batched = rule.a;
						return _Utils_update(
							rendered,
							{
								others: A2(
									elm$core$List$cons,
									A2(
										mdgriffith$elm_ui$Internal$Style$renderRules,
										A2(mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.selector, ''),
										batched),
									rendered.others)
							});
				}
			});
		return mdgriffith$elm_ui$Internal$Style$Intermediate(
			A3(elm$core$List$foldr, generateIntermediates, parent, rulesToRender));
	});
var mdgriffith$elm_ui$Internal$Style$renderCompact = function (styleClasses) {
	var renderValues = function (values) {
		return elm$core$String$concat(
			A2(
				elm$core$List$map,
				function (_n3) {
					var x = _n3.a;
					var y = _n3.b;
					return x + (':' + (y + ';'));
				},
				values));
	};
	var renderClass = function (rule) {
		var _n2 = rule.props;
		if (!_n2.b) {
			return '';
		} else {
			return rule.selector + ('{' + (renderValues(rule.props) + (rule.closing + '}')));
		}
	};
	var renderIntermediate = function (_n0) {
		var rule = _n0.a;
		return _Utils_ap(
			renderClass(rule),
			elm$core$String$concat(
				A2(elm$core$List$map, renderIntermediate, rule.others)));
	};
	return elm$core$String$concat(
		A2(
			elm$core$List$map,
			renderIntermediate,
			A3(
				elm$core$List$foldr,
				F2(
					function (_n1, existing) {
						var name = _n1.a;
						var styleRules = _n1.b;
						return A2(
							elm$core$List$cons,
							A2(
								mdgriffith$elm_ui$Internal$Style$renderRules,
								A2(mdgriffith$elm_ui$Internal$Style$emptyIntermediate, name, ''),
								styleRules),
							existing);
					}),
				_List_Nil,
				styleClasses)));
};
var mdgriffith$elm_ui$Internal$Style$rules = _Utils_ap(
	mdgriffith$elm_ui$Internal$Style$overrides,
	mdgriffith$elm_ui$Internal$Style$renderCompact(
		_Utils_ap(mdgriffith$elm_ui$Internal$Style$baseSheet, mdgriffith$elm_ui$Internal$Style$commonValues)));
var mdgriffith$elm_ui$Internal$Model$staticRoot = function (opts) {
	var _n0 = opts.mode;
	switch (_n0.$) {
		case 'Layout':
			return A3(
				elm$virtual_dom$VirtualDom$node,
				'div',
				_List_Nil,
				_List_fromArray(
					[
						A3(
						elm$virtual_dom$VirtualDom$node,
						'style',
						_List_Nil,
						_List_fromArray(
							[
								elm$virtual_dom$VirtualDom$text(mdgriffith$elm_ui$Internal$Style$rules)
							]))
					]));
		case 'NoStaticStyleSheet':
			return elm$virtual_dom$VirtualDom$text('');
		default:
			return A3(
				elm$virtual_dom$VirtualDom$node,
				'elm-ui-static-rules',
				_List_fromArray(
					[
						A2(
						elm$virtual_dom$VirtualDom$property,
						'rules',
						elm$json$Json$Encode$string(mdgriffith$elm_ui$Internal$Style$rules))
					]),
				_List_Nil);
	}
};
var elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(_Utils_Tuple0),
				entries));
	});
var elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			elm$core$List$foldl,
			F2(
				function (_n0, obj) {
					var k = _n0.a;
					var v = _n0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(_Utils_Tuple0),
			pairs));
};
var elm$core$Basics$min = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) < 0) ? x : y;
	});
var elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var mdgriffith$elm_ui$Internal$Model$fontName = function (font) {
	switch (font.$) {
		case 'Serif':
			return 'serif';
		case 'SansSerif':
			return 'sans-serif';
		case 'Monospace':
			return 'monospace';
		case 'Typeface':
			var name = font.a;
			return '\"' + (name + '\"');
		case 'ImportFont':
			var name = font.a;
			var url = font.b;
			return '\"' + (name + '\"');
		default:
			var name = font.a.name;
			return '\"' + (name + '\"');
	}
};
var mdgriffith$elm_ui$Internal$Model$isSmallCaps = function (_var) {
	switch (_var.$) {
		case 'VariantActive':
			var name = _var.a;
			return name === 'smcp';
		case 'VariantOff':
			var name = _var.a;
			return false;
		default:
			var name = _var.a;
			var index = _var.b;
			return (name === 'smcp') && (index === 1);
	}
};
var mdgriffith$elm_ui$Internal$Model$hasSmallCaps = function (typeface) {
	if (typeface.$ === 'FontWith') {
		var font = typeface.a;
		return A2(elm$core$List$any, mdgriffith$elm_ui$Internal$Model$isSmallCaps, font.variants);
	} else {
		return false;
	}
};
var mdgriffith$elm_ui$Internal$Model$renderProps = F3(
	function (force, _n0, existing) {
		var key = _n0.a;
		var val = _n0.b;
		return force ? (existing + ('\n  ' + (key + (': ' + (val + ' !important;'))))) : (existing + ('\n  ' + (key + (': ' + (val + ';')))));
	});
var mdgriffith$elm_ui$Internal$Model$renderStyle = F4(
	function (options, maybePseudo, selector, props) {
		if (maybePseudo.$ === 'Nothing') {
			return _List_fromArray(
				[
					selector + ('{' + (A3(
					elm$core$List$foldl,
					mdgriffith$elm_ui$Internal$Model$renderProps(false),
					'',
					props) + '\n}'))
				]);
		} else {
			var pseudo = maybePseudo.a;
			switch (pseudo.$) {
				case 'Hover':
					var _n2 = options.hover;
					switch (_n2.$) {
						case 'NoHover':
							return _List_Nil;
						case 'ForceHover':
							return _List_fromArray(
								[
									selector + ('-hv {' + (A3(
									elm$core$List$foldl,
									mdgriffith$elm_ui$Internal$Model$renderProps(true),
									'',
									props) + '\n}'))
								]);
						default:
							return _List_fromArray(
								[
									selector + ('-hv:hover {' + (A3(
									elm$core$List$foldl,
									mdgriffith$elm_ui$Internal$Model$renderProps(false),
									'',
									props) + '\n}'))
								]);
					}
				case 'Focus':
					var renderedProps = A3(
						elm$core$List$foldl,
						mdgriffith$elm_ui$Internal$Model$renderProps(false),
						'',
						props);
					return _List_fromArray(
						[selector + ('-fs:focus {' + (renderedProps + '\n}')), '.' + (mdgriffith$elm_ui$Internal$Style$classes.any + (':focus ~ ' + (selector + ('-fs:not(.focus)  {' + (renderedProps + '\n}'))))), '.' + (mdgriffith$elm_ui$Internal$Style$classes.any + (':focus ' + (selector + ('-fs  {' + (renderedProps + '\n}'))))), selector + ('-fs:focus-within {' + (renderedProps + '\n}')), '.focusable-parent:focus ~ ' + ('.' + (mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + (selector + ('-fs {' + (renderedProps + '\n}'))))))]);
				default:
					return _List_fromArray(
						[
							selector + ('-act:active {' + (A3(
							elm$core$List$foldl,
							mdgriffith$elm_ui$Internal$Model$renderProps(false),
							'',
							props) + '\n}'))
						]);
			}
		}
	});
var mdgriffith$elm_ui$Internal$Model$renderVariant = function (_var) {
	switch (_var.$) {
		case 'VariantActive':
			var name = _var.a;
			return '\"' + (name + '\"');
		case 'VariantOff':
			var name = _var.a;
			return '\"' + (name + '\" 0');
		default:
			var name = _var.a;
			var index = _var.b;
			return '\"' + (name + ('\" ' + elm$core$String$fromInt(index)));
	}
};
var mdgriffith$elm_ui$Internal$Model$renderVariants = function (typeface) {
	if (typeface.$ === 'FontWith') {
		var font = typeface.a;
		return elm$core$Maybe$Just(
			A2(
				elm$core$String$join,
				', ',
				A2(elm$core$List$map, mdgriffith$elm_ui$Internal$Model$renderVariant, font.variants)));
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var mdgriffith$elm_ui$Internal$Model$transformValue = function (transform) {
	switch (transform.$) {
		case 'Untransformed':
			return elm$core$Maybe$Nothing;
		case 'Moved':
			var _n1 = transform.a;
			var x = _n1.a;
			var y = _n1.b;
			var z = _n1.c;
			return elm$core$Maybe$Just(
				'translate3d(' + (elm$core$String$fromFloat(x) + ('px, ' + (elm$core$String$fromFloat(y) + ('px, ' + (elm$core$String$fromFloat(z) + 'px)'))))));
		default:
			var _n2 = transform.a;
			var tx = _n2.a;
			var ty = _n2.b;
			var tz = _n2.c;
			var _n3 = transform.b;
			var sx = _n3.a;
			var sy = _n3.b;
			var sz = _n3.c;
			var _n4 = transform.c;
			var ox = _n4.a;
			var oy = _n4.b;
			var oz = _n4.c;
			var angle = transform.d;
			var translate = 'translate3d(' + (elm$core$String$fromFloat(tx) + ('px, ' + (elm$core$String$fromFloat(ty) + ('px, ' + (elm$core$String$fromFloat(tz) + 'px)')))));
			var scale = 'scale3d(' + (elm$core$String$fromFloat(sx) + (', ' + (elm$core$String$fromFloat(sy) + (', ' + (elm$core$String$fromFloat(sz) + ')')))));
			var rotate = 'rotate3d(' + (elm$core$String$fromFloat(ox) + (', ' + (elm$core$String$fromFloat(oy) + (', ' + (elm$core$String$fromFloat(oz) + (', ' + (elm$core$String$fromFloat(angle) + 'rad)')))))));
			return elm$core$Maybe$Just(translate + (' ' + (scale + (' ' + rotate))));
	}
};
var mdgriffith$elm_ui$Internal$Model$renderStyleRule = F3(
	function (options, rule, maybePseudo) {
		switch (rule.$) {
			case 'Style':
				var selector = rule.a;
				var props = rule.b;
				return A4(mdgriffith$elm_ui$Internal$Model$renderStyle, options, maybePseudo, selector, props);
			case 'Shadows':
				var name = rule.a;
				var prop = rule.b;
				return A4(
					mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + name,
					_List_fromArray(
						[
							A2(mdgriffith$elm_ui$Internal$Model$Property, 'box-shadow', prop)
						]));
			case 'Transparency':
				var name = rule.a;
				var transparency = rule.b;
				var opacity = A2(
					elm$core$Basics$max,
					0,
					A2(elm$core$Basics$min, 1, 1 - transparency));
				return A4(
					mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + name,
					_List_fromArray(
						[
							A2(
							mdgriffith$elm_ui$Internal$Model$Property,
							'opacity',
							elm$core$String$fromFloat(opacity))
						]));
			case 'FontSize':
				var i = rule.a;
				return A4(
					mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.font-size-' + elm$core$String$fromInt(i),
					_List_fromArray(
						[
							A2(
							mdgriffith$elm_ui$Internal$Model$Property,
							'font-size',
							elm$core$String$fromInt(i) + 'px')
						]));
			case 'FontFamily':
				var name = rule.a;
				var typefaces = rule.b;
				var features = A2(
					elm$core$String$join,
					', ',
					A2(elm$core$List$filterMap, mdgriffith$elm_ui$Internal$Model$renderVariants, typefaces));
				var families = _List_fromArray(
					[
						A2(
						mdgriffith$elm_ui$Internal$Model$Property,
						'font-family',
						A2(
							elm$core$String$join,
							', ',
							A2(elm$core$List$map, mdgriffith$elm_ui$Internal$Model$fontName, typefaces))),
						A2(mdgriffith$elm_ui$Internal$Model$Property, 'font-feature-settings', features),
						A2(
						mdgriffith$elm_ui$Internal$Model$Property,
						'font-variant',
						A2(elm$core$List$any, mdgriffith$elm_ui$Internal$Model$hasSmallCaps, typefaces) ? 'small-caps' : 'normal')
					]);
				return A4(mdgriffith$elm_ui$Internal$Model$renderStyle, options, maybePseudo, '.' + name, families);
			case 'Single':
				var _class = rule.a;
				var prop = rule.b;
				var val = rule.c;
				return A4(
					mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + _class,
					_List_fromArray(
						[
							A2(mdgriffith$elm_ui$Internal$Model$Property, prop, val)
						]));
			case 'Colored':
				var _class = rule.a;
				var prop = rule.b;
				var color = rule.c;
				return A4(
					mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + _class,
					_List_fromArray(
						[
							A2(
							mdgriffith$elm_ui$Internal$Model$Property,
							prop,
							mdgriffith$elm_ui$Internal$Model$formatColor(color))
						]));
			case 'SpacingStyle':
				var cls = rule.a;
				var x = rule.b;
				var y = rule.c;
				var yPx = elm$core$String$fromInt(y) + 'px';
				var xPx = elm$core$String$fromInt(x) + 'px';
				var single = '.' + mdgriffith$elm_ui$Internal$Style$classes.single;
				var row = '.' + mdgriffith$elm_ui$Internal$Style$classes.row;
				var wrappedRow = '.' + (mdgriffith$elm_ui$Internal$Style$classes.wrapped + row);
				var right = '.' + mdgriffith$elm_ui$Internal$Style$classes.alignRight;
				var paragraph = '.' + mdgriffith$elm_ui$Internal$Style$classes.paragraph;
				var page = '.' + mdgriffith$elm_ui$Internal$Style$classes.page;
				var left = '.' + mdgriffith$elm_ui$Internal$Style$classes.alignLeft;
				var halfY = elm$core$String$fromFloat(y / 2) + 'px';
				var halfX = elm$core$String$fromFloat(x / 2) + 'px';
				var column = '.' + mdgriffith$elm_ui$Internal$Style$classes.column;
				var _class = '.' + cls;
				var any = '.' + mdgriffith$elm_ui$Internal$Style$classes.any;
				return elm$core$List$concat(
					_List_fromArray(
						[
							A4(
							mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (row + (' > ' + (any + (' + ' + any)))),
							_List_fromArray(
								[
									A2(mdgriffith$elm_ui$Internal$Model$Property, 'margin-left', xPx)
								])),
							A4(
							mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (wrappedRow + (' > ' + any)),
							_List_fromArray(
								[
									A2(mdgriffith$elm_ui$Internal$Model$Property, 'margin', halfY + (' ' + halfX))
								])),
							A4(
							mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (column + (' > ' + (any + (' + ' + any)))),
							_List_fromArray(
								[
									A2(mdgriffith$elm_ui$Internal$Model$Property, 'margin-top', yPx)
								])),
							A4(
							mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (page + (' > ' + (any + (' + ' + any)))),
							_List_fromArray(
								[
									A2(mdgriffith$elm_ui$Internal$Model$Property, 'margin-top', yPx)
								])),
							A4(
							mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (page + (' > ' + left)),
							_List_fromArray(
								[
									A2(mdgriffith$elm_ui$Internal$Model$Property, 'margin-right', xPx)
								])),
							A4(
							mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (page + (' > ' + right)),
							_List_fromArray(
								[
									A2(mdgriffith$elm_ui$Internal$Model$Property, 'margin-left', xPx)
								])),
							A4(
							mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_Utils_ap(_class, paragraph),
							_List_fromArray(
								[
									A2(
									mdgriffith$elm_ui$Internal$Model$Property,
									'line-height',
									'calc(1em + ' + (elm$core$String$fromInt(y) + 'px)'))
								])),
							A4(
							mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							'textarea' + (any + _class),
							_List_fromArray(
								[
									A2(
									mdgriffith$elm_ui$Internal$Model$Property,
									'line-height',
									'calc(1em + ' + (elm$core$String$fromInt(y) + 'px)')),
									A2(
									mdgriffith$elm_ui$Internal$Model$Property,
									'height',
									'calc(100% + ' + (elm$core$String$fromInt(y) + 'px)'))
								])),
							A4(
							mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + (' > ' + left)),
							_List_fromArray(
								[
									A2(mdgriffith$elm_ui$Internal$Model$Property, 'margin-right', xPx)
								])),
							A4(
							mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + (' > ' + right)),
							_List_fromArray(
								[
									A2(mdgriffith$elm_ui$Internal$Model$Property, 'margin-left', xPx)
								])),
							A4(
							mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + '::after'),
							_List_fromArray(
								[
									A2(mdgriffith$elm_ui$Internal$Model$Property, 'content', '\'\''),
									A2(mdgriffith$elm_ui$Internal$Model$Property, 'display', 'block'),
									A2(mdgriffith$elm_ui$Internal$Model$Property, 'height', '0'),
									A2(mdgriffith$elm_ui$Internal$Model$Property, 'width', '0'),
									A2(
									mdgriffith$elm_ui$Internal$Model$Property,
									'margin-top',
									elm$core$String$fromInt((-1) * ((y / 2) | 0)) + 'px')
								])),
							A4(
							mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + '::before'),
							_List_fromArray(
								[
									A2(mdgriffith$elm_ui$Internal$Model$Property, 'content', '\'\''),
									A2(mdgriffith$elm_ui$Internal$Model$Property, 'display', 'block'),
									A2(mdgriffith$elm_ui$Internal$Model$Property, 'height', '0'),
									A2(mdgriffith$elm_ui$Internal$Model$Property, 'width', '0'),
									A2(
									mdgriffith$elm_ui$Internal$Model$Property,
									'margin-bottom',
									elm$core$String$fromInt((-1) * ((y / 2) | 0)) + 'px')
								]))
						]));
			case 'PaddingStyle':
				var cls = rule.a;
				var top = rule.b;
				var right = rule.c;
				var bottom = rule.d;
				var left = rule.e;
				var _class = '.' + cls;
				return A4(
					mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					_class,
					_List_fromArray(
						[
							A2(
							mdgriffith$elm_ui$Internal$Model$Property,
							'padding',
							elm$core$String$fromInt(top) + ('px ' + (elm$core$String$fromInt(right) + ('px ' + (elm$core$String$fromInt(bottom) + ('px ' + (elm$core$String$fromInt(left) + 'px')))))))
						]));
			case 'BorderWidth':
				var cls = rule.a;
				var top = rule.b;
				var right = rule.c;
				var bottom = rule.d;
				var left = rule.e;
				var _class = '.' + cls;
				return A4(
					mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					_class,
					_List_fromArray(
						[
							A2(
							mdgriffith$elm_ui$Internal$Model$Property,
							'border-width',
							elm$core$String$fromInt(top) + ('px ' + (elm$core$String$fromInt(right) + ('px ' + (elm$core$String$fromInt(bottom) + ('px ' + (elm$core$String$fromInt(left) + 'px')))))))
						]));
			case 'GridTemplateStyle':
				var template = rule.a;
				var toGridLengthHelper = F3(
					function (minimum, maximum, x) {
						toGridLengthHelper:
						while (true) {
							switch (x.$) {
								case 'Px':
									var px = x.a;
									return elm$core$String$fromInt(px) + 'px';
								case 'Content':
									var _n2 = _Utils_Tuple2(minimum, maximum);
									if (_n2.a.$ === 'Nothing') {
										if (_n2.b.$ === 'Nothing') {
											var _n3 = _n2.a;
											var _n4 = _n2.b;
											return 'max-content';
										} else {
											var _n6 = _n2.a;
											var maxSize = _n2.b.a;
											return 'minmax(max-content, ' + (elm$core$String$fromInt(maxSize) + 'px)');
										}
									} else {
										if (_n2.b.$ === 'Nothing') {
											var minSize = _n2.a.a;
											var _n5 = _n2.b;
											return 'minmax(' + (elm$core$String$fromInt(minSize) + ('px, ' + 'max-content)'));
										} else {
											var minSize = _n2.a.a;
											var maxSize = _n2.b.a;
											return 'minmax(' + (elm$core$String$fromInt(minSize) + ('px, ' + (elm$core$String$fromInt(maxSize) + 'px)')));
										}
									}
								case 'Fill':
									var i = x.a;
									var _n7 = _Utils_Tuple2(minimum, maximum);
									if (_n7.a.$ === 'Nothing') {
										if (_n7.b.$ === 'Nothing') {
											var _n8 = _n7.a;
											var _n9 = _n7.b;
											return elm$core$String$fromInt(i) + 'fr';
										} else {
											var _n11 = _n7.a;
											var maxSize = _n7.b.a;
											return 'minmax(max-content, ' + (elm$core$String$fromInt(maxSize) + 'px)');
										}
									} else {
										if (_n7.b.$ === 'Nothing') {
											var minSize = _n7.a.a;
											var _n10 = _n7.b;
											return 'minmax(' + (elm$core$String$fromInt(minSize) + ('px, ' + (elm$core$String$fromInt(i) + ('fr' + 'fr)'))));
										} else {
											var minSize = _n7.a.a;
											var maxSize = _n7.b.a;
											return 'minmax(' + (elm$core$String$fromInt(minSize) + ('px, ' + (elm$core$String$fromInt(maxSize) + 'px)')));
										}
									}
								case 'Min':
									var m = x.a;
									var len = x.b;
									var $temp$minimum = elm$core$Maybe$Just(m),
										$temp$maximum = maximum,
										$temp$x = len;
									minimum = $temp$minimum;
									maximum = $temp$maximum;
									x = $temp$x;
									continue toGridLengthHelper;
								default:
									var m = x.a;
									var len = x.b;
									var $temp$minimum = minimum,
										$temp$maximum = elm$core$Maybe$Just(m),
										$temp$x = len;
									minimum = $temp$minimum;
									maximum = $temp$maximum;
									x = $temp$x;
									continue toGridLengthHelper;
							}
						}
					});
				var toGridLength = function (x) {
					return A3(toGridLengthHelper, elm$core$Maybe$Nothing, elm$core$Maybe$Nothing, x);
				};
				var xSpacing = toGridLength(template.spacing.a);
				var ySpacing = toGridLength(template.spacing.b);
				var rows = function (x) {
					return 'grid-template-rows: ' + (x + ';');
				}(
					A2(
						elm$core$String$join,
						' ',
						A2(elm$core$List$map, toGridLength, template.rows)));
				var msRows = function (x) {
					return '-ms-grid-rows: ' + (x + ';');
				}(
					A2(
						elm$core$String$join,
						ySpacing,
						A2(elm$core$List$map, toGridLength, template.columns)));
				var msColumns = function (x) {
					return '-ms-grid-columns: ' + (x + ';');
				}(
					A2(
						elm$core$String$join,
						ySpacing,
						A2(elm$core$List$map, toGridLength, template.columns)));
				var gapY = 'grid-row-gap:' + (toGridLength(template.spacing.b) + ';');
				var gapX = 'grid-column-gap:' + (toGridLength(template.spacing.a) + ';');
				var columns = function (x) {
					return 'grid-template-columns: ' + (x + ';');
				}(
					A2(
						elm$core$String$join,
						' ',
						A2(elm$core$List$map, toGridLength, template.columns)));
				var _class = '.grid-rows-' + (A2(
					elm$core$String$join,
					'-',
					A2(elm$core$List$map, mdgriffith$elm_ui$Internal$Model$lengthClassName, template.rows)) + ('-cols-' + (A2(
					elm$core$String$join,
					'-',
					A2(elm$core$List$map, mdgriffith$elm_ui$Internal$Model$lengthClassName, template.columns)) + ('-space-x-' + (mdgriffith$elm_ui$Internal$Model$lengthClassName(template.spacing.a) + ('-space-y-' + mdgriffith$elm_ui$Internal$Model$lengthClassName(template.spacing.b)))))));
				var modernGrid = _class + ('{' + (columns + (rows + (gapX + (gapY + '}')))));
				var supports = '@supports (display:grid) {' + (modernGrid + '}');
				var base = _class + ('{' + (msColumns + (msRows + '}')));
				return _List_fromArray(
					[base, supports]);
			case 'GridPosition':
				var position = rule.a;
				var msPosition = A2(
					elm$core$String$join,
					' ',
					_List_fromArray(
						[
							'-ms-grid-row: ' + (elm$core$String$fromInt(position.row) + ';'),
							'-ms-grid-row-span: ' + (elm$core$String$fromInt(position.height) + ';'),
							'-ms-grid-column: ' + (elm$core$String$fromInt(position.col) + ';'),
							'-ms-grid-column-span: ' + (elm$core$String$fromInt(position.width) + ';')
						]));
				var modernPosition = A2(
					elm$core$String$join,
					' ',
					_List_fromArray(
						[
							'grid-row: ' + (elm$core$String$fromInt(position.row) + (' / ' + (elm$core$String$fromInt(position.row + position.height) + ';'))),
							'grid-column: ' + (elm$core$String$fromInt(position.col) + (' / ' + (elm$core$String$fromInt(position.col + position.width) + ';')))
						]));
				var _class = '.grid-pos-' + (elm$core$String$fromInt(position.row) + ('-' + (elm$core$String$fromInt(position.col) + ('-' + (elm$core$String$fromInt(position.width) + ('-' + elm$core$String$fromInt(position.height)))))));
				var modernGrid = _class + ('{' + (modernPosition + '}'));
				var supports = '@supports (display:grid) {' + (modernGrid + '}');
				var base = _class + ('{' + (msPosition + '}'));
				return _List_fromArray(
					[base, supports]);
			case 'PseudoSelector':
				var _class = rule.a;
				var styles = rule.b;
				var renderPseudoRule = function (style) {
					return A3(
						mdgriffith$elm_ui$Internal$Model$renderStyleRule,
						options,
						style,
						elm$core$Maybe$Just(_class));
				};
				return A2(elm$core$List$concatMap, renderPseudoRule, styles);
			default:
				var transform = rule.a;
				var val = mdgriffith$elm_ui$Internal$Model$transformValue(transform);
				var _class = mdgriffith$elm_ui$Internal$Model$transformClass(transform);
				var _n12 = _Utils_Tuple2(_class, val);
				if ((_n12.a.$ === 'Just') && (_n12.b.$ === 'Just')) {
					var cls = _n12.a.a;
					var v = _n12.b.a;
					return A4(
						mdgriffith$elm_ui$Internal$Model$renderStyle,
						options,
						maybePseudo,
						'.' + cls,
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Internal$Model$Property, 'transform', v)
							]));
				} else {
					return _List_Nil;
				}
		}
	});
var mdgriffith$elm_ui$Internal$Model$encodeStyles = F2(
	function (options, stylesheet) {
		return elm$json$Json$Encode$object(
			A2(
				elm$core$List$map,
				function (style) {
					var styled = A3(mdgriffith$elm_ui$Internal$Model$renderStyleRule, options, style, elm$core$Maybe$Nothing);
					return _Utils_Tuple2(
						mdgriffith$elm_ui$Internal$Model$getStyleName(style),
						A2(elm$json$Json$Encode$list, elm$json$Json$Encode$string, styled));
				},
				stylesheet));
	});
var mdgriffith$elm_ui$Internal$Model$bracket = F2(
	function (selector, rules) {
		var renderPair = function (_n0) {
			var name = _n0.a;
			var val = _n0.b;
			return name + (': ' + (val + ';'));
		};
		return selector + (' {' + (A2(
			elm$core$String$join,
			'',
			A2(elm$core$List$map, renderPair, rules)) + '}'));
	});
var mdgriffith$elm_ui$Internal$Model$fontRule = F3(
	function (name, modifier, _n0) {
		var parentAdj = _n0.a;
		var textAdjustment = _n0.b;
		return _List_fromArray(
			[
				A2(mdgriffith$elm_ui$Internal$Model$bracket, '.' + (name + ('.' + (modifier + (', ' + ('.' + (name + (' .' + modifier))))))), parentAdj),
				A2(mdgriffith$elm_ui$Internal$Model$bracket, '.' + (name + ('.' + (modifier + ('> .' + (mdgriffith$elm_ui$Internal$Style$classes.text + (', .' + (name + (' .' + (modifier + (' > .' + mdgriffith$elm_ui$Internal$Style$classes.text)))))))))), textAdjustment)
			]);
	});
var mdgriffith$elm_ui$Internal$Model$renderFontAdjustmentRule = F3(
	function (fontToAdjust, _n0, otherFontName) {
		var full = _n0.a;
		var capital = _n0.b;
		var name = _Utils_eq(fontToAdjust, otherFontName) ? fontToAdjust : (otherFontName + (' .' + fontToAdjust));
		return A2(
			elm$core$String$join,
			' ',
			_Utils_ap(
				A3(mdgriffith$elm_ui$Internal$Model$fontRule, name, mdgriffith$elm_ui$Internal$Style$classes.sizeByCapital, capital),
				A3(mdgriffith$elm_ui$Internal$Model$fontRule, name, mdgriffith$elm_ui$Internal$Style$classes.fullSize, full)));
	});
var mdgriffith$elm_ui$Internal$Model$renderNullAdjustmentRule = F2(
	function (fontToAdjust, otherFontName) {
		var name = _Utils_eq(fontToAdjust, otherFontName) ? fontToAdjust : (otherFontName + (' .' + fontToAdjust));
		return A2(
			elm$core$String$join,
			' ',
			_List_fromArray(
				[
					A2(
					mdgriffith$elm_ui$Internal$Model$bracket,
					'.' + (name + ('.' + (mdgriffith$elm_ui$Internal$Style$classes.sizeByCapital + (', ' + ('.' + (name + (' .' + mdgriffith$elm_ui$Internal$Style$classes.sizeByCapital))))))),
					_List_fromArray(
						[
							_Utils_Tuple2('line-height', '1')
						])),
					A2(
					mdgriffith$elm_ui$Internal$Model$bracket,
					'.' + (name + ('.' + (mdgriffith$elm_ui$Internal$Style$classes.sizeByCapital + ('> .' + (mdgriffith$elm_ui$Internal$Style$classes.text + (', .' + (name + (' .' + (mdgriffith$elm_ui$Internal$Style$classes.sizeByCapital + (' > .' + mdgriffith$elm_ui$Internal$Style$classes.text)))))))))),
					_List_fromArray(
						[
							_Utils_Tuple2('vertical-align', '0'),
							_Utils_Tuple2('line-height', '1')
						]))
				]));
	});
var elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2(elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var elm$core$List$maximum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return elm$core$Maybe$Just(
			A3(elm$core$List$foldl, elm$core$Basics$max, x, xs));
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var elm$core$List$minimum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return elm$core$Maybe$Just(
			A3(elm$core$List$foldl, elm$core$Basics$min, x, xs));
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var mdgriffith$elm_ui$Internal$Model$adjust = F3(
	function (size, height, vertical) {
		return {height: height / size, size: size, vertical: vertical};
	});
var mdgriffith$elm_ui$Internal$Model$convertAdjustment = function (adjustment) {
	var lines = _List_fromArray(
		[adjustment.capital, adjustment.baseline, adjustment.descender, adjustment.lowercase]);
	var lineHeight = 1.5;
	var normalDescender = (lineHeight - 1) / 2;
	var oldMiddle = lineHeight / 2;
	var descender = A2(
		elm$core$Maybe$withDefault,
		adjustment.descender,
		elm$core$List$minimum(lines));
	var newBaseline = A2(
		elm$core$Maybe$withDefault,
		adjustment.baseline,
		elm$core$List$minimum(
			A2(
				elm$core$List$filter,
				function (x) {
					return !_Utils_eq(x, descender);
				},
				lines)));
	var base = lineHeight;
	var ascender = A2(
		elm$core$Maybe$withDefault,
		adjustment.capital,
		elm$core$List$maximum(lines));
	var capitalSize = 1 / (ascender - newBaseline);
	var capitalVertical = 1 - ascender;
	var fullSize = 1 / (ascender - descender);
	var fullVertical = 1 - ascender;
	var newCapitalMiddle = ((ascender - newBaseline) / 2) + newBaseline;
	var newFullMiddle = ((ascender - descender) / 2) + descender;
	return {
		capital: A3(mdgriffith$elm_ui$Internal$Model$adjust, capitalSize, ascender - newBaseline, capitalVertical),
		full: A3(mdgriffith$elm_ui$Internal$Model$adjust, fullSize, ascender - descender, fullVertical)
	};
};
var mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules = function (converted) {
	return _Utils_Tuple2(
		_List_fromArray(
			[
				_Utils_Tuple2('display', 'block')
			]),
		_List_fromArray(
			[
				_Utils_Tuple2('display', 'inline-block'),
				_Utils_Tuple2(
				'line-height',
				elm$core$String$fromFloat(converted.height)),
				_Utils_Tuple2(
				'vertical-align',
				elm$core$String$fromFloat(converted.vertical) + 'em'),
				_Utils_Tuple2(
				'font-size',
				elm$core$String$fromFloat(converted.size) + 'em')
			]));
};
var mdgriffith$elm_ui$Internal$Model$typefaceAdjustment = function (typefaces) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (face, found) {
				if (found.$ === 'Nothing') {
					if (face.$ === 'FontWith') {
						var _with = face.a;
						var _n2 = _with.adjustment;
						if (_n2.$ === 'Nothing') {
							return found;
						} else {
							var adjustment = _n2.a;
							return elm$core$Maybe$Just(
								_Utils_Tuple2(
									mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules(
										function ($) {
											return $.full;
										}(
											mdgriffith$elm_ui$Internal$Model$convertAdjustment(adjustment))),
									mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules(
										function ($) {
											return $.capital;
										}(
											mdgriffith$elm_ui$Internal$Model$convertAdjustment(adjustment)))));
						}
					} else {
						return found;
					}
				} else {
					return found;
				}
			}),
		elm$core$Maybe$Nothing,
		typefaces);
};
var mdgriffith$elm_ui$Internal$Model$renderTopLevelValues = function (rules) {
	var withImport = function (font) {
		if (font.$ === 'ImportFont') {
			var url = font.b;
			return elm$core$Maybe$Just('@import url(\'' + (url + '\');'));
		} else {
			return elm$core$Maybe$Nothing;
		}
	};
	var fontImports = function (_n2) {
		var name = _n2.a;
		var typefaces = _n2.b;
		var imports = A2(
			elm$core$String$join,
			'\n',
			A2(elm$core$List$filterMap, withImport, typefaces));
		return imports;
	};
	var allNames = A2(elm$core$List$map, elm$core$Tuple$first, rules);
	var fontAdjustments = function (_n1) {
		var name = _n1.a;
		var typefaces = _n1.b;
		var _n0 = mdgriffith$elm_ui$Internal$Model$typefaceAdjustment(typefaces);
		if (_n0.$ === 'Nothing') {
			return A2(
				elm$core$String$join,
				'',
				A2(
					elm$core$List$map,
					mdgriffith$elm_ui$Internal$Model$renderNullAdjustmentRule(name),
					allNames));
		} else {
			var adjustment = _n0.a;
			return A2(
				elm$core$String$join,
				'',
				A2(
					elm$core$List$map,
					A2(mdgriffith$elm_ui$Internal$Model$renderFontAdjustmentRule, name, adjustment),
					allNames));
		}
	};
	return _Utils_ap(
		A2(
			elm$core$String$join,
			'\n',
			A2(elm$core$List$map, fontImports, rules)),
		A2(
			elm$core$String$join,
			'\n',
			A2(elm$core$List$map, fontAdjustments, rules)));
};
var mdgriffith$elm_ui$Internal$Model$topLevelValue = function (rule) {
	if (rule.$ === 'FontFamily') {
		var name = rule.a;
		var typefaces = rule.b;
		return elm$core$Maybe$Just(
			_Utils_Tuple2(name, typefaces));
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var mdgriffith$elm_ui$Internal$Model$toStyleSheetString = F2(
	function (options, stylesheet) {
		var combine = F2(
			function (style, rendered) {
				return {
					rules: _Utils_ap(
						rendered.rules,
						A3(mdgriffith$elm_ui$Internal$Model$renderStyleRule, options, style, elm$core$Maybe$Nothing)),
					topLevel: function () {
						var _n1 = mdgriffith$elm_ui$Internal$Model$topLevelValue(style);
						if (_n1.$ === 'Nothing') {
							return rendered.topLevel;
						} else {
							var topLevel = _n1.a;
							return A2(elm$core$List$cons, topLevel, rendered.topLevel);
						}
					}()
				};
			});
		var _n0 = A3(
			elm$core$List$foldl,
			combine,
			{rules: _List_Nil, topLevel: _List_Nil},
			stylesheet);
		var topLevel = _n0.topLevel;
		var rules = _n0.rules;
		return _Utils_ap(
			mdgriffith$elm_ui$Internal$Model$renderTopLevelValues(topLevel),
			elm$core$String$concat(rules));
	});
var mdgriffith$elm_ui$Internal$Model$toStyleSheet = F2(
	function (options, styleSheet) {
		var _n0 = options.mode;
		switch (_n0.$) {
			case 'Layout':
				return A3(
					elm$virtual_dom$VirtualDom$node,
					'div',
					_List_Nil,
					_List_fromArray(
						[
							A3(
							elm$virtual_dom$VirtualDom$node,
							'style',
							_List_Nil,
							_List_fromArray(
								[
									elm$virtual_dom$VirtualDom$text(
									A2(mdgriffith$elm_ui$Internal$Model$toStyleSheetString, options, styleSheet))
								]))
						]));
			case 'NoStaticStyleSheet':
				return A3(
					elm$virtual_dom$VirtualDom$node,
					'div',
					_List_Nil,
					_List_fromArray(
						[
							A3(
							elm$virtual_dom$VirtualDom$node,
							'style',
							_List_Nil,
							_List_fromArray(
								[
									elm$virtual_dom$VirtualDom$text(
									A2(mdgriffith$elm_ui$Internal$Model$toStyleSheetString, options, styleSheet))
								]))
						]));
			default:
				return A3(
					elm$virtual_dom$VirtualDom$node,
					'elm-ui-rules',
					_List_fromArray(
						[
							A2(
							elm$virtual_dom$VirtualDom$property,
							'rules',
							A2(mdgriffith$elm_ui$Internal$Model$encodeStyles, options, styleSheet))
						]),
					_List_Nil);
		}
	});
var mdgriffith$elm_ui$Internal$Model$embedKeyed = F4(
	function (_static, opts, styles, children) {
		var dynamicStyleSheet = A2(
			mdgriffith$elm_ui$Internal$Model$toStyleSheet,
			opts,
			A3(
				elm$core$List$foldl,
				mdgriffith$elm_ui$Internal$Model$reduceStyles,
				_Utils_Tuple2(
					elm$core$Set$empty,
					mdgriffith$elm_ui$Internal$Model$renderFocusStyle(opts.focus)),
				styles).b);
		return _static ? A2(
			elm$core$List$cons,
			_Utils_Tuple2(
				'static-stylesheet',
				mdgriffith$elm_ui$Internal$Model$staticRoot(opts)),
			A2(
				elm$core$List$cons,
				_Utils_Tuple2('dynamic-stylesheet', dynamicStyleSheet),
				children)) : A2(
			elm$core$List$cons,
			_Utils_Tuple2('dynamic-stylesheet', dynamicStyleSheet),
			children);
	});
var mdgriffith$elm_ui$Internal$Model$embedWith = F4(
	function (_static, opts, styles, children) {
		var dynamicStyleSheet = A2(
			mdgriffith$elm_ui$Internal$Model$toStyleSheet,
			opts,
			A3(
				elm$core$List$foldl,
				mdgriffith$elm_ui$Internal$Model$reduceStyles,
				_Utils_Tuple2(
					elm$core$Set$empty,
					mdgriffith$elm_ui$Internal$Model$renderFocusStyle(opts.focus)),
				styles).b);
		return _static ? A2(
			elm$core$List$cons,
			mdgriffith$elm_ui$Internal$Model$staticRoot(opts),
			A2(elm$core$List$cons, dynamicStyleSheet, children)) : A2(elm$core$List$cons, dynamicStyleSheet, children);
	});
var mdgriffith$elm_ui$Internal$Model$finalizeNode = F6(
	function (has, node, attributes, children, embedMode, parentContext) {
		var createNode = F2(
			function (nodeName, attrs) {
				if (children.$ === 'Keyed') {
					var keyed = children.a;
					return A3(
						elm$virtual_dom$VirtualDom$keyedNode,
						nodeName,
						attrs,
						function () {
							switch (embedMode.$) {
								case 'NoStyleSheet':
									return keyed;
								case 'OnlyDynamic':
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4(mdgriffith$elm_ui$Internal$Model$embedKeyed, false, opts, styles, keyed);
								default:
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4(mdgriffith$elm_ui$Internal$Model$embedKeyed, true, opts, styles, keyed);
							}
						}());
				} else {
					var unkeyed = children.a;
					return A2(
						function () {
							switch (nodeName) {
								case 'div':
									return elm$html$Html$div;
								case 'p':
									return elm$html$Html$p;
								default:
									return elm$virtual_dom$VirtualDom$node(nodeName);
							}
						}(),
						attrs,
						function () {
							switch (embedMode.$) {
								case 'NoStyleSheet':
									return unkeyed;
								case 'OnlyDynamic':
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4(mdgriffith$elm_ui$Internal$Model$embedWith, false, opts, styles, unkeyed);
								default:
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4(mdgriffith$elm_ui$Internal$Model$embedWith, true, opts, styles, unkeyed);
							}
						}());
				}
			});
		var html = function () {
			switch (node.$) {
				case 'Generic':
					return A2(createNode, 'div', attributes);
				case 'NodeName':
					var nodeName = node.a;
					return A2(createNode, nodeName, attributes);
				default:
					var nodeName = node.a;
					var internal = node.b;
					return A3(
						elm$virtual_dom$VirtualDom$node,
						nodeName,
						attributes,
						_List_fromArray(
							[
								A2(
								createNode,
								internal,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class(mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + mdgriffith$elm_ui$Internal$Style$classes.single))
									]))
							]));
			}
		}();
		switch (parentContext.$) {
			case 'AsRow':
				return (A2(mdgriffith$elm_ui$Internal$Flag$present, mdgriffith$elm_ui$Internal$Flag$widthFill, has) && (!A2(mdgriffith$elm_ui$Internal$Flag$present, mdgriffith$elm_ui$Internal$Flag$widthBetween, has))) ? html : (A2(mdgriffith$elm_ui$Internal$Flag$present, mdgriffith$elm_ui$Internal$Flag$alignRight, has) ? A2(
					elm$html$Html$u,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class(
							A2(
								elm$core$String$join,
								' ',
								_List_fromArray(
									[mdgriffith$elm_ui$Internal$Style$classes.any, mdgriffith$elm_ui$Internal$Style$classes.single, mdgriffith$elm_ui$Internal$Style$classes.container, mdgriffith$elm_ui$Internal$Style$classes.contentCenterY, mdgriffith$elm_ui$Internal$Style$classes.alignContainerRight])))
						]),
					_List_fromArray(
						[html])) : (A2(mdgriffith$elm_ui$Internal$Flag$present, mdgriffith$elm_ui$Internal$Flag$centerX, has) ? A2(
					elm$html$Html$s,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class(
							A2(
								elm$core$String$join,
								' ',
								_List_fromArray(
									[mdgriffith$elm_ui$Internal$Style$classes.any, mdgriffith$elm_ui$Internal$Style$classes.single, mdgriffith$elm_ui$Internal$Style$classes.container, mdgriffith$elm_ui$Internal$Style$classes.contentCenterY, mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX])))
						]),
					_List_fromArray(
						[html])) : html));
			case 'AsColumn':
				return (A2(mdgriffith$elm_ui$Internal$Flag$present, mdgriffith$elm_ui$Internal$Flag$heightFill, has) && (!A2(mdgriffith$elm_ui$Internal$Flag$present, mdgriffith$elm_ui$Internal$Flag$heightBetween, has))) ? html : (A2(mdgriffith$elm_ui$Internal$Flag$present, mdgriffith$elm_ui$Internal$Flag$centerY, has) ? A2(
					elm$html$Html$s,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class(
							A2(
								elm$core$String$join,
								' ',
								_List_fromArray(
									[mdgriffith$elm_ui$Internal$Style$classes.any, mdgriffith$elm_ui$Internal$Style$classes.single, mdgriffith$elm_ui$Internal$Style$classes.container, mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY])))
						]),
					_List_fromArray(
						[html])) : (A2(mdgriffith$elm_ui$Internal$Flag$present, mdgriffith$elm_ui$Internal$Flag$alignBottom, has) ? A2(
					elm$html$Html$u,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class(
							A2(
								elm$core$String$join,
								' ',
								_List_fromArray(
									[mdgriffith$elm_ui$Internal$Style$classes.any, mdgriffith$elm_ui$Internal$Style$classes.single, mdgriffith$elm_ui$Internal$Style$classes.container, mdgriffith$elm_ui$Internal$Style$classes.alignContainerBottom])))
						]),
					_List_fromArray(
						[html])) : html));
			default:
				return html;
		}
	});
var mdgriffith$elm_ui$Internal$Model$textElementClasses = mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + (mdgriffith$elm_ui$Internal$Style$classes.text + (' ' + (mdgriffith$elm_ui$Internal$Style$classes.widthContent + (' ' + mdgriffith$elm_ui$Internal$Style$classes.heightContent)))));
var mdgriffith$elm_ui$Internal$Model$textElement = function (str) {
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class(mdgriffith$elm_ui$Internal$Model$textElementClasses)
			]),
		_List_fromArray(
			[
				elm$html$Html$text(str)
			]));
};
var mdgriffith$elm_ui$Internal$Model$textElementFillClasses = mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + (mdgriffith$elm_ui$Internal$Style$classes.text + (' ' + (mdgriffith$elm_ui$Internal$Style$classes.widthFill + (' ' + mdgriffith$elm_ui$Internal$Style$classes.heightFill)))));
var mdgriffith$elm_ui$Internal$Model$textElementFill = function (str) {
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class(mdgriffith$elm_ui$Internal$Model$textElementFillClasses)
			]),
		_List_fromArray(
			[
				elm$html$Html$text(str)
			]));
};
var mdgriffith$elm_ui$Internal$Model$createElement = F3(
	function (context, children, rendered) {
		var gatherKeyed = F2(
			function (_n8, _n9) {
				var key = _n8.a;
				var child = _n8.b;
				var htmls = _n9.a;
				var existingStyles = _n9.b;
				switch (child.$) {
					case 'Unstyled':
						var html = child.a;
						return _Utils_eq(context, mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								elm$core$List$cons,
								_Utils_Tuple2(
									key,
									html(context)),
								htmls),
							existingStyles) : _Utils_Tuple2(
							A2(
								elm$core$List$cons,
								_Utils_Tuple2(
									key,
									html(context)),
								htmls),
							existingStyles);
					case 'Styled':
						var styled = child.a;
						return _Utils_eq(context, mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								elm$core$List$cons,
								_Utils_Tuple2(
									key,
									A2(styled.html, mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context)),
								htmls),
							elm$core$List$isEmpty(existingStyles) ? styled.styles : _Utils_ap(styled.styles, existingStyles)) : _Utils_Tuple2(
							A2(
								elm$core$List$cons,
								_Utils_Tuple2(
									key,
									A2(styled.html, mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context)),
								htmls),
							elm$core$List$isEmpty(existingStyles) ? styled.styles : _Utils_ap(styled.styles, existingStyles));
					case 'Text':
						var str = child.a;
						return _Utils_Tuple2(
							A2(
								elm$core$List$cons,
								_Utils_Tuple2(
									key,
									_Utils_eq(context, mdgriffith$elm_ui$Internal$Model$asEl) ? mdgriffith$elm_ui$Internal$Model$textElementFill(str) : mdgriffith$elm_ui$Internal$Model$textElement(str)),
								htmls),
							existingStyles);
					default:
						return _Utils_Tuple2(htmls, existingStyles);
				}
			});
		var gather = F2(
			function (child, _n6) {
				var htmls = _n6.a;
				var existingStyles = _n6.b;
				switch (child.$) {
					case 'Unstyled':
						var html = child.a;
						return _Utils_eq(context, mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								elm$core$List$cons,
								html(context),
								htmls),
							existingStyles) : _Utils_Tuple2(
							A2(
								elm$core$List$cons,
								html(context),
								htmls),
							existingStyles);
					case 'Styled':
						var styled = child.a;
						return _Utils_eq(context, mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								elm$core$List$cons,
								A2(styled.html, mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context),
								htmls),
							elm$core$List$isEmpty(existingStyles) ? styled.styles : _Utils_ap(styled.styles, existingStyles)) : _Utils_Tuple2(
							A2(
								elm$core$List$cons,
								A2(styled.html, mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context),
								htmls),
							elm$core$List$isEmpty(existingStyles) ? styled.styles : _Utils_ap(styled.styles, existingStyles));
					case 'Text':
						var str = child.a;
						return _Utils_Tuple2(
							A2(
								elm$core$List$cons,
								_Utils_eq(context, mdgriffith$elm_ui$Internal$Model$asEl) ? mdgriffith$elm_ui$Internal$Model$textElementFill(str) : mdgriffith$elm_ui$Internal$Model$textElement(str),
								htmls),
							existingStyles);
					default:
						return _Utils_Tuple2(htmls, existingStyles);
				}
			});
		if (children.$ === 'Keyed') {
			var keyedChildren = children.a;
			var _n1 = A3(
				elm$core$List$foldr,
				gatherKeyed,
				_Utils_Tuple2(_List_Nil, _List_Nil),
				keyedChildren);
			var keyed = _n1.a;
			var styles = _n1.b;
			var newStyles = elm$core$List$isEmpty(styles) ? rendered.styles : _Utils_ap(rendered.styles, styles);
			if (!newStyles.b) {
				return mdgriffith$elm_ui$Internal$Model$Unstyled(
					A5(
						mdgriffith$elm_ui$Internal$Model$finalizeNode,
						rendered.has,
						rendered.node,
						rendered.attributes,
						mdgriffith$elm_ui$Internal$Model$Keyed(
							A3(mdgriffith$elm_ui$Internal$Model$addKeyedChildren, 'nearby-element-pls', keyed, rendered.children)),
						mdgriffith$elm_ui$Internal$Model$NoStyleSheet));
			} else {
				var allStyles = newStyles;
				return mdgriffith$elm_ui$Internal$Model$Styled(
					{
						html: A4(
							mdgriffith$elm_ui$Internal$Model$finalizeNode,
							rendered.has,
							rendered.node,
							rendered.attributes,
							mdgriffith$elm_ui$Internal$Model$Keyed(
								A3(mdgriffith$elm_ui$Internal$Model$addKeyedChildren, 'nearby-element-pls', keyed, rendered.children))),
						styles: allStyles
					});
			}
		} else {
			var unkeyedChildren = children.a;
			var _n3 = A3(
				elm$core$List$foldr,
				gather,
				_Utils_Tuple2(_List_Nil, _List_Nil),
				unkeyedChildren);
			var unkeyed = _n3.a;
			var styles = _n3.b;
			var newStyles = elm$core$List$isEmpty(styles) ? rendered.styles : _Utils_ap(rendered.styles, styles);
			if (!newStyles.b) {
				return mdgriffith$elm_ui$Internal$Model$Unstyled(
					A5(
						mdgriffith$elm_ui$Internal$Model$finalizeNode,
						rendered.has,
						rendered.node,
						rendered.attributes,
						mdgriffith$elm_ui$Internal$Model$Unkeyed(
							A2(mdgriffith$elm_ui$Internal$Model$addChildren, unkeyed, rendered.children)),
						mdgriffith$elm_ui$Internal$Model$NoStyleSheet));
			} else {
				var allStyles = newStyles;
				return mdgriffith$elm_ui$Internal$Model$Styled(
					{
						html: A4(
							mdgriffith$elm_ui$Internal$Model$finalizeNode,
							rendered.has,
							rendered.node,
							rendered.attributes,
							mdgriffith$elm_ui$Internal$Model$Unkeyed(
								A2(mdgriffith$elm_ui$Internal$Model$addChildren, unkeyed, rendered.children))),
						styles: allStyles
					});
			}
		}
	});
var elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var elm$core$Bitwise$or = _Bitwise_or;
var mdgriffith$elm_ui$Internal$Flag$add = F2(
	function (myFlag, _n0) {
		var one = _n0.a;
		var two = _n0.b;
		if (myFlag.$ === 'Flag') {
			var first = myFlag.a;
			return A2(mdgriffith$elm_ui$Internal$Flag$Field, first | one, two);
		} else {
			var second = myFlag.a;
			return A2(mdgriffith$elm_ui$Internal$Flag$Field, one, second | two);
		}
	});
var mdgriffith$elm_ui$Internal$Flag$height = mdgriffith$elm_ui$Internal$Flag$flag(7);
var mdgriffith$elm_ui$Internal$Flag$heightContent = mdgriffith$elm_ui$Internal$Flag$flag(36);
var mdgriffith$elm_ui$Internal$Flag$merge = F2(
	function (_n0, _n1) {
		var one = _n0.a;
		var two = _n0.b;
		var three = _n1.a;
		var four = _n1.b;
		return A2(mdgriffith$elm_ui$Internal$Flag$Field, one | three, two | four);
	});
var mdgriffith$elm_ui$Internal$Flag$width = mdgriffith$elm_ui$Internal$Flag$flag(6);
var mdgriffith$elm_ui$Internal$Flag$widthContent = mdgriffith$elm_ui$Internal$Flag$flag(38);
var mdgriffith$elm_ui$Internal$Flag$xAlign = mdgriffith$elm_ui$Internal$Flag$flag(30);
var mdgriffith$elm_ui$Internal$Flag$yAlign = mdgriffith$elm_ui$Internal$Flag$flag(29);
var mdgriffith$elm_ui$Internal$Model$Single = F3(
	function (a, b, c) {
		return {$: 'Single', a: a, b: b, c: c};
	});
var mdgriffith$elm_ui$Internal$Model$Transform = function (a) {
	return {$: 'Transform', a: a};
};
var mdgriffith$elm_ui$Internal$Model$ChildrenBehind = function (a) {
	return {$: 'ChildrenBehind', a: a};
};
var mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront = F2(
	function (a, b) {
		return {$: 'ChildrenBehindAndInFront', a: a, b: b};
	});
var mdgriffith$elm_ui$Internal$Model$ChildrenInFront = function (a) {
	return {$: 'ChildrenInFront', a: a};
};
var mdgriffith$elm_ui$Internal$Model$nearbyElement = F2(
	function (location, elem) {
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class(
					function () {
						switch (location.$) {
							case 'Above':
								return A2(
									elm$core$String$join,
									' ',
									_List_fromArray(
										[mdgriffith$elm_ui$Internal$Style$classes.nearby, mdgriffith$elm_ui$Internal$Style$classes.single, mdgriffith$elm_ui$Internal$Style$classes.above]));
							case 'Below':
								return A2(
									elm$core$String$join,
									' ',
									_List_fromArray(
										[mdgriffith$elm_ui$Internal$Style$classes.nearby, mdgriffith$elm_ui$Internal$Style$classes.single, mdgriffith$elm_ui$Internal$Style$classes.below]));
							case 'OnRight':
								return A2(
									elm$core$String$join,
									' ',
									_List_fromArray(
										[mdgriffith$elm_ui$Internal$Style$classes.nearby, mdgriffith$elm_ui$Internal$Style$classes.single, mdgriffith$elm_ui$Internal$Style$classes.onRight]));
							case 'OnLeft':
								return A2(
									elm$core$String$join,
									' ',
									_List_fromArray(
										[mdgriffith$elm_ui$Internal$Style$classes.nearby, mdgriffith$elm_ui$Internal$Style$classes.single, mdgriffith$elm_ui$Internal$Style$classes.onLeft]));
							case 'InFront':
								return A2(
									elm$core$String$join,
									' ',
									_List_fromArray(
										[mdgriffith$elm_ui$Internal$Style$classes.nearby, mdgriffith$elm_ui$Internal$Style$classes.single, mdgriffith$elm_ui$Internal$Style$classes.inFront]));
							default:
								return A2(
									elm$core$String$join,
									' ',
									_List_fromArray(
										[mdgriffith$elm_ui$Internal$Style$classes.nearby, mdgriffith$elm_ui$Internal$Style$classes.single, mdgriffith$elm_ui$Internal$Style$classes.behind]));
						}
					}())
				]),
			_List_fromArray(
				[
					function () {
					switch (elem.$) {
						case 'Empty':
							return elm$virtual_dom$VirtualDom$text('');
						case 'Text':
							var str = elem.a;
							return mdgriffith$elm_ui$Internal$Model$textElement(str);
						case 'Unstyled':
							var html = elem.a;
							return html(mdgriffith$elm_ui$Internal$Model$asEl);
						default:
							var styled = elem.a;
							return A2(styled.html, mdgriffith$elm_ui$Internal$Model$NoStyleSheet, mdgriffith$elm_ui$Internal$Model$asEl);
					}
				}()
				]));
	});
var mdgriffith$elm_ui$Internal$Model$addNearbyElement = F3(
	function (location, elem, existing) {
		var nearby = A2(mdgriffith$elm_ui$Internal$Model$nearbyElement, location, elem);
		switch (existing.$) {
			case 'NoNearbyChildren':
				if (location.$ === 'Behind') {
					return mdgriffith$elm_ui$Internal$Model$ChildrenBehind(
						_List_fromArray(
							[nearby]));
				} else {
					return mdgriffith$elm_ui$Internal$Model$ChildrenInFront(
						_List_fromArray(
							[nearby]));
				}
			case 'ChildrenBehind':
				var existingBehind = existing.a;
				if (location.$ === 'Behind') {
					return mdgriffith$elm_ui$Internal$Model$ChildrenBehind(
						A2(elm$core$List$cons, nearby, existingBehind));
				} else {
					return A2(
						mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						existingBehind,
						_List_fromArray(
							[nearby]));
				}
			case 'ChildrenInFront':
				var existingInFront = existing.a;
				if (location.$ === 'Behind') {
					return A2(
						mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						_List_fromArray(
							[nearby]),
						existingInFront);
				} else {
					return mdgriffith$elm_ui$Internal$Model$ChildrenInFront(
						A2(elm$core$List$cons, nearby, existingInFront));
				}
			default:
				var existingBehind = existing.a;
				var existingInFront = existing.b;
				if (location.$ === 'Behind') {
					return A2(
						mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						A2(elm$core$List$cons, nearby, existingBehind),
						existingInFront);
				} else {
					return A2(
						mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						existingBehind,
						A2(elm$core$List$cons, nearby, existingInFront));
				}
		}
	});
var mdgriffith$elm_ui$Internal$Model$Embedded = F2(
	function (a, b) {
		return {$: 'Embedded', a: a, b: b};
	});
var mdgriffith$elm_ui$Internal$Model$NodeName = function (a) {
	return {$: 'NodeName', a: a};
};
var mdgriffith$elm_ui$Internal$Model$addNodeName = F2(
	function (newNode, old) {
		switch (old.$) {
			case 'Generic':
				return mdgriffith$elm_ui$Internal$Model$NodeName(newNode);
			case 'NodeName':
				var name = old.a;
				return A2(mdgriffith$elm_ui$Internal$Model$Embedded, name, newNode);
			default:
				var x = old.a;
				var y = old.b;
				return A2(mdgriffith$elm_ui$Internal$Model$Embedded, x, y);
		}
	});
var mdgriffith$elm_ui$Internal$Model$alignXName = function (align) {
	switch (align.$) {
		case 'Left':
			return mdgriffith$elm_ui$Internal$Style$classes.alignedHorizontally + (' ' + mdgriffith$elm_ui$Internal$Style$classes.alignLeft);
		case 'Right':
			return mdgriffith$elm_ui$Internal$Style$classes.alignedHorizontally + (' ' + mdgriffith$elm_ui$Internal$Style$classes.alignRight);
		default:
			return mdgriffith$elm_ui$Internal$Style$classes.alignedHorizontally + (' ' + mdgriffith$elm_ui$Internal$Style$classes.alignCenterX);
	}
};
var mdgriffith$elm_ui$Internal$Model$alignYName = function (align) {
	switch (align.$) {
		case 'Top':
			return mdgriffith$elm_ui$Internal$Style$classes.alignedVertically + (' ' + mdgriffith$elm_ui$Internal$Style$classes.alignTop);
		case 'Bottom':
			return mdgriffith$elm_ui$Internal$Style$classes.alignedVertically + (' ' + mdgriffith$elm_ui$Internal$Style$classes.alignBottom);
		default:
			return mdgriffith$elm_ui$Internal$Style$classes.alignedVertically + (' ' + mdgriffith$elm_ui$Internal$Style$classes.alignCenterY);
	}
};
var mdgriffith$elm_ui$Internal$Model$FullTransform = F4(
	function (a, b, c, d) {
		return {$: 'FullTransform', a: a, b: b, c: c, d: d};
	});
var mdgriffith$elm_ui$Internal$Model$Moved = function (a) {
	return {$: 'Moved', a: a};
};
var mdgriffith$elm_ui$Internal$Model$composeTransformation = F2(
	function (transform, component) {
		switch (transform.$) {
			case 'Untransformed':
				switch (component.$) {
					case 'MoveX':
						var x = component.a;
						return mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(x, 0, 0));
					case 'MoveY':
						var y = component.a;
						return mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(0, y, 0));
					case 'MoveZ':
						var z = component.a;
						return mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(0, 0, z));
					case 'MoveXYZ':
						var xyz = component.a;
						return mdgriffith$elm_ui$Internal$Model$Moved(xyz);
					case 'Rotate':
						var xyz = component.a;
						var angle = component.b;
						return A4(
							mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(0, 0, 0),
							_Utils_Tuple3(1, 1, 1),
							xyz,
							angle);
					default:
						var xyz = component.a;
						return A4(
							mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(0, 0, 0),
							xyz,
							_Utils_Tuple3(0, 0, 1),
							0);
				}
			case 'Moved':
				var moved = transform.a;
				var x = moved.a;
				var y = moved.b;
				var z = moved.c;
				switch (component.$) {
					case 'MoveX':
						var newX = component.a;
						return mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(newX, y, z));
					case 'MoveY':
						var newY = component.a;
						return mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(x, newY, z));
					case 'MoveZ':
						var newZ = component.a;
						return mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(x, y, newZ));
					case 'MoveXYZ':
						var xyz = component.a;
						return mdgriffith$elm_ui$Internal$Model$Moved(xyz);
					case 'Rotate':
						var xyz = component.a;
						var angle = component.b;
						return A4(
							mdgriffith$elm_ui$Internal$Model$FullTransform,
							moved,
							_Utils_Tuple3(1, 1, 1),
							xyz,
							angle);
					default:
						var scale = component.a;
						return A4(
							mdgriffith$elm_ui$Internal$Model$FullTransform,
							moved,
							scale,
							_Utils_Tuple3(0, 0, 1),
							0);
				}
			default:
				var moved = transform.a;
				var x = moved.a;
				var y = moved.b;
				var z = moved.c;
				var scaled = transform.b;
				var origin = transform.c;
				var angle = transform.d;
				switch (component.$) {
					case 'MoveX':
						var newX = component.a;
						return A4(
							mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(newX, y, z),
							scaled,
							origin,
							angle);
					case 'MoveY':
						var newY = component.a;
						return A4(
							mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(x, newY, z),
							scaled,
							origin,
							angle);
					case 'MoveZ':
						var newZ = component.a;
						return A4(
							mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(x, y, newZ),
							scaled,
							origin,
							angle);
					case 'MoveXYZ':
						var newMove = component.a;
						return A4(mdgriffith$elm_ui$Internal$Model$FullTransform, newMove, scaled, origin, angle);
					case 'Rotate':
						var newOrigin = component.a;
						var newAngle = component.b;
						return A4(mdgriffith$elm_ui$Internal$Model$FullTransform, moved, scaled, newOrigin, newAngle);
					default:
						var newScale = component.a;
						return A4(mdgriffith$elm_ui$Internal$Model$FullTransform, moved, newScale, origin, angle);
				}
		}
	});
var mdgriffith$elm_ui$Internal$Model$renderHeight = function (h) {
	switch (h.$) {
		case 'Px':
			var px = h.a;
			var val = elm$core$String$fromInt(px);
			var name = 'height-px-' + val;
			return _Utils_Tuple3(
				mdgriffith$elm_ui$Internal$Flag$none,
				mdgriffith$elm_ui$Internal$Style$classes.heightExact + (' ' + name),
				_List_fromArray(
					[
						A3(mdgriffith$elm_ui$Internal$Model$Single, name, 'height', val + 'px')
					]));
		case 'Content':
			return _Utils_Tuple3(
				A2(mdgriffith$elm_ui$Internal$Flag$add, mdgriffith$elm_ui$Internal$Flag$heightContent, mdgriffith$elm_ui$Internal$Flag$none),
				mdgriffith$elm_ui$Internal$Style$classes.heightContent,
				_List_Nil);
		case 'Fill':
			var portion = h.a;
			return (portion === 1) ? _Utils_Tuple3(
				A2(mdgriffith$elm_ui$Internal$Flag$add, mdgriffith$elm_ui$Internal$Flag$heightFill, mdgriffith$elm_ui$Internal$Flag$none),
				mdgriffith$elm_ui$Internal$Style$classes.heightFill,
				_List_Nil) : _Utils_Tuple3(
				A2(mdgriffith$elm_ui$Internal$Flag$add, mdgriffith$elm_ui$Internal$Flag$heightFill, mdgriffith$elm_ui$Internal$Flag$none),
				mdgriffith$elm_ui$Internal$Style$classes.heightFillPortion + (' height-fill-' + elm$core$String$fromInt(portion)),
				_List_fromArray(
					[
						A3(
						mdgriffith$elm_ui$Internal$Model$Single,
						mdgriffith$elm_ui$Internal$Style$classes.any + ('.' + (mdgriffith$elm_ui$Internal$Style$classes.column + (' > ' + mdgriffith$elm_ui$Internal$Style$dot(
							'height-fill-' + elm$core$String$fromInt(portion))))),
						'flex-grow',
						elm$core$String$fromInt(portion * 100000))
					]));
		case 'Min':
			var minSize = h.a;
			var len = h.b;
			var cls = 'min-height-' + elm$core$String$fromInt(minSize);
			var style = A3(
				mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'min-height',
				elm$core$String$fromInt(minSize) + 'px');
			var _n1 = mdgriffith$elm_ui$Internal$Model$renderHeight(len);
			var newFlag = _n1.a;
			var newAttrs = _n1.b;
			var newStyle = _n1.c;
			return _Utils_Tuple3(
				A2(mdgriffith$elm_ui$Internal$Flag$add, mdgriffith$elm_ui$Internal$Flag$heightBetween, newFlag),
				cls + (' ' + newAttrs),
				A2(elm$core$List$cons, style, newStyle));
		default:
			var maxSize = h.a;
			var len = h.b;
			var cls = 'max-height-' + elm$core$String$fromInt(maxSize);
			var style = A3(
				mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'max-height',
				elm$core$String$fromInt(maxSize) + 'px');
			var _n2 = mdgriffith$elm_ui$Internal$Model$renderHeight(len);
			var newFlag = _n2.a;
			var newAttrs = _n2.b;
			var newStyle = _n2.c;
			return _Utils_Tuple3(
				A2(mdgriffith$elm_ui$Internal$Flag$add, mdgriffith$elm_ui$Internal$Flag$heightBetween, newFlag),
				cls + (' ' + newAttrs),
				A2(elm$core$List$cons, style, newStyle));
	}
};
var mdgriffith$elm_ui$Internal$Model$renderWidth = function (w) {
	switch (w.$) {
		case 'Px':
			var px = w.a;
			return _Utils_Tuple3(
				mdgriffith$elm_ui$Internal$Flag$none,
				mdgriffith$elm_ui$Internal$Style$classes.widthExact + (' width-px-' + elm$core$String$fromInt(px)),
				_List_fromArray(
					[
						A3(
						mdgriffith$elm_ui$Internal$Model$Single,
						'width-px-' + elm$core$String$fromInt(px),
						'width',
						elm$core$String$fromInt(px) + 'px')
					]));
		case 'Content':
			return _Utils_Tuple3(
				A2(mdgriffith$elm_ui$Internal$Flag$add, mdgriffith$elm_ui$Internal$Flag$widthContent, mdgriffith$elm_ui$Internal$Flag$none),
				mdgriffith$elm_ui$Internal$Style$classes.widthContent,
				_List_Nil);
		case 'Fill':
			var portion = w.a;
			return (portion === 1) ? _Utils_Tuple3(
				A2(mdgriffith$elm_ui$Internal$Flag$add, mdgriffith$elm_ui$Internal$Flag$widthFill, mdgriffith$elm_ui$Internal$Flag$none),
				mdgriffith$elm_ui$Internal$Style$classes.widthFill,
				_List_Nil) : _Utils_Tuple3(
				A2(mdgriffith$elm_ui$Internal$Flag$add, mdgriffith$elm_ui$Internal$Flag$widthFill, mdgriffith$elm_ui$Internal$Flag$none),
				mdgriffith$elm_ui$Internal$Style$classes.widthFillPortion + (' width-fill-' + elm$core$String$fromInt(portion)),
				_List_fromArray(
					[
						A3(
						mdgriffith$elm_ui$Internal$Model$Single,
						mdgriffith$elm_ui$Internal$Style$classes.any + ('.' + (mdgriffith$elm_ui$Internal$Style$classes.row + (' > ' + mdgriffith$elm_ui$Internal$Style$dot(
							'width-fill-' + elm$core$String$fromInt(portion))))),
						'flex-grow',
						elm$core$String$fromInt(portion * 100000))
					]));
		case 'Min':
			var minSize = w.a;
			var len = w.b;
			var cls = 'min-width-' + elm$core$String$fromInt(minSize);
			var style = A3(
				mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'min-width',
				elm$core$String$fromInt(minSize) + 'px');
			var _n1 = mdgriffith$elm_ui$Internal$Model$renderWidth(len);
			var newFlag = _n1.a;
			var newAttrs = _n1.b;
			var newStyle = _n1.c;
			return _Utils_Tuple3(
				A2(mdgriffith$elm_ui$Internal$Flag$add, mdgriffith$elm_ui$Internal$Flag$widthBetween, newFlag),
				cls + (' ' + newAttrs),
				A2(elm$core$List$cons, style, newStyle));
		default:
			var maxSize = w.a;
			var len = w.b;
			var cls = 'max-width-' + elm$core$String$fromInt(maxSize);
			var style = A3(
				mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'max-width',
				elm$core$String$fromInt(maxSize) + 'px');
			var _n2 = mdgriffith$elm_ui$Internal$Model$renderWidth(len);
			var newFlag = _n2.a;
			var newAttrs = _n2.b;
			var newStyle = _n2.c;
			return _Utils_Tuple3(
				A2(mdgriffith$elm_ui$Internal$Flag$add, mdgriffith$elm_ui$Internal$Flag$widthBetween, newFlag),
				cls + (' ' + newAttrs),
				A2(elm$core$List$cons, style, newStyle));
	}
};
var elm$core$Basics$ge = _Utils_ge;
var mdgriffith$elm_ui$Internal$Flag$borderWidth = mdgriffith$elm_ui$Internal$Flag$flag(27);
var mdgriffith$elm_ui$Internal$Model$skippable = F2(
	function (flag, style) {
		if (_Utils_eq(flag, mdgriffith$elm_ui$Internal$Flag$borderWidth)) {
			if (style.$ === 'Single') {
				var val = style.c;
				switch (val) {
					case '0px':
						return true;
					case '1px':
						return true;
					case '2px':
						return true;
					case '3px':
						return true;
					case '4px':
						return true;
					case '5px':
						return true;
					case '6px':
						return true;
					default:
						return false;
				}
			} else {
				return false;
			}
		} else {
			switch (style.$) {
				case 'FontSize':
					var i = style.a;
					return (i >= 8) && (i <= 32);
				case 'PaddingStyle':
					var name = style.a;
					var t = style.b;
					var r = style.c;
					var b = style.d;
					var l = style.e;
					return _Utils_eq(t, b) && (_Utils_eq(t, r) && (_Utils_eq(t, l) && ((t >= 0) && (t <= 24))));
				default:
					return false;
			}
		}
	});
var mdgriffith$elm_ui$Internal$Model$gatherAttrRecursive = F8(
	function (classes, node, has, transform, styles, attrs, children, elementAttrs) {
		gatherAttrRecursive:
		while (true) {
			if (!elementAttrs.b) {
				var _n1 = mdgriffith$elm_ui$Internal$Model$transformClass(transform);
				if (_n1.$ === 'Nothing') {
					return {
						attributes: A2(
							elm$core$List$cons,
							elm$html$Html$Attributes$class(classes),
							attrs),
						children: children,
						has: has,
						node: node,
						styles: styles
					};
				} else {
					var _class = _n1.a;
					return {
						attributes: A2(
							elm$core$List$cons,
							elm$html$Html$Attributes$class(classes + (' ' + _class)),
							attrs),
						children: children,
						has: has,
						node: node,
						styles: A2(
							elm$core$List$cons,
							mdgriffith$elm_ui$Internal$Model$Transform(transform),
							styles)
					};
				}
			} else {
				var attribute = elementAttrs.a;
				var remaining = elementAttrs.b;
				switch (attribute.$) {
					case 'NoAttribute':
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = has,
							$temp$transform = transform,
							$temp$styles = styles,
							$temp$attrs = attrs,
							$temp$children = children,
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 'Class':
						var flag = attribute.a;
						var exactClassName = attribute.b;
						if (A2(mdgriffith$elm_ui$Internal$Flag$present, flag, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							var $temp$classes = exactClassName + (' ' + classes),
								$temp$node = node,
								$temp$has = A2(mdgriffith$elm_ui$Internal$Flag$add, flag, has),
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						}
					case 'Attr':
						var actualAttribute = attribute.a;
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = has,
							$temp$transform = transform,
							$temp$styles = styles,
							$temp$attrs = A2(elm$core$List$cons, actualAttribute, attrs),
							$temp$children = children,
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 'StyleClass':
						var flag = attribute.a;
						var style = attribute.b;
						if (A2(mdgriffith$elm_ui$Internal$Flag$present, flag, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							if (A2(mdgriffith$elm_ui$Internal$Model$skippable, flag, style)) {
								var $temp$classes = mdgriffith$elm_ui$Internal$Model$getStyleName(style) + (' ' + classes),
									$temp$node = node,
									$temp$has = A2(mdgriffith$elm_ui$Internal$Flag$add, flag, has),
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							} else {
								var $temp$classes = mdgriffith$elm_ui$Internal$Model$getStyleName(style) + (' ' + classes),
									$temp$node = node,
									$temp$has = A2(mdgriffith$elm_ui$Internal$Flag$add, flag, has),
									$temp$transform = transform,
									$temp$styles = A2(elm$core$List$cons, style, styles),
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							}
						}
					case 'TransformComponent':
						var flag = attribute.a;
						var component = attribute.b;
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = A2(mdgriffith$elm_ui$Internal$Flag$add, flag, has),
							$temp$transform = A2(mdgriffith$elm_ui$Internal$Model$composeTransformation, transform, component),
							$temp$styles = styles,
							$temp$attrs = attrs,
							$temp$children = children,
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 'Width':
						var width = attribute.a;
						if (A2(mdgriffith$elm_ui$Internal$Flag$present, mdgriffith$elm_ui$Internal$Flag$width, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							switch (width.$) {
								case 'Px':
									var px = width.a;
									var $temp$classes = (mdgriffith$elm_ui$Internal$Style$classes.widthExact + (' width-px-' + elm$core$String$fromInt(px))) + (' ' + classes),
										$temp$node = node,
										$temp$has = A2(mdgriffith$elm_ui$Internal$Flag$add, mdgriffith$elm_ui$Internal$Flag$width, has),
										$temp$transform = transform,
										$temp$styles = A2(
										elm$core$List$cons,
										A3(
											mdgriffith$elm_ui$Internal$Model$Single,
											'width-px-' + elm$core$String$fromInt(px),
											'width',
											elm$core$String$fromInt(px) + 'px'),
										styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 'Content':
									var $temp$classes = classes + (' ' + mdgriffith$elm_ui$Internal$Style$classes.widthContent),
										$temp$node = node,
										$temp$has = A2(
										mdgriffith$elm_ui$Internal$Flag$add,
										mdgriffith$elm_ui$Internal$Flag$widthContent,
										A2(mdgriffith$elm_ui$Internal$Flag$add, mdgriffith$elm_ui$Internal$Flag$width, has)),
										$temp$transform = transform,
										$temp$styles = styles,
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 'Fill':
									var portion = width.a;
									if (portion === 1) {
										var $temp$classes = classes + (' ' + mdgriffith$elm_ui$Internal$Style$classes.widthFill),
											$temp$node = node,
											$temp$has = A2(
											mdgriffith$elm_ui$Internal$Flag$add,
											mdgriffith$elm_ui$Internal$Flag$widthFill,
											A2(mdgriffith$elm_ui$Internal$Flag$add, mdgriffith$elm_ui$Internal$Flag$width, has)),
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									} else {
										var $temp$classes = classes + (' ' + (mdgriffith$elm_ui$Internal$Style$classes.widthFillPortion + (' width-fill-' + elm$core$String$fromInt(portion)))),
											$temp$node = node,
											$temp$has = A2(
											mdgriffith$elm_ui$Internal$Flag$add,
											mdgriffith$elm_ui$Internal$Flag$widthFill,
											A2(mdgriffith$elm_ui$Internal$Flag$add, mdgriffith$elm_ui$Internal$Flag$width, has)),
											$temp$transform = transform,
											$temp$styles = A2(
											elm$core$List$cons,
											A3(
												mdgriffith$elm_ui$Internal$Model$Single,
												mdgriffith$elm_ui$Internal$Style$classes.any + ('.' + (mdgriffith$elm_ui$Internal$Style$classes.row + (' > ' + mdgriffith$elm_ui$Internal$Style$dot(
													'width-fill-' + elm$core$String$fromInt(portion))))),
												'flex-grow',
												elm$core$String$fromInt(portion * 100000)),
											styles),
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									}
								default:
									var _n4 = mdgriffith$elm_ui$Internal$Model$renderWidth(width);
									var addToFlags = _n4.a;
									var newClass = _n4.b;
									var newStyles = _n4.c;
									var $temp$classes = classes + (' ' + newClass),
										$temp$node = node,
										$temp$has = A2(
										mdgriffith$elm_ui$Internal$Flag$merge,
										addToFlags,
										A2(mdgriffith$elm_ui$Internal$Flag$add, mdgriffith$elm_ui$Internal$Flag$width, has)),
										$temp$transform = transform,
										$temp$styles = _Utils_ap(newStyles, styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
							}
						}
					case 'Height':
						var height = attribute.a;
						if (A2(mdgriffith$elm_ui$Internal$Flag$present, mdgriffith$elm_ui$Internal$Flag$height, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							switch (height.$) {
								case 'Px':
									var px = height.a;
									var val = elm$core$String$fromInt(px) + 'px';
									var name = 'height-px-' + val;
									var $temp$classes = mdgriffith$elm_ui$Internal$Style$classes.heightExact + (' ' + (name + (' ' + classes))),
										$temp$node = node,
										$temp$has = A2(mdgriffith$elm_ui$Internal$Flag$add, mdgriffith$elm_ui$Internal$Flag$height, has),
										$temp$transform = transform,
										$temp$styles = A2(
										elm$core$List$cons,
										A3(mdgriffith$elm_ui$Internal$Model$Single, name, 'height ', val),
										styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 'Content':
									var $temp$classes = mdgriffith$elm_ui$Internal$Style$classes.heightContent + (' ' + classes),
										$temp$node = node,
										$temp$has = A2(
										mdgriffith$elm_ui$Internal$Flag$add,
										mdgriffith$elm_ui$Internal$Flag$heightContent,
										A2(mdgriffith$elm_ui$Internal$Flag$add, mdgriffith$elm_ui$Internal$Flag$height, has)),
										$temp$transform = transform,
										$temp$styles = styles,
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 'Fill':
									var portion = height.a;
									if (portion === 1) {
										var $temp$classes = mdgriffith$elm_ui$Internal$Style$classes.heightFill + (' ' + classes),
											$temp$node = node,
											$temp$has = A2(
											mdgriffith$elm_ui$Internal$Flag$add,
											mdgriffith$elm_ui$Internal$Flag$heightFill,
											A2(mdgriffith$elm_ui$Internal$Flag$add, mdgriffith$elm_ui$Internal$Flag$height, has)),
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									} else {
										var $temp$classes = classes + (' ' + (mdgriffith$elm_ui$Internal$Style$classes.heightFillPortion + (' height-fill-' + elm$core$String$fromInt(portion)))),
											$temp$node = node,
											$temp$has = A2(
											mdgriffith$elm_ui$Internal$Flag$add,
											mdgriffith$elm_ui$Internal$Flag$heightFill,
											A2(mdgriffith$elm_ui$Internal$Flag$add, mdgriffith$elm_ui$Internal$Flag$height, has)),
											$temp$transform = transform,
											$temp$styles = A2(
											elm$core$List$cons,
											A3(
												mdgriffith$elm_ui$Internal$Model$Single,
												mdgriffith$elm_ui$Internal$Style$classes.any + ('.' + (mdgriffith$elm_ui$Internal$Style$classes.column + (' > ' + mdgriffith$elm_ui$Internal$Style$dot(
													'height-fill-' + elm$core$String$fromInt(portion))))),
												'flex-grow',
												elm$core$String$fromInt(portion * 100000)),
											styles),
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									}
								default:
									var _n6 = mdgriffith$elm_ui$Internal$Model$renderHeight(height);
									var addToFlags = _n6.a;
									var newClass = _n6.b;
									var newStyles = _n6.c;
									var $temp$classes = classes + (' ' + newClass),
										$temp$node = node,
										$temp$has = A2(
										mdgriffith$elm_ui$Internal$Flag$merge,
										addToFlags,
										A2(mdgriffith$elm_ui$Internal$Flag$add, mdgriffith$elm_ui$Internal$Flag$height, has)),
										$temp$transform = transform,
										$temp$styles = _Utils_ap(newStyles, styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
							}
						}
					case 'Describe':
						var description = attribute.a;
						switch (description.$) {
							case 'Main':
								var $temp$classes = classes,
									$temp$node = A2(mdgriffith$elm_ui$Internal$Model$addNodeName, 'main', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'Navigation':
								var $temp$classes = classes,
									$temp$node = A2(mdgriffith$elm_ui$Internal$Model$addNodeName, 'nav', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'ContentInfo':
								var $temp$classes = classes,
									$temp$node = A2(mdgriffith$elm_ui$Internal$Model$addNodeName, 'footer', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'Complementary':
								var $temp$classes = classes,
									$temp$node = A2(mdgriffith$elm_ui$Internal$Model$addNodeName, 'aside', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'Heading':
								var i = description.a;
								if (i <= 1) {
									var $temp$classes = classes,
										$temp$node = A2(mdgriffith$elm_ui$Internal$Model$addNodeName, 'h1', node),
										$temp$has = has,
										$temp$transform = transform,
										$temp$styles = styles,
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								} else {
									if (i < 7) {
										var $temp$classes = classes,
											$temp$node = A2(
											mdgriffith$elm_ui$Internal$Model$addNodeName,
											'h' + elm$core$String$fromInt(i),
											node),
											$temp$has = has,
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									} else {
										var $temp$classes = classes,
											$temp$node = A2(mdgriffith$elm_ui$Internal$Model$addNodeName, 'h6', node),
											$temp$has = has,
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									}
								}
							case 'Paragraph':
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'Button':
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									elm$core$List$cons,
									A2(elm$virtual_dom$VirtualDom$attribute, 'role', 'button'),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'Label':
								var label = description.a;
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									elm$core$List$cons,
									A2(elm$virtual_dom$VirtualDom$attribute, 'aria-label', label),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'LivePolite':
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									elm$core$List$cons,
									A2(elm$virtual_dom$VirtualDom$attribute, 'aria-live', 'polite'),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							default:
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									elm$core$List$cons,
									A2(elm$virtual_dom$VirtualDom$attribute, 'aria-live', 'assertive'),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
						}
					case 'Nearby':
						var location = attribute.a;
						var elem = attribute.b;
						var newStyles = function () {
							switch (elem.$) {
								case 'Empty':
									return styles;
								case 'Text':
									var str = elem.a;
									return styles;
								case 'Unstyled':
									var html = elem.a;
									return styles;
								default:
									var styled = elem.a;
									return _Utils_ap(styles, styled.styles);
							}
						}();
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = has,
							$temp$transform = transform,
							$temp$styles = newStyles,
							$temp$attrs = attrs,
							$temp$children = A3(mdgriffith$elm_ui$Internal$Model$addNearbyElement, location, elem, children),
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 'AlignX':
						var x = attribute.a;
						if (A2(mdgriffith$elm_ui$Internal$Flag$present, mdgriffith$elm_ui$Internal$Flag$xAlign, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							var $temp$classes = mdgriffith$elm_ui$Internal$Model$alignXName(x) + (' ' + classes),
								$temp$node = node,
								$temp$has = function (flags) {
								switch (x.$) {
									case 'CenterX':
										return A2(mdgriffith$elm_ui$Internal$Flag$add, mdgriffith$elm_ui$Internal$Flag$centerX, flags);
									case 'Right':
										return A2(mdgriffith$elm_ui$Internal$Flag$add, mdgriffith$elm_ui$Internal$Flag$alignRight, flags);
									default:
										return flags;
								}
							}(
								A2(mdgriffith$elm_ui$Internal$Flag$add, mdgriffith$elm_ui$Internal$Flag$xAlign, has)),
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						}
					default:
						var y = attribute.a;
						if (A2(mdgriffith$elm_ui$Internal$Flag$present, mdgriffith$elm_ui$Internal$Flag$yAlign, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							var $temp$classes = mdgriffith$elm_ui$Internal$Model$alignYName(y) + (' ' + classes),
								$temp$node = node,
								$temp$has = function (flags) {
								switch (y.$) {
									case 'CenterY':
										return A2(mdgriffith$elm_ui$Internal$Flag$add, mdgriffith$elm_ui$Internal$Flag$centerY, flags);
									case 'Bottom':
										return A2(mdgriffith$elm_ui$Internal$Flag$add, mdgriffith$elm_ui$Internal$Flag$alignBottom, flags);
									default:
										return flags;
								}
							}(
								A2(mdgriffith$elm_ui$Internal$Flag$add, mdgriffith$elm_ui$Internal$Flag$yAlign, has)),
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						}
				}
			}
		}
	});
var mdgriffith$elm_ui$Internal$Model$Untransformed = {$: 'Untransformed'};
var mdgriffith$elm_ui$Internal$Model$untransformed = mdgriffith$elm_ui$Internal$Model$Untransformed;
var mdgriffith$elm_ui$Internal$Model$element = F4(
	function (context, node, attributes, children) {
		return A3(
			mdgriffith$elm_ui$Internal$Model$createElement,
			context,
			children,
			A8(
				mdgriffith$elm_ui$Internal$Model$gatherAttrRecursive,
				mdgriffith$elm_ui$Internal$Model$contextClasses(context),
				node,
				mdgriffith$elm_ui$Internal$Flag$none,
				mdgriffith$elm_ui$Internal$Model$untransformed,
				_List_Nil,
				_List_Nil,
				mdgriffith$elm_ui$Internal$Model$NoNearbyChildren,
				elm$core$List$reverse(attributes)));
	});
var mdgriffith$elm_ui$Element$el = F2(
	function (attrs, child) {
		return A4(
			mdgriffith$elm_ui$Internal$Model$element,
			mdgriffith$elm_ui$Internal$Model$asEl,
			mdgriffith$elm_ui$Internal$Model$div,
			A2(
				elm$core$List$cons,
				mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$shrink),
				A2(
					elm$core$List$cons,
					mdgriffith$elm_ui$Element$height(mdgriffith$elm_ui$Element$shrink),
					attrs)),
			mdgriffith$elm_ui$Internal$Model$Unkeyed(
				_List_fromArray(
					[child])));
	});
var mdgriffith$elm_ui$Internal$Model$Attr = function (a) {
	return {$: 'Attr', a: a};
};
var mdgriffith$elm_ui$Element$htmlAttribute = mdgriffith$elm_ui$Internal$Model$Attr;
var mdgriffith$elm_ui$Internal$Flag$hover = mdgriffith$elm_ui$Internal$Flag$flag(33);
var mdgriffith$elm_ui$Internal$Model$Hover = {$: 'Hover'};
var mdgriffith$elm_ui$Internal$Model$PseudoSelector = F2(
	function (a, b) {
		return {$: 'PseudoSelector', a: a, b: b};
	});
var mdgriffith$elm_ui$Internal$Model$StyleClass = F2(
	function (a, b) {
		return {$: 'StyleClass', a: a, b: b};
	});
var elm$virtual_dom$VirtualDom$mapAttribute = _VirtualDom_mapAttribute;
var mdgriffith$elm_ui$Internal$Model$Class = F2(
	function (a, b) {
		return {$: 'Class', a: a, b: b};
	});
var mdgriffith$elm_ui$Internal$Model$Describe = function (a) {
	return {$: 'Describe', a: a};
};
var mdgriffith$elm_ui$Internal$Model$Nearby = F2(
	function (a, b) {
		return {$: 'Nearby', a: a, b: b};
	});
var mdgriffith$elm_ui$Internal$Model$NoAttribute = {$: 'NoAttribute'};
var mdgriffith$elm_ui$Internal$Model$TransformComponent = F2(
	function (a, b) {
		return {$: 'TransformComponent', a: a, b: b};
	});
var elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var mdgriffith$elm_ui$Internal$Model$Empty = {$: 'Empty'};
var mdgriffith$elm_ui$Internal$Model$Text = function (a) {
	return {$: 'Text', a: a};
};
var mdgriffith$elm_ui$Internal$Model$map = F2(
	function (fn, el) {
		switch (el.$) {
			case 'Styled':
				var styled = el.a;
				return mdgriffith$elm_ui$Internal$Model$Styled(
					{
						html: F2(
							function (add, context) {
								return A2(
									elm$virtual_dom$VirtualDom$map,
									fn,
									A2(styled.html, add, context));
							}),
						styles: styled.styles
					});
			case 'Unstyled':
				var html = el.a;
				return mdgriffith$elm_ui$Internal$Model$Unstyled(
					A2(
						elm$core$Basics$composeL,
						elm$virtual_dom$VirtualDom$map(fn),
						html));
			case 'Text':
				var str = el.a;
				return mdgriffith$elm_ui$Internal$Model$Text(str);
			default:
				return mdgriffith$elm_ui$Internal$Model$Empty;
		}
	});
var mdgriffith$elm_ui$Internal$Model$mapAttrFromStyle = F2(
	function (fn, attr) {
		switch (attr.$) {
			case 'NoAttribute':
				return mdgriffith$elm_ui$Internal$Model$NoAttribute;
			case 'Describe':
				var description = attr.a;
				return mdgriffith$elm_ui$Internal$Model$Describe(description);
			case 'AlignX':
				var x = attr.a;
				return mdgriffith$elm_ui$Internal$Model$AlignX(x);
			case 'AlignY':
				var y = attr.a;
				return mdgriffith$elm_ui$Internal$Model$AlignY(y);
			case 'Width':
				var x = attr.a;
				return mdgriffith$elm_ui$Internal$Model$Width(x);
			case 'Height':
				var x = attr.a;
				return mdgriffith$elm_ui$Internal$Model$Height(x);
			case 'Class':
				var x = attr.a;
				var y = attr.b;
				return A2(mdgriffith$elm_ui$Internal$Model$Class, x, y);
			case 'StyleClass':
				var flag = attr.a;
				var style = attr.b;
				return A2(mdgriffith$elm_ui$Internal$Model$StyleClass, flag, style);
			case 'Nearby':
				var location = attr.a;
				var elem = attr.b;
				return A2(
					mdgriffith$elm_ui$Internal$Model$Nearby,
					location,
					A2(mdgriffith$elm_ui$Internal$Model$map, fn, elem));
			case 'Attr':
				var htmlAttr = attr.a;
				return mdgriffith$elm_ui$Internal$Model$Attr(
					A2(elm$virtual_dom$VirtualDom$mapAttribute, fn, htmlAttr));
			default:
				var fl = attr.a;
				var trans = attr.b;
				return A2(mdgriffith$elm_ui$Internal$Model$TransformComponent, fl, trans);
		}
	});
var mdgriffith$elm_ui$Internal$Model$removeNever = function (style) {
	return A2(mdgriffith$elm_ui$Internal$Model$mapAttrFromStyle, elm$core$Basics$never, style);
};
var mdgriffith$elm_ui$Internal$Model$unwrapDecsHelper = F2(
	function (attr, _n0) {
		var styles = _n0.a;
		var trans = _n0.b;
		var _n1 = mdgriffith$elm_ui$Internal$Model$removeNever(attr);
		switch (_n1.$) {
			case 'StyleClass':
				var style = _n1.b;
				return _Utils_Tuple2(
					A2(elm$core$List$cons, style, styles),
					trans);
			case 'TransformComponent':
				var flag = _n1.a;
				var component = _n1.b;
				return _Utils_Tuple2(
					styles,
					A2(mdgriffith$elm_ui$Internal$Model$composeTransformation, trans, component));
			default:
				return _Utils_Tuple2(styles, trans);
		}
	});
var mdgriffith$elm_ui$Internal$Model$unwrapDecorations = function (attrs) {
	var _n0 = A3(
		elm$core$List$foldl,
		mdgriffith$elm_ui$Internal$Model$unwrapDecsHelper,
		_Utils_Tuple2(_List_Nil, mdgriffith$elm_ui$Internal$Model$Untransformed),
		attrs);
	var styles = _n0.a;
	var transform = _n0.b;
	return A2(
		elm$core$List$cons,
		mdgriffith$elm_ui$Internal$Model$Transform(transform),
		styles);
};
var mdgriffith$elm_ui$Element$mouseOver = function (decs) {
	return A2(
		mdgriffith$elm_ui$Internal$Model$StyleClass,
		mdgriffith$elm_ui$Internal$Flag$hover,
		A2(
			mdgriffith$elm_ui$Internal$Model$PseudoSelector,
			mdgriffith$elm_ui$Internal$Model$Hover,
			mdgriffith$elm_ui$Internal$Model$unwrapDecorations(decs)));
};
var mdgriffith$elm_ui$Internal$Flag$cursor = mdgriffith$elm_ui$Internal$Flag$flag(21);
var mdgriffith$elm_ui$Element$pointer = A2(mdgriffith$elm_ui$Internal$Model$Class, mdgriffith$elm_ui$Internal$Flag$cursor, mdgriffith$elm_ui$Internal$Style$classes.cursorPointer);
var mdgriffith$elm_ui$Internal$Model$Px = function (a) {
	return {$: 'Px', a: a};
};
var mdgriffith$elm_ui$Element$px = mdgriffith$elm_ui$Internal$Model$Px;
var mdgriffith$elm_ui$Internal$Flag$bgColor = mdgriffith$elm_ui$Internal$Flag$flag(8);
var mdgriffith$elm_ui$Internal$Model$Colored = F3(
	function (a, b, c) {
		return {$: 'Colored', a: a, b: b, c: c};
	});
var mdgriffith$elm_ui$Internal$Model$formatColorClass = function (_n0) {
	var red = _n0.a;
	var green = _n0.b;
	var blue = _n0.c;
	var alpha = _n0.d;
	return mdgriffith$elm_ui$Internal$Model$floatClass(red) + ('-' + (mdgriffith$elm_ui$Internal$Model$floatClass(green) + ('-' + (mdgriffith$elm_ui$Internal$Model$floatClass(blue) + ('-' + mdgriffith$elm_ui$Internal$Model$floatClass(alpha))))));
};
var mdgriffith$elm_ui$Element$Background$color = function (clr) {
	return A2(
		mdgriffith$elm_ui$Internal$Model$StyleClass,
		mdgriffith$elm_ui$Internal$Flag$bgColor,
		A3(
			mdgriffith$elm_ui$Internal$Model$Colored,
			'bg-' + mdgriffith$elm_ui$Internal$Model$formatColorClass(clr),
			'background-color',
			clr));
};
var mdgriffith$elm_ui$Internal$Flag$borderRound = mdgriffith$elm_ui$Internal$Flag$flag(17);
var mdgriffith$elm_ui$Element$Border$rounded = function (radius) {
	return A2(
		mdgriffith$elm_ui$Internal$Model$StyleClass,
		mdgriffith$elm_ui$Internal$Flag$borderRound,
		A3(
			mdgriffith$elm_ui$Internal$Model$Single,
			'br-' + elm$core$String$fromInt(radius),
			'border-radius',
			elm$core$String$fromInt(radius) + 'px'));
};
var elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 'Normal', a: a};
};
var elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			elm$virtual_dom$VirtualDom$on,
			event,
			elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var elm$html$Html$Events$onClick = function (msg) {
	return A2(
		elm$html$Html$Events$on,
		'click',
		elm$json$Json$Decode$succeed(msg));
};
var mdgriffith$elm_ui$Element$Events$onClick = A2(elm$core$Basics$composeL, mdgriffith$elm_ui$Internal$Model$Attr, elm$html$Html$Events$onClick);
var QiTASC$hatchinq$Hatchinq$AppBar$iconButton = F2(
	function (theme, a) {
		var idAttribute = function () {
			var _n0 = a.id;
			if (_n0.$ === 'Just') {
				var id = _n0.a;
				return _List_fromArray(
					[
						mdgriffith$elm_ui$Element$htmlAttribute(
						elm$html$Html$Attributes$id(id))
					]);
			} else {
				return _List_Nil;
			}
		}();
		return A2(
			mdgriffith$elm_ui$Element$el,
			_Utils_ap(
				idAttribute,
				_List_fromArray(
					[
						mdgriffith$elm_ui$Element$Events$onClick(a.message),
						mdgriffith$elm_ui$Element$Border$rounded(20),
						mdgriffith$elm_ui$Element$width(
						mdgriffith$elm_ui$Element$px(40)),
						mdgriffith$elm_ui$Element$height(
						mdgriffith$elm_ui$Element$px(40)),
						mdgriffith$elm_ui$Element$htmlAttribute(
						elm$html$Html$Attributes$class('button focusWhiteRipple')),
						mdgriffith$elm_ui$Element$mouseOver(
						_List_fromArray(
							[
								mdgriffith$elm_ui$Element$Background$color(theme.colors.gray.light)
							])),
						mdgriffith$elm_ui$Element$pointer
					])),
			A2(
				mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[mdgriffith$elm_ui$Element$centerX, mdgriffith$elm_ui$Element$centerY]),
				QiTASC$hatchinq$Hatchinq$Theme$icon(a.icon)));
	});
var QiTASC$hatchinq$Hatchinq$Attribute$toElement = function (source) {
	return A2(
		elm$core$List$filterMap,
		function (i) {
			switch (i.$) {
				case 'Width':
					var l = i.a;
					return elm$core$Maybe$Just(
						mdgriffith$elm_ui$Element$width(l));
				case 'Height':
					var l = i.a;
					return elm$core$Maybe$Just(
						mdgriffith$elm_ui$Element$height(l));
				case 'Id':
					var idString = i.a;
					return elm$core$Maybe$Just(
						mdgriffith$elm_ui$Element$htmlAttribute(
							elm$html$Html$Attributes$id(idString)));
				default:
					return elm$core$Maybe$Nothing;
			}
		},
		source);
};
var QiTASC$hatchinq$Hatchinq$Attribute$toInternalConfig = F2(
	function (source, _default) {
		return A3(
			elm$core$List$foldr,
			F2(
				function (item, view) {
					if (item.$ === 'Custom') {
						var f = item.a;
						return f(view);
					} else {
						return view;
					}
				}),
			_default,
			source);
	});
var QiTASC$hatchinq$Hatchinq$Theme$white = QiTASC$hatchinq$Hatchinq$Color$toElement(QiTASC$hatchinq$Hatchinq$Theme$mqWhite);
var mdgriffith$elm_ui$Internal$Model$Right = {$: 'Right'};
var mdgriffith$elm_ui$Element$alignRight = mdgriffith$elm_ui$Internal$Model$AlignX(mdgriffith$elm_ui$Internal$Model$Right);
var mdgriffith$elm_ui$Internal$Model$Fill = function (a) {
	return {$: 'Fill', a: a};
};
var mdgriffith$elm_ui$Element$fill = mdgriffith$elm_ui$Internal$Model$Fill(1);
var mdgriffith$elm_ui$Element$none = mdgriffith$elm_ui$Internal$Model$Empty;
var mdgriffith$elm_ui$Internal$Flag$padding = mdgriffith$elm_ui$Internal$Flag$flag(2);
var mdgriffith$elm_ui$Internal$Model$PaddingStyle = F5(
	function (a, b, c, d, e) {
		return {$: 'PaddingStyle', a: a, b: b, c: c, d: d, e: e};
	});
var mdgriffith$elm_ui$Element$padding = function (x) {
	return A2(
		mdgriffith$elm_ui$Internal$Model$StyleClass,
		mdgriffith$elm_ui$Internal$Flag$padding,
		A5(
			mdgriffith$elm_ui$Internal$Model$PaddingStyle,
			'p-' + elm$core$String$fromInt(x),
			x,
			x,
			x,
			x));
};
var mdgriffith$elm_ui$Element$paddingXY = F2(
	function (x, y) {
		return _Utils_eq(x, y) ? A2(
			mdgriffith$elm_ui$Internal$Model$StyleClass,
			mdgriffith$elm_ui$Internal$Flag$padding,
			A5(
				mdgriffith$elm_ui$Internal$Model$PaddingStyle,
				'p-' + elm$core$String$fromInt(x),
				x,
				x,
				x,
				x)) : A2(
			mdgriffith$elm_ui$Internal$Model$StyleClass,
			mdgriffith$elm_ui$Internal$Flag$padding,
			A5(
				mdgriffith$elm_ui$Internal$Model$PaddingStyle,
				'p-' + (elm$core$String$fromInt(x) + ('-' + elm$core$String$fromInt(y))),
				y,
				x,
				y,
				x));
	});
var mdgriffith$elm_ui$Internal$Model$AsRow = {$: 'AsRow'};
var mdgriffith$elm_ui$Internal$Model$asRow = mdgriffith$elm_ui$Internal$Model$AsRow;
var mdgriffith$elm_ui$Internal$Model$htmlClass = function (cls) {
	return mdgriffith$elm_ui$Internal$Model$Attr(
		elm$html$Html$Attributes$class(cls));
};
var mdgriffith$elm_ui$Element$row = F2(
	function (attrs, children) {
		return A4(
			mdgriffith$elm_ui$Internal$Model$element,
			mdgriffith$elm_ui$Internal$Model$asRow,
			mdgriffith$elm_ui$Internal$Model$div,
			A2(
				elm$core$List$cons,
				mdgriffith$elm_ui$Internal$Model$htmlClass(mdgriffith$elm_ui$Internal$Style$classes.contentLeft + (' ' + mdgriffith$elm_ui$Internal$Style$classes.contentCenterY)),
				A2(
					elm$core$List$cons,
					mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$shrink),
					A2(
						elm$core$List$cons,
						mdgriffith$elm_ui$Element$height(mdgriffith$elm_ui$Element$shrink),
						attrs))),
			mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
	});
var mdgriffith$elm_ui$Internal$Flag$spacing = mdgriffith$elm_ui$Internal$Flag$flag(3);
var mdgriffith$elm_ui$Internal$Model$SpacingStyle = F3(
	function (a, b, c) {
		return {$: 'SpacingStyle', a: a, b: b, c: c};
	});
var mdgriffith$elm_ui$Internal$Model$spacingName = F2(
	function (x, y) {
		return 'spacing-' + (elm$core$String$fromInt(x) + ('-' + elm$core$String$fromInt(y)));
	});
var mdgriffith$elm_ui$Element$spacing = function (x) {
	return A2(
		mdgriffith$elm_ui$Internal$Model$StyleClass,
		mdgriffith$elm_ui$Internal$Flag$spacing,
		A3(
			mdgriffith$elm_ui$Internal$Model$SpacingStyle,
			A2(mdgriffith$elm_ui$Internal$Model$spacingName, x, x),
			x,
			x));
};
var mdgriffith$elm_ui$Internal$Flag$shadows = mdgriffith$elm_ui$Internal$Flag$flag(19);
var mdgriffith$elm_ui$Internal$Model$boxShadowClass = function (shadow) {
	return elm$core$String$concat(
		_List_fromArray(
			[
				shadow.inset ? 'box-inset' : 'box-',
				mdgriffith$elm_ui$Internal$Model$floatClass(shadow.offset.a) + 'px',
				mdgriffith$elm_ui$Internal$Model$floatClass(shadow.offset.b) + 'px',
				mdgriffith$elm_ui$Internal$Model$floatClass(shadow.blur) + 'px',
				mdgriffith$elm_ui$Internal$Model$floatClass(shadow.size) + 'px',
				mdgriffith$elm_ui$Internal$Model$formatColorClass(shadow.color)
			]));
};
var mdgriffith$elm_ui$Element$Border$shadow = function (almostShade) {
	var shade = {blur: almostShade.blur, color: almostShade.color, inset: false, offset: almostShade.offset, size: almostShade.size};
	return A2(
		mdgriffith$elm_ui$Internal$Model$StyleClass,
		mdgriffith$elm_ui$Internal$Flag$shadows,
		A3(
			mdgriffith$elm_ui$Internal$Model$Single,
			mdgriffith$elm_ui$Internal$Model$boxShadowClass(shade),
			'box-shadow',
			mdgriffith$elm_ui$Internal$Model$formatBoxShadow(shade)));
};
var mdgriffith$elm_ui$Internal$Model$BorderWidth = F5(
	function (a, b, c, d, e) {
		return {$: 'BorderWidth', a: a, b: b, c: c, d: d, e: e};
	});
var mdgriffith$elm_ui$Element$Border$width = function (v) {
	return A2(
		mdgriffith$elm_ui$Internal$Model$StyleClass,
		mdgriffith$elm_ui$Internal$Flag$borderWidth,
		A5(
			mdgriffith$elm_ui$Internal$Model$BorderWidth,
			'b-' + elm$core$String$fromInt(v),
			v,
			v,
			v,
			v));
};
var mdgriffith$elm_ui$Internal$Flag$fontWeight = mdgriffith$elm_ui$Internal$Flag$flag(13);
var mdgriffith$elm_ui$Element$Font$bold = A2(mdgriffith$elm_ui$Internal$Model$Class, mdgriffith$elm_ui$Internal$Flag$fontWeight, mdgriffith$elm_ui$Internal$Style$classes.bold);
var mdgriffith$elm_ui$Internal$Flag$fontColor = mdgriffith$elm_ui$Internal$Flag$flag(14);
var mdgriffith$elm_ui$Element$Font$color = function (fontColor) {
	return A2(
		mdgriffith$elm_ui$Internal$Model$StyleClass,
		mdgriffith$elm_ui$Internal$Flag$fontColor,
		A3(
			mdgriffith$elm_ui$Internal$Model$Colored,
			'fc-' + mdgriffith$elm_ui$Internal$Model$formatColorClass(fontColor),
			'color',
			fontColor));
};
var mdgriffith$elm_ui$Internal$Flag$fontFamily = mdgriffith$elm_ui$Internal$Flag$flag(5);
var mdgriffith$elm_ui$Internal$Model$FontFamily = F2(
	function (a, b) {
		return {$: 'FontFamily', a: a, b: b};
	});
var elm$core$String$toLower = _String_toLower;
var elm$core$String$words = _String_words;
var mdgriffith$elm_ui$Internal$Model$renderFontClassName = F2(
	function (font, current) {
		return _Utils_ap(
			current,
			function () {
				switch (font.$) {
					case 'Serif':
						return 'serif';
					case 'SansSerif':
						return 'sans-serif';
					case 'Monospace':
						return 'monospace';
					case 'Typeface':
						var name = font.a;
						return A2(
							elm$core$String$join,
							'-',
							elm$core$String$words(
								elm$core$String$toLower(name)));
					case 'ImportFont':
						var name = font.a;
						var url = font.b;
						return A2(
							elm$core$String$join,
							'-',
							elm$core$String$words(
								elm$core$String$toLower(name)));
					default:
						var name = font.a.name;
						return A2(
							elm$core$String$join,
							'-',
							elm$core$String$words(
								elm$core$String$toLower(name)));
				}
			}());
	});
var mdgriffith$elm_ui$Element$Font$family = function (families) {
	return A2(
		mdgriffith$elm_ui$Internal$Model$StyleClass,
		mdgriffith$elm_ui$Internal$Flag$fontFamily,
		A2(
			mdgriffith$elm_ui$Internal$Model$FontFamily,
			A3(elm$core$List$foldl, mdgriffith$elm_ui$Internal$Model$renderFontClassName, 'ff-', families),
			families));
};
var mdgriffith$elm_ui$Internal$Flag$fontSize = mdgriffith$elm_ui$Internal$Flag$flag(4);
var mdgriffith$elm_ui$Internal$Model$FontSize = function (a) {
	return {$: 'FontSize', a: a};
};
var mdgriffith$elm_ui$Element$Font$size = function (i) {
	return A2(
		mdgriffith$elm_ui$Internal$Model$StyleClass,
		mdgriffith$elm_ui$Internal$Flag$fontSize,
		mdgriffith$elm_ui$Internal$Model$FontSize(i));
};
var QiTASC$hatchinq$Hatchinq$AppBar$view = F3(
	function (_n0, source, data) {
		var theme = _n0.theme;
		var internalView = A2(
			QiTASC$hatchinq$Hatchinq$Attribute$toInternalConfig,
			source,
			{elevate: false, navigation: elm$core$Maybe$Nothing});
		var attributes = QiTASC$hatchinq$Hatchinq$Attribute$toElement(source);
		return A2(
			mdgriffith$elm_ui$Element$el,
			A2(
				elm$core$List$cons,
				mdgriffith$elm_ui$Element$Background$color(theme.colors.primary.color),
				A2(
					elm$core$List$cons,
					mdgriffith$elm_ui$Element$Font$family(
						_List_fromArray(
							[
								mdgriffith$elm_ui$Element$Font$typeface('Avenir')
							])),
					A2(
						elm$core$List$cons,
						mdgriffith$elm_ui$Element$Font$size(20),
						A2(
							elm$core$List$cons,
							mdgriffith$elm_ui$Element$Font$bold,
							A2(
								elm$core$List$cons,
								mdgriffith$elm_ui$Element$Font$color(QiTASC$hatchinq$Hatchinq$Theme$white),
								A2(
									elm$core$List$cons,
									mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
									A2(
										elm$core$List$cons,
										mdgriffith$elm_ui$Element$height(
											mdgriffith$elm_ui$Element$px(QiTASC$hatchinq$Hatchinq$AppBar$appBarHeight)),
										A2(
											elm$core$List$cons,
											mdgriffith$elm_ui$Element$padding(8),
											A2(
												elm$core$List$cons,
												internalView.elevate ? mdgriffith$elm_ui$Element$Border$shadow(
													{
														blur: 4,
														color: A4(mdgriffith$elm_ui$Element$rgba255, 140, 140, 140, 0.58),
														offset: _Utils_Tuple2(0, 4),
														size: 0
													}) : mdgriffith$elm_ui$Element$Border$width(0),
												attributes))))))))),
			A2(
				mdgriffith$elm_ui$Element$row,
				_List_fromArray(
					[
						mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
						mdgriffith$elm_ui$Element$spacing(16)
					]),
				_List_fromArray(
					[
						function () {
						var _n1 = internalView.navigation;
						if (_n1.$ === 'Just') {
							var message = _n1.a;
							return A2(
								QiTASC$hatchinq$Hatchinq$AppBar$iconButton,
								theme,
								{icon: 'menu', id: elm$core$Maybe$Nothing, message: message});
						} else {
							return mdgriffith$elm_ui$Element$none;
						}
					}(),
						A2(
						mdgriffith$elm_ui$Element$el,
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Element$paddingXY, 16, 0)
							]),
						data.title),
						A2(
						mdgriffith$elm_ui$Element$row,
						_List_fromArray(
							[
								mdgriffith$elm_ui$Element$alignRight,
								mdgriffith$elm_ui$Element$spacing(8)
							]),
						A2(
							elm$core$List$map,
							function (a) {
								return A2(QiTASC$hatchinq$Hatchinq$AppBar$iconButton, theme, a);
							},
							data.buttons))
					])));
	});
var QiTASC$hatchinq$Hatchinq$AppBar$configure = function (config) {
	return QiTASC$hatchinq$Hatchinq$AppBar$view(config);
};
var QiTASC$hatchinq$Examples$appBar = QiTASC$hatchinq$Hatchinq$AppBar$configure(
	{theme: QiTASC$hatchinq$Examples$theme});
var QiTASC$hatchinq$Examples$PressMinus = {$: 'PressMinus'};
var QiTASC$hatchinq$Examples$PressPlus = {$: 'PressPlus'};
var QiTASC$hatchinq$Examples$SelectPerson = function (a) {
	return {$: 'SelectPerson', a: a};
};
var QiTASC$hatchinq$Hatchinq$Button$Contained = {$: 'Contained'};
var QiTASC$hatchinq$Hatchinq$Button$Outlined = {$: 'Outlined'};
var QiTASC$hatchinq$Hatchinq$Button$Text = {$: 'Text'};
var QiTASC$hatchinq$Hatchinq$Theme$textWithEllipsis = function (text) {
	return A2(
		mdgriffith$elm_ui$Element$el,
		_List_fromArray(
			[
				A2(mdgriffith$elm_ui$Element$paddingXY, 0, 2),
				mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
				mdgriffith$elm_ui$Element$height(mdgriffith$elm_ui$Element$fill),
				mdgriffith$elm_ui$Element$htmlAttribute(
				A2(elm$html$Html$Attributes$style, 'display', 'inline-block')),
				mdgriffith$elm_ui$Element$htmlAttribute(
				A2(elm$html$Html$Attributes$style, 'overflow', 'hidden')),
				mdgriffith$elm_ui$Element$htmlAttribute(
				A2(elm$html$Html$Attributes$style, 'text-overflow', 'ellipsis'))
			]),
		mdgriffith$elm_ui$Element$html(
			elm$html$Html$text(text)));
};
var mdgriffith$elm_ui$Internal$Flag$focus = mdgriffith$elm_ui$Internal$Flag$flag(31);
var mdgriffith$elm_ui$Internal$Model$Focus = {$: 'Focus'};
var mdgriffith$elm_ui$Element$focused = function (decs) {
	return A2(
		mdgriffith$elm_ui$Internal$Model$StyleClass,
		mdgriffith$elm_ui$Internal$Flag$focus,
		A2(
			mdgriffith$elm_ui$Internal$Model$PseudoSelector,
			mdgriffith$elm_ui$Internal$Model$Focus,
			mdgriffith$elm_ui$Internal$Model$unwrapDecorations(decs)));
};
var mdgriffith$elm_ui$Internal$Model$Min = F2(
	function (a, b) {
		return {$: 'Min', a: a, b: b};
	});
var mdgriffith$elm_ui$Element$minimum = F2(
	function (i, l) {
		return A2(mdgriffith$elm_ui$Internal$Model$Min, i, l);
	});
var mdgriffith$elm_ui$Internal$Flag$active = mdgriffith$elm_ui$Internal$Flag$flag(32);
var mdgriffith$elm_ui$Internal$Model$Active = {$: 'Active'};
var mdgriffith$elm_ui$Element$mouseDown = function (decs) {
	return A2(
		mdgriffith$elm_ui$Internal$Model$StyleClass,
		mdgriffith$elm_ui$Internal$Flag$active,
		A2(
			mdgriffith$elm_ui$Internal$Model$PseudoSelector,
			mdgriffith$elm_ui$Internal$Model$Active,
			mdgriffith$elm_ui$Internal$Model$unwrapDecorations(decs)));
};
var mdgriffith$elm_ui$Internal$Flag$borderColor = mdgriffith$elm_ui$Internal$Flag$flag(28);
var mdgriffith$elm_ui$Element$Border$color = function (clr) {
	return A2(
		mdgriffith$elm_ui$Internal$Model$StyleClass,
		mdgriffith$elm_ui$Internal$Flag$borderColor,
		A3(
			mdgriffith$elm_ui$Internal$Model$Colored,
			'bc-' + mdgriffith$elm_ui$Internal$Model$formatColorClass(clr),
			'border-color',
			clr));
};
var mdgriffith$elm_ui$Internal$Flag$fontAlignment = mdgriffith$elm_ui$Internal$Flag$flag(12);
var mdgriffith$elm_ui$Element$Font$center = A2(mdgriffith$elm_ui$Internal$Model$Class, mdgriffith$elm_ui$Internal$Flag$fontAlignment, mdgriffith$elm_ui$Internal$Style$classes.textCenter);
var elm$json$Json$Encode$bool = _Json_wrap;
var elm$html$Html$Attributes$boolProperty = F2(
	function (key, bool) {
		return A2(
			_VirtualDom_property,
			key,
			elm$json$Json$Encode$bool(bool));
	});
var elm$html$Html$Attributes$disabled = elm$html$Html$Attributes$boolProperty('disabled');
var elm$html$Html$Attributes$tabindex = function (n) {
	return A2(
		_VirtualDom_attribute,
		'tabIndex',
		elm$core$String$fromInt(n));
};
var mdgriffith$elm_ui$Element$Input$hasFocusStyle = function (attr) {
	if (((attr.$ === 'StyleClass') && (attr.b.$ === 'PseudoSelector')) && (attr.b.a.$ === 'Focus')) {
		var _n1 = attr.b;
		var _n2 = _n1.a;
		return true;
	} else {
		return false;
	}
};
var mdgriffith$elm_ui$Element$Input$focusDefault = function (attrs) {
	return A2(elm$core$List$any, mdgriffith$elm_ui$Element$Input$hasFocusStyle, attrs) ? mdgriffith$elm_ui$Internal$Model$NoAttribute : mdgriffith$elm_ui$Internal$Model$htmlClass('focusable');
};
var mdgriffith$elm_ui$Element$Input$enter = 'Enter';
var elm$virtual_dom$VirtualDom$MayPreventDefault = function (a) {
	return {$: 'MayPreventDefault', a: a};
};
var elm$html$Html$Events$preventDefaultOn = F2(
	function (event, decoder) {
		return A2(
			elm$virtual_dom$VirtualDom$on,
			event,
			elm$virtual_dom$VirtualDom$MayPreventDefault(decoder));
	});
var elm$json$Json$Decode$andThen = _Json_andThen;
var elm$json$Json$Decode$fail = _Json_fail;
var elm$json$Json$Decode$string = _Json_decodeString;
var mdgriffith$elm_ui$Element$Input$onKey = F2(
	function (desiredCode, msg) {
		var decode = function (code) {
			return _Utils_eq(code, desiredCode) ? elm$json$Json$Decode$succeed(msg) : elm$json$Json$Decode$fail('Not the enter key');
		};
		var isKey = A2(
			elm$json$Json$Decode$andThen,
			decode,
			A2(elm$json$Json$Decode$field, 'key', elm$json$Json$Decode$string));
		return mdgriffith$elm_ui$Internal$Model$Attr(
			A2(
				elm$html$Html$Events$preventDefaultOn,
				'keyup',
				A2(
					elm$json$Json$Decode$map,
					function (fired) {
						return _Utils_Tuple2(fired, true);
					},
					isKey)));
	});
var mdgriffith$elm_ui$Element$Input$onEnter = function (msg) {
	return A2(mdgriffith$elm_ui$Element$Input$onKey, mdgriffith$elm_ui$Element$Input$enter, msg);
};
var mdgriffith$elm_ui$Internal$Model$Button = {$: 'Button'};
var mdgriffith$elm_ui$Element$Input$button = F2(
	function (attrs, _n0) {
		var onPress = _n0.onPress;
		var label = _n0.label;
		return A4(
			mdgriffith$elm_ui$Internal$Model$element,
			mdgriffith$elm_ui$Internal$Model$asEl,
			mdgriffith$elm_ui$Internal$Model$div,
			A2(
				elm$core$List$cons,
				mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$shrink),
				A2(
					elm$core$List$cons,
					mdgriffith$elm_ui$Element$height(mdgriffith$elm_ui$Element$shrink),
					A2(
						elm$core$List$cons,
						mdgriffith$elm_ui$Internal$Model$htmlClass(mdgriffith$elm_ui$Internal$Style$classes.contentCenterX + (' ' + (mdgriffith$elm_ui$Internal$Style$classes.contentCenterY + (' ' + (mdgriffith$elm_ui$Internal$Style$classes.seButton + (' ' + mdgriffith$elm_ui$Internal$Style$classes.noTextSelection)))))),
						A2(
							elm$core$List$cons,
							mdgriffith$elm_ui$Element$pointer,
							A2(
								elm$core$List$cons,
								mdgriffith$elm_ui$Element$Input$focusDefault(attrs),
								A2(
									elm$core$List$cons,
									mdgriffith$elm_ui$Internal$Model$Describe(mdgriffith$elm_ui$Internal$Model$Button),
									A2(
										elm$core$List$cons,
										mdgriffith$elm_ui$Internal$Model$Attr(
											elm$html$Html$Attributes$tabindex(0)),
										function () {
											if (onPress.$ === 'Nothing') {
												return A2(
													elm$core$List$cons,
													mdgriffith$elm_ui$Internal$Model$Attr(
														elm$html$Html$Attributes$disabled(true)),
													attrs);
											} else {
												var msg = onPress.a;
												return A2(
													elm$core$List$cons,
													mdgriffith$elm_ui$Element$Events$onClick(msg),
													A2(
														elm$core$List$cons,
														mdgriffith$elm_ui$Element$Input$onEnter(msg),
														attrs));
											}
										}()))))))),
			mdgriffith$elm_ui$Internal$Model$Unkeyed(
				_List_fromArray(
					[label])));
	});
var QiTASC$hatchinq$Hatchinq$Button$view = F3(
	function (_n0, source, data) {
		var theme = _n0.theme;
		var defaultView = {buttonType: QiTASC$hatchinq$Hatchinq$Button$Outlined, label: data.label, onPress: data.onPress};
		var internalConfig = A2(QiTASC$hatchinq$Hatchinq$Attribute$toInternalConfig, source, defaultView);
		var disabled = _Utils_eq(internalConfig.onPress, elm$core$Maybe$Nothing);
		var isFilled = _Utils_eq(internalConfig.buttonType, QiTASC$hatchinq$Hatchinq$Button$Contained);
		var isOutlined = _Utils_eq(internalConfig.buttonType, QiTASC$hatchinq$Hatchinq$Button$Outlined);
		var isText = _Utils_eq(internalConfig.buttonType, QiTASC$hatchinq$Hatchinq$Button$Text);
		var attributes = QiTASC$hatchinq$Hatchinq$Attribute$toElement(source);
		return A2(
			mdgriffith$elm_ui$Element$el,
			attributes,
			A2(
				mdgriffith$elm_ui$Element$Input$button,
				A2(
					elm$core$List$cons,
					mdgriffith$elm_ui$Element$height(
						mdgriffith$elm_ui$Element$px(36)),
					A2(
						elm$core$List$cons,
						mdgriffith$elm_ui$Element$width(
							A2(mdgriffith$elm_ui$Element$minimum, 64, mdgriffith$elm_ui$Element$shrink)),
						A2(
							elm$core$List$cons,
							A2(
								mdgriffith$elm_ui$Element$paddingXY,
								isText ? 8 : 16,
								0),
							A2(
								elm$core$List$cons,
								mdgriffith$elm_ui$Element$Font$family(
									_List_fromArray(
										[theme.font.main])),
								A2(
									elm$core$List$cons,
									mdgriffith$elm_ui$Element$Font$size(14),
									A2(
										elm$core$List$cons,
										mdgriffith$elm_ui$Element$Font$bold,
										A2(
											elm$core$List$cons,
											mdgriffith$elm_ui$Element$Font$color(
												disabled ? theme.colors.gray.color : (isFilled ? theme.colors.secondary.textColor : theme.colors.secondary.color)),
											A2(
												elm$core$List$cons,
												mdgriffith$elm_ui$Element$Font$center,
												A2(
													elm$core$List$cons,
													mdgriffith$elm_ui$Element$Background$color(
														isFilled ? (disabled ? theme.colors.gray.lighter : theme.colors.secondary.color) : A4(mdgriffith$elm_ui$Element$rgba255, 0, 0, 0, 0)),
													A2(
														elm$core$List$cons,
														mdgriffith$elm_ui$Element$Border$rounded(2),
														A2(
															elm$core$List$cons,
															((!disabled) && isFilled) ? mdgriffith$elm_ui$Element$Border$shadow(
																{
																	blur: 3,
																	color: A4(mdgriffith$elm_ui$Element$rgba255, 140, 140, 140, 0.74),
																	offset: _Utils_Tuple2(0, 2),
																	size: 0
																}) : mdgriffith$elm_ui$Element$Border$width(
																isOutlined ? 1 : 0),
															A2(
																elm$core$List$cons,
																mdgriffith$elm_ui$Element$Border$color(
																	A4(mdgriffith$elm_ui$Element$rgba255, 0, 0, 0, 0.12)),
																A2(
																	elm$core$List$cons,
																	mdgriffith$elm_ui$Element$htmlAttribute(
																		elm$html$Html$Attributes$class(
																			disabled ? '' : (isFilled ? 'button focusWhiteRipple' : 'button focusSecondaryRipple'))),
																	A2(
																		elm$core$List$cons,
																		mdgriffith$elm_ui$Element$htmlAttribute(
																			disabled ? A2(elm$html$Html$Attributes$style, 'cursor', 'default') : A2(elm$html$Html$Attributes$style, '', '')),
																		A2(
																			elm$core$List$cons,
																			mdgriffith$elm_ui$Element$focused(
																				disabled ? _List_Nil : (isFilled ? _List_fromArray(
																					[
																						mdgriffith$elm_ui$Element$Background$color(theme.colors.secondary.light)
																					]) : _List_fromArray(
																					[
																						mdgriffith$elm_ui$Element$Background$color(theme.colors.secondary.lighter)
																					]))),
																			A2(
																				elm$core$List$cons,
																				mdgriffith$elm_ui$Element$mouseDown(
																					disabled ? _List_Nil : (isFilled ? _List_fromArray(
																						[
																							mdgriffith$elm_ui$Element$Border$shadow(
																							{
																								blur: 10,
																								color: A4(mdgriffith$elm_ui$Element$rgba255, 140, 140, 140, 0.74),
																								offset: _Utils_Tuple2(0, 6),
																								size: 0
																							})
																						]) : _List_Nil)),
																				A2(
																					elm$core$List$cons,
																					mdgriffith$elm_ui$Element$mouseOver(
																						disabled ? _List_Nil : (isFilled ? _List_fromArray(
																							[
																								mdgriffith$elm_ui$Element$Background$color(
																								theme.colors.secondary.withAlpha(0.88)),
																								mdgriffith$elm_ui$Element$Border$shadow(
																								{
																									blur: 6,
																									color: A4(mdgriffith$elm_ui$Element$rgba255, 140, 140, 140, 0.74),
																									offset: _Utils_Tuple2(0, 4),
																									size: 0
																								})
																							]) : _List_fromArray(
																							[
																								mdgriffith$elm_ui$Element$Background$color(theme.colors.secondary.lightest)
																							]))),
																					attributes))))))))))))))))),
				{
					label: A2(
						mdgriffith$elm_ui$Element$el,
						_List_fromArray(
							[
								mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill)
							]),
						QiTASC$hatchinq$Hatchinq$Theme$textWithEllipsis(internalConfig.label)),
					onPress: internalConfig.onPress
				}));
	});
var QiTASC$hatchinq$Hatchinq$Button$configure = function (config) {
	return QiTASC$hatchinq$Hatchinq$Button$view(config);
};
var QiTASC$hatchinq$Examples$button = QiTASC$hatchinq$Hatchinq$Button$configure(
	{theme: QiTASC$hatchinq$Examples$theme});
var QiTASC$hatchinq$Hatchinq$Attribute$withAttributes = F2(
	function (defaultAttributes, orig) {
		return F2(
			function (attr, v) {
				return A2(
					orig,
					_Utils_ap(attr, defaultAttributes),
					v);
			});
	});
var QiTASC$hatchinq$Hatchinq$Attribute$Custom = function (a) {
	return {$: 'Custom', a: a};
};
var QiTASC$hatchinq$Hatchinq$Attribute$custom = function (f) {
	return QiTASC$hatchinq$Hatchinq$Attribute$Custom(f);
};
var QiTASC$hatchinq$Hatchinq$Button$contained = QiTASC$hatchinq$Hatchinq$Attribute$custom(
	function (v) {
		return _Utils_update(
			v,
			{buttonType: QiTASC$hatchinq$Hatchinq$Button$Contained});
	});
var QiTASC$hatchinq$Examples$containedButton = A2(
	QiTASC$hatchinq$Hatchinq$Attribute$withAttributes,
	_List_fromArray(
		[QiTASC$hatchinq$Hatchinq$Button$contained]),
	QiTASC$hatchinq$Examples$button);
var QiTASC$hatchinq$Hatchinq$Color$textColor = function (background) {
	var isBright = A2(
		QiTASC$hatchinq$Hatchinq$Color$isBrighter,
		background,
		A4(QiTASC$hatchinq$Hatchinq$Color$rgba, 255, 255, 255, 0.5));
	return isBright ? A4(QiTASC$hatchinq$Hatchinq$Color$rgba, 0, 0, 0, 1) : A4(QiTASC$hatchinq$Hatchinq$Color$rgba, 255, 255, 255, 1);
};
var QiTASC$hatchinq$Hatchinq$IconButton$Default = {$: 'Default'};
var elm$virtual_dom$VirtualDom$Custom = function (a) {
	return {$: 'Custom', a: a};
};
var elm$html$Html$Events$custom = F2(
	function (event, decoder) {
		return A2(
			elm$virtual_dom$VirtualDom$on,
			event,
			elm$virtual_dom$VirtualDom$Custom(decoder));
	});
var QiTASC$hatchinq$Hatchinq$IconButton$onClickNoBubble = F2(
	function (noPropagation, message) {
		return mdgriffith$elm_ui$Element$htmlAttribute(
			A2(
				elm$html$Html$Events$custom,
				'click',
				elm$json$Json$Decode$succeed(
					{message: message, preventDefault: true, stopPropagation: noPropagation})));
	});
var QiTASC$hatchinq$Hatchinq$Theme$black = QiTASC$hatchinq$Hatchinq$Color$toElement(QiTASC$hatchinq$Hatchinq$Theme$mqBlack);
var QiTASC$hatchinq$Hatchinq$IconButton$view = F3(
	function (_n0, source, data) {
		var theme = _n0.theme;
		var disabled = _Utils_eq(data.onPress, elm$core$Maybe$Nothing);
		var defaultInternalConfig = {iconButtonType: QiTASC$hatchinq$Hatchinq$IconButton$Default, stopPropagation: false, textColor: elm$core$Maybe$Nothing};
		var internalConfig = A2(QiTASC$hatchinq$Hatchinq$Attribute$toInternalConfig, source, defaultInternalConfig);
		var dynamicAttributes = function () {
			if (disabled) {
				return A2(
					elm$core$List$cons,
					mdgriffith$elm_ui$Element$Font$color(theme.colors.gray.color),
					A2(
						elm$core$List$cons,
						mdgriffith$elm_ui$Element$focused(_List_Nil),
						A2(
							elm$core$List$cons,
							mdgriffith$elm_ui$Element$htmlAttribute(
								A2(elm$html$Html$Attributes$style, 'cursor', 'default')),
							function () {
								var _n2 = internalConfig.iconButtonType;
								switch (_n2.$) {
									case 'Default':
										return _List_Nil;
									case 'White':
										return _List_Nil;
									default:
										return _List_fromArray(
											[
												mdgriffith$elm_ui$Element$Background$color(theme.colors.gray.lightest)
											]);
								}
							}())));
			} else {
				var _n3 = internalConfig.iconButtonType;
				switch (_n3.$) {
					case 'Default':
						return _List_fromArray(
							[
								mdgriffith$elm_ui$Element$Font$color(
								A2(elm$core$Maybe$withDefault, QiTASC$hatchinq$Hatchinq$Theme$black, internalConfig.textColor)),
								mdgriffith$elm_ui$Element$htmlAttribute(
								elm$html$Html$Attributes$class('ripple focusGrayRipple')),
								mdgriffith$elm_ui$Element$focused(
								_List_fromArray(
									[
										mdgriffith$elm_ui$Element$Background$color(theme.colors.gray.lighter)
									])),
								mdgriffith$elm_ui$Element$mouseOver(
								_List_fromArray(
									[
										mdgriffith$elm_ui$Element$Background$color(theme.colors.gray.lightest)
									]))
							]);
					case 'White':
						return _List_fromArray(
							[
								mdgriffith$elm_ui$Element$Font$color(
								A2(elm$core$Maybe$withDefault, QiTASC$hatchinq$Hatchinq$Theme$white, internalConfig.textColor)),
								mdgriffith$elm_ui$Element$htmlAttribute(
								elm$html$Html$Attributes$class('ripple focusWhiteRipple')),
								mdgriffith$elm_ui$Element$focused(
								_List_fromArray(
									[
										mdgriffith$elm_ui$Element$Background$color(
										QiTASC$hatchinq$Hatchinq$Color$toElement(
											A4(QiTASC$hatchinq$Hatchinq$Color$rgba, 255, 255, 255, 8.0e-2)))
									])),
								mdgriffith$elm_ui$Element$mouseOver(
								_List_fromArray(
									[
										mdgriffith$elm_ui$Element$Background$color(
										QiTASC$hatchinq$Hatchinq$Color$toElement(
											A4(QiTASC$hatchinq$Hatchinq$Color$rgba, 255, 255, 255, 4.0e-2)))
									]))
							]);
					default:
						return _List_fromArray(
							[
								mdgriffith$elm_ui$Element$htmlAttribute(
								A2(elm$html$Html$Attributes$style, 'box-shadow', '0 1px 1.5px 0 rgba(0,0,0,.12), 0 1px 1px 0 rgba(0,0,0,.24)')),
								mdgriffith$elm_ui$Element$Font$color(
								A2(
									elm$core$Maybe$withDefault,
									QiTASC$hatchinq$Hatchinq$Color$toElement(
										QiTASC$hatchinq$Hatchinq$Color$textColor(theme.colors.secondary.original)),
									internalConfig.textColor)),
								mdgriffith$elm_ui$Element$htmlAttribute(
								elm$html$Html$Attributes$class('ripple focusWhiteRipple')),
								mdgriffith$elm_ui$Element$Background$color(theme.colors.secondary.color),
								mdgriffith$elm_ui$Element$focused(
								_List_fromArray(
									[
										mdgriffith$elm_ui$Element$Background$color(theme.colors.secondary.light)
									])),
								mdgriffith$elm_ui$Element$mouseOver(
								_List_fromArray(
									[
										mdgriffith$elm_ui$Element$Background$color(
										theme.colors.secondary.withAlpha(0.88))
									]))
							]);
				}
			}
		}();
		var onClickMsg = function () {
			var _n1 = data.onPress;
			if (_n1.$ === 'Nothing') {
				return _List_Nil;
			} else {
				var msg = _n1.a;
				return _List_fromArray(
					[
						A2(QiTASC$hatchinq$Hatchinq$IconButton$onClickNoBubble, internalConfig.stopPropagation, msg)
					]);
			}
		}();
		var attributes = QiTASC$hatchinq$Hatchinq$Attribute$toElement(source);
		return A2(
			mdgriffith$elm_ui$Element$el,
			attributes,
			A2(
				mdgriffith$elm_ui$Element$el,
				_Utils_ap(
					_List_fromArray(
						[
							mdgriffith$elm_ui$Element$height(
							mdgriffith$elm_ui$Element$px(theme.sizes.minRowHeight - 8)),
							mdgriffith$elm_ui$Element$width(
							mdgriffith$elm_ui$Element$px(theme.sizes.minRowHeight - 8)),
							mdgriffith$elm_ui$Element$htmlAttribute(
							A2(elm$html$Html$Attributes$style, 'border-radius', '50%')),
							mdgriffith$elm_ui$Element$Font$family(
							_List_fromArray(
								[theme.font.main])),
							mdgriffith$elm_ui$Element$Font$size(24),
							mdgriffith$elm_ui$Element$Font$bold,
							mdgriffith$elm_ui$Element$Font$center
						]),
					_Utils_ap(
						dynamicAttributes,
						_Utils_ap(attributes, onClickMsg))),
				A2(
					mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[mdgriffith$elm_ui$Element$centerX, mdgriffith$elm_ui$Element$centerY]),
					QiTASC$hatchinq$Hatchinq$Theme$icon(data.icon))));
	});
var QiTASC$hatchinq$Hatchinq$IconButton$configure = function (config) {
	return QiTASC$hatchinq$Hatchinq$IconButton$view(config);
};
var QiTASC$hatchinq$Examples$iconButton = QiTASC$hatchinq$Hatchinq$IconButton$configure(
	{theme: QiTASC$hatchinq$Examples$theme});
var QiTASC$hatchinq$Hatchinq$Util$enterKeyCode = 13;
var elm$html$Html$Events$keyCode = A2(elm$json$Json$Decode$field, 'keyCode', elm$json$Json$Decode$int);
var QiTASC$hatchinq$Hatchinq$Util$keyDownAttribute = F2(
	function (keyCode, message) {
		var isKey = function (code) {
			return _Utils_eq(code, keyCode) ? elm$json$Json$Decode$succeed(message) : elm$json$Json$Decode$fail(
				'not keyCode ' + elm$core$String$fromInt(keyCode));
		};
		return mdgriffith$elm_ui$Element$htmlAttribute(
			A2(
				elm$html$Html$Events$on,
				'keydown',
				A2(elm$json$Json$Decode$andThen, isKey, elm$html$Html$Events$keyCode)));
	});
var elm$html$Html$Attributes$attribute = elm$virtual_dom$VirtualDom$attribute;
var mdgriffith$elm_ui$Element$createNearby = F2(
	function (loc, element) {
		if (element.$ === 'Empty') {
			return mdgriffith$elm_ui$Internal$Model$NoAttribute;
		} else {
			return A2(mdgriffith$elm_ui$Internal$Model$Nearby, loc, element);
		}
	});
var mdgriffith$elm_ui$Internal$Model$Behind = {$: 'Behind'};
var mdgriffith$elm_ui$Element$behindContent = function (element) {
	return A2(mdgriffith$elm_ui$Element$createNearby, mdgriffith$elm_ui$Internal$Model$Behind, element);
};
var QiTASC$hatchinq$Hatchinq$RadioButton$view = F3(
	function (_n0, attributes, data) {
		var theme = _n0.theme;
		var keyEnterAttributes = function () {
			var _n2 = data.onChange;
			if (_n2.$ === 'Just') {
				var onChange = _n2.a;
				return _List_fromArray(
					[
						A2(
						QiTASC$hatchinq$Hatchinq$Util$keyDownAttribute,
						QiTASC$hatchinq$Hatchinq$Util$enterKeyCode,
						onChange(!data.value))
					]);
			} else {
				return _List_Nil;
			}
		}();
		var icon = data.value ? QiTASC$hatchinq$Hatchinq$Theme$icon('radio_button_checked') : QiTASC$hatchinq$Hatchinq$Theme$icon('radio_button_unchecked');
		var elementAttributes = QiTASC$hatchinq$Hatchinq$Attribute$toElement(attributes);
		var disabled = _Utils_eq(data.onChange, elm$core$Maybe$Nothing);
		var defaultConfig = {stopPropagation: false};
		var internalConfig = A2(QiTASC$hatchinq$Hatchinq$Attribute$toInternalConfig, attributes, defaultConfig);
		var radioButtonDisabledAttributes = function () {
			var _n1 = data.onChange;
			if (_n1.$ === 'Just') {
				var onChange = _n1.a;
				return _List_fromArray(
					[
						mdgriffith$elm_ui$Element$htmlAttribute(
						A2(
							elm$html$Html$Events$custom,
							'click',
							elm$json$Json$Decode$succeed(
								{
									message: onChange(!data.value),
									preventDefault: false,
									stopPropagation: internalConfig.stopPropagation
								})))
					]);
			} else {
				return _List_fromArray(
					[
						mdgriffith$elm_ui$Element$htmlAttribute(
						elm$html$Html$Attributes$disabled(true))
					]);
			}
		}();
		var accentColorType = data.value ? theme.colors.secondary : theme.colors.gray;
		var styleAttributes = disabled ? _List_Nil : _List_fromArray(
			[
				mdgriffith$elm_ui$Element$focused(
				_List_fromArray(
					[
						mdgriffith$elm_ui$Element$Background$color(
						accentColorType.withAlpha(8.0e-2))
					])),
				mdgriffith$elm_ui$Element$mouseOver(
				_List_fromArray(
					[
						mdgriffith$elm_ui$Element$Background$color(
						accentColorType.withAlpha(4.0e-2))
					])),
				mdgriffith$elm_ui$Element$htmlAttribute(
				A2(elm$html$Html$Attributes$attribute, 'tabindex', '0')),
				mdgriffith$elm_ui$Element$pointer
			]);
		var accentColor = data.value ? theme.colors.secondary.color : theme.colors.gray.dark;
		return A2(
			mdgriffith$elm_ui$Element$el,
			_Utils_ap(
				_List_fromArray(
					[
						mdgriffith$elm_ui$Element$height(
						mdgriffith$elm_ui$Element$px(theme.sizes.minRowHeight - 8)),
						mdgriffith$elm_ui$Element$width(
						mdgriffith$elm_ui$Element$px(theme.sizes.minRowHeight - 8)),
						mdgriffith$elm_ui$Element$htmlAttribute(
						A2(elm$html$Html$Attributes$style, 'border-radius', '50%')),
						mdgriffith$elm_ui$Element$htmlAttribute(
						elm$html$Html$Attributes$class('ripple focusSecondaryRipple')),
						mdgriffith$elm_ui$Element$behindContent(
						A2(
							mdgriffith$elm_ui$Element$el,
							_List_fromArray(
								[
									mdgriffith$elm_ui$Element$centerX,
									mdgriffith$elm_ui$Element$centerY,
									mdgriffith$elm_ui$Element$Font$color(
									disabled ? theme.colors.gray.color : accentColor)
								]),
							icon))
					]),
				_Utils_ap(
					styleAttributes,
					_Utils_ap(
						radioButtonDisabledAttributes,
						_Utils_ap(keyEnterAttributes, elementAttributes)))),
			mdgriffith$elm_ui$Element$none);
	});
var QiTASC$hatchinq$Hatchinq$RadioButton$configure = function (config) {
	return QiTASC$hatchinq$Hatchinq$RadioButton$view(config);
};
var QiTASC$hatchinq$Examples$radioButton = QiTASC$hatchinq$Hatchinq$RadioButton$configure(
	{theme: QiTASC$hatchinq$Examples$theme});
var QiTASC$hatchinq$Hatchinq$Button$text = QiTASC$hatchinq$Hatchinq$Attribute$custom(
	function (v) {
		return _Utils_update(
			v,
			{buttonType: QiTASC$hatchinq$Hatchinq$Button$Text});
	});
var QiTASC$hatchinq$Examples$textButton = A2(
	QiTASC$hatchinq$Hatchinq$Attribute$withAttributes,
	_List_fromArray(
		[QiTASC$hatchinq$Hatchinq$Button$text]),
	QiTASC$hatchinq$Examples$button);
var QiTASC$hatchinq$Hatchinq$Attribute$Height = function (a) {
	return {$: 'Height', a: a};
};
var QiTASC$hatchinq$Hatchinq$Attribute$height = QiTASC$hatchinq$Hatchinq$Attribute$Height;
var QiTASC$hatchinq$Hatchinq$Attribute$Width = function (a) {
	return {$: 'Width', a: a};
};
var QiTASC$hatchinq$Hatchinq$Attribute$width = QiTASC$hatchinq$Hatchinq$Attribute$Width;
var QiTASC$hatchinq$Hatchinq$IconButton$Filled = {$: 'Filled'};
var QiTASC$hatchinq$Hatchinq$IconButton$filled = QiTASC$hatchinq$Hatchinq$Attribute$custom(
	function (v) {
		return _Utils_update(
			v,
			{iconButtonType: QiTASC$hatchinq$Hatchinq$IconButton$Filled});
	});
var mdgriffith$elm_ui$Internal$Model$Top = {$: 'Top'};
var mdgriffith$elm_ui$Element$alignTop = mdgriffith$elm_ui$Internal$Model$AlignY(mdgriffith$elm_ui$Internal$Model$Top);
var mdgriffith$elm_ui$Internal$Model$AsColumn = {$: 'AsColumn'};
var mdgriffith$elm_ui$Internal$Model$asColumn = mdgriffith$elm_ui$Internal$Model$AsColumn;
var mdgriffith$elm_ui$Element$column = F2(
	function (attrs, children) {
		return A4(
			mdgriffith$elm_ui$Internal$Model$element,
			mdgriffith$elm_ui$Internal$Model$asColumn,
			mdgriffith$elm_ui$Internal$Model$div,
			A2(
				elm$core$List$cons,
				mdgriffith$elm_ui$Internal$Model$htmlClass(mdgriffith$elm_ui$Internal$Style$classes.contentTop + (' ' + mdgriffith$elm_ui$Internal$Style$classes.contentLeft)),
				A2(
					elm$core$List$cons,
					mdgriffith$elm_ui$Element$height(mdgriffith$elm_ui$Element$shrink),
					A2(
						elm$core$List$cons,
						mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$shrink),
						attrs))),
			mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
	});
var mdgriffith$elm_ui$Internal$Flag$overflow = mdgriffith$elm_ui$Internal$Flag$flag(20);
var mdgriffith$elm_ui$Element$scrollbars = A2(mdgriffith$elm_ui$Internal$Model$Class, mdgriffith$elm_ui$Internal$Flag$overflow, mdgriffith$elm_ui$Internal$Style$classes.scrollbars);
var mdgriffith$elm_ui$Element$text = function (content) {
	return mdgriffith$elm_ui$Internal$Model$Text(content);
};
var QiTASC$hatchinq$Examples$buttonsContent = F2(
	function (model, _n0) {
		return A2(
			mdgriffith$elm_ui$Element$column,
			_List_fromArray(
				[
					mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
					mdgriffith$elm_ui$Element$height(mdgriffith$elm_ui$Element$fill),
					mdgriffith$elm_ui$Element$padding(20),
					mdgriffith$elm_ui$Element$spacing(8),
					mdgriffith$elm_ui$Element$alignTop,
					mdgriffith$elm_ui$Element$scrollbars
				]),
			_List_fromArray(
				[
					A2(
					mdgriffith$elm_ui$Element$row,
					_List_fromArray(
						[
							mdgriffith$elm_ui$Element$spacing(16)
						]),
					_List_fromArray(
						[
							A2(
							QiTASC$hatchinq$Examples$textButton,
							_List_Nil,
							{
								label: '-',
								onPress: elm$core$Maybe$Just(QiTASC$hatchinq$Examples$PressMinus)
							}),
							mdgriffith$elm_ui$Element$text(
							elm$core$String$fromInt(model.counter)),
							A2(
							QiTASC$hatchinq$Examples$textButton,
							_List_Nil,
							{
								label: '+',
								onPress: elm$core$Maybe$Just(QiTASC$hatchinq$Examples$PressPlus)
							}),
							A2(
							QiTASC$hatchinq$Examples$textButton,
							_List_Nil,
							{label: 'DISABLED', onPress: elm$core$Maybe$Nothing})
						])),
					A2(
					mdgriffith$elm_ui$Element$row,
					_List_fromArray(
						[
							mdgriffith$elm_ui$Element$spacing(16)
						]),
					_List_fromArray(
						[
							A2(
							QiTASC$hatchinq$Examples$button,
							_List_Nil,
							{
								label: '-',
								onPress: elm$core$Maybe$Just(QiTASC$hatchinq$Examples$PressMinus)
							}),
							mdgriffith$elm_ui$Element$text(
							elm$core$String$fromInt(model.counter)),
							A2(
							QiTASC$hatchinq$Examples$button,
							_List_Nil,
							{
								label: '+',
								onPress: elm$core$Maybe$Just(QiTASC$hatchinq$Examples$PressPlus)
							}),
							A2(
							QiTASC$hatchinq$Examples$button,
							_List_Nil,
							{label: 'DISABLED', onPress: elm$core$Maybe$Nothing})
						])),
					A2(
					mdgriffith$elm_ui$Element$row,
					_List_fromArray(
						[
							mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
							mdgriffith$elm_ui$Element$spacing(16)
						]),
					_List_fromArray(
						[
							A2(
							QiTASC$hatchinq$Examples$containedButton,
							_List_Nil,
							{
								label: '-',
								onPress: elm$core$Maybe$Just(QiTASC$hatchinq$Examples$PressMinus)
							}),
							mdgriffith$elm_ui$Element$text(
							elm$core$String$fromInt(model.counter)),
							A2(
							QiTASC$hatchinq$Examples$containedButton,
							_List_Nil,
							{
								label: '+',
								onPress: elm$core$Maybe$Just(QiTASC$hatchinq$Examples$PressPlus)
							}),
							A2(
							QiTASC$hatchinq$Examples$containedButton,
							_List_fromArray(
								[
									QiTASC$hatchinq$Hatchinq$Attribute$width(mdgriffith$elm_ui$Element$fill),
									QiTASC$hatchinq$Hatchinq$Attribute$height(
									mdgriffith$elm_ui$Element$px(65))
								]),
							{label: 'DISABLED', onPress: elm$core$Maybe$Nothing})
						])),
					A2(
					mdgriffith$elm_ui$Element$row,
					_List_fromArray(
						[
							mdgriffith$elm_ui$Element$spacing(16)
						]),
					_List_fromArray(
						[
							A2(
							QiTASC$hatchinq$Examples$iconButton,
							_List_Nil,
							{
								icon: 'exposure_neg_1',
								onPress: elm$core$Maybe$Just(QiTASC$hatchinq$Examples$PressMinus)
							}),
							mdgriffith$elm_ui$Element$text(
							elm$core$String$fromInt(model.counter)),
							A2(
							QiTASC$hatchinq$Examples$iconButton,
							_List_Nil,
							{
								icon: 'exposure_plus_1',
								onPress: elm$core$Maybe$Just(QiTASC$hatchinq$Examples$PressPlus)
							}),
							A2(
							QiTASC$hatchinq$Examples$iconButton,
							_List_Nil,
							{icon: 'sync_disabled', onPress: elm$core$Maybe$Nothing})
						])),
					A2(
					mdgriffith$elm_ui$Element$row,
					_List_fromArray(
						[
							mdgriffith$elm_ui$Element$spacing(16)
						]),
					_List_fromArray(
						[
							A2(
							QiTASC$hatchinq$Examples$iconButton,
							_List_fromArray(
								[
									QiTASC$hatchinq$Hatchinq$Attribute$width(
									mdgriffith$elm_ui$Element$px(24)),
									QiTASC$hatchinq$Hatchinq$Attribute$height(
									mdgriffith$elm_ui$Element$px(24)),
									QiTASC$hatchinq$Hatchinq$IconButton$filled
								]),
							{
								icon: 'exposure_neg_1',
								onPress: elm$core$Maybe$Just(QiTASC$hatchinq$Examples$PressMinus)
							}),
							mdgriffith$elm_ui$Element$text(
							elm$core$String$fromInt(model.counter)),
							A2(
							QiTASC$hatchinq$Examples$iconButton,
							_List_fromArray(
								[QiTASC$hatchinq$Hatchinq$IconButton$filled]),
							{
								icon: 'exposure_plus_1',
								onPress: elm$core$Maybe$Just(QiTASC$hatchinq$Examples$PressPlus)
							}),
							A2(
							QiTASC$hatchinq$Examples$iconButton,
							_List_fromArray(
								[
									QiTASC$hatchinq$Hatchinq$Attribute$width(
									mdgriffith$elm_ui$Element$px(70)),
									QiTASC$hatchinq$Hatchinq$Attribute$height(
									mdgriffith$elm_ui$Element$px(70)),
									QiTASC$hatchinq$Hatchinq$IconButton$filled
								]),
							{icon: 'sync_disabled', onPress: elm$core$Maybe$Nothing})
						])),
					A2(
					mdgriffith$elm_ui$Element$row,
					_List_fromArray(
						[
							mdgriffith$elm_ui$Element$spacing(16)
						]),
					_List_fromArray(
						[
							A2(
							mdgriffith$elm_ui$Element$column,
							_List_Nil,
							A2(
								elm$core$List$map,
								function (person) {
									return A2(
										mdgriffith$elm_ui$Element$row,
										_List_Nil,
										_List_fromArray(
											[
												A2(
												QiTASC$hatchinq$Examples$radioButton,
												_List_Nil,
												{
													onChange: elm$core$Maybe$Just(
														function (check) {
															return check ? QiTASC$hatchinq$Examples$SelectPerson(
																elm$core$Maybe$Just(person)) : QiTASC$hatchinq$Examples$SelectPerson(elm$core$Maybe$Nothing);
														}),
													value: _Utils_eq(
														model.selectedPerson,
														elm$core$Maybe$Just(person))
												}),
												A2(
												mdgriffith$elm_ui$Element$el,
												_List_fromArray(
													[
														mdgriffith$elm_ui$Element$Events$onClick(
														(!_Utils_eq(
															model.selectedPerson,
															elm$core$Maybe$Just(person))) ? QiTASC$hatchinq$Examples$SelectPerson(
															elm$core$Maybe$Just(person)) : QiTASC$hatchinq$Examples$SelectPerson(elm$core$Maybe$Nothing))
													]),
												mdgriffith$elm_ui$Element$text(person.firstName + (' ' + person.lastName)))
											]));
								},
								QiTASC$hatchinq$Examples$persons))
						]))
				]));
	});
var QiTASC$hatchinq$Examples$FilesTreeLift = function (a) {
	return {$: 'FilesTreeLift', a: a};
};
var QiTASC$hatchinq$Hatchinq$Theme$dense = function (theme) {
	return _Utils_update(
		theme,
		{
			sizes: {
				minRowHeight: 32,
				table: {
					cellPadding: {bottom: 0, left: 8, right: 8, top: 0},
					expansionPadding: {bottom: 8, left: 12, right: 12, top: 8},
					rowHeight: 32,
					rowPadding: {bottom: 8, left: 4, right: 4, top: 8}
				}
			}
		});
};
var QiTASC$hatchinq$Hatchinq$Theme$arrowTransition = A2(elm$html$Html$Attributes$style, 'transition', 'all .15s, transform .15s cubic-bezier(0.4, 0, 0.2, 1) 0s, -webkit-transform .15s cubic-bezier(0.4, 0, 0.2, 1) 0s');
var QiTASC$hatchinq$Hatchinq$Tree$Toggle = function (a) {
	return {$: 'Toggle', a: a};
};
var mdgriffith$elm_ui$Internal$Model$paddingName = F4(
	function (top, right, bottom, left) {
		return 'pad-' + (elm$core$String$fromInt(top) + ('-' + (elm$core$String$fromInt(right) + ('-' + (elm$core$String$fromInt(bottom) + ('-' + elm$core$String$fromInt(left)))))));
	});
var mdgriffith$elm_ui$Element$paddingEach = function (_n0) {
	var top = _n0.top;
	var right = _n0.right;
	var bottom = _n0.bottom;
	var left = _n0.left;
	return (_Utils_eq(top, right) && (_Utils_eq(top, bottom) && _Utils_eq(top, left))) ? A2(
		mdgriffith$elm_ui$Internal$Model$StyleClass,
		mdgriffith$elm_ui$Internal$Flag$padding,
		A5(
			mdgriffith$elm_ui$Internal$Model$PaddingStyle,
			'p-' + elm$core$String$fromInt(top),
			top,
			top,
			top,
			top)) : A2(
		mdgriffith$elm_ui$Internal$Model$StyleClass,
		mdgriffith$elm_ui$Internal$Flag$padding,
		A5(
			mdgriffith$elm_ui$Internal$Model$PaddingStyle,
			A4(mdgriffith$elm_ui$Internal$Model$paddingName, top, right, bottom, left),
			top,
			right,
			bottom,
			left));
};
var QiTASC$hatchinq$Hatchinq$Tree$renderTreeNode = F4(
	function (theme, path, maybeExpandedNode, _n0) {
		var text = _n0.a.text;
		var children = _n0.a.children;
		var toggleButtonWidth = theme.sizes.minRowHeight - 8;
		var itemRowHeight = theme.sizes.minRowHeight;
		var toggleButton = elm$core$List$isEmpty(children) ? A2(
			mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[
					mdgriffith$elm_ui$Element$width(
					mdgriffith$elm_ui$Element$px(itemRowHeight)),
					mdgriffith$elm_ui$Element$height(
					mdgriffith$elm_ui$Element$px(itemRowHeight))
				]),
			mdgriffith$elm_ui$Element$none) : A2(
			mdgriffith$elm_ui$Element$el,
			_Utils_ap(
				_List_fromArray(
					[
						mdgriffith$elm_ui$Element$width(
						mdgriffith$elm_ui$Element$px(itemRowHeight)),
						mdgriffith$elm_ui$Element$htmlAttribute(
						A2(elm$html$Html$Attributes$style, 'will-change', 'transform')),
						mdgriffith$elm_ui$Element$htmlAttribute(QiTASC$hatchinq$Hatchinq$Theme$arrowTransition)
					]),
				function () {
					if (maybeExpandedNode.$ === 'Just') {
						return _List_fromArray(
							[
								mdgriffith$elm_ui$Element$htmlAttribute(
								A2(elm$html$Html$Attributes$style, 'transform', 'rotate(90deg)'))
							]);
					} else {
						return _List_Nil;
					}
				}()),
			A2(
				mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[mdgriffith$elm_ui$Element$centerX, mdgriffith$elm_ui$Element$centerY]),
				A3(
					QiTASC$hatchinq$Hatchinq$IconButton$configure,
					{theme: theme},
					_List_Nil,
					{
						icon: 'arrow_right',
						onPress: elm$core$Maybe$Just(
							QiTASC$hatchinq$Hatchinq$Tree$Toggle(path))
					})));
		var childrenElements = function () {
			if (maybeExpandedNode.$ === 'Nothing') {
				return mdgriffith$elm_ui$Element$none;
			} else {
				var expandedNodes = maybeExpandedNode.a.a.expandedNodes;
				return elm$core$List$isEmpty(children) ? mdgriffith$elm_ui$Element$none : A2(
					mdgriffith$elm_ui$Element$column,
					_List_fromArray(
						[
							mdgriffith$elm_ui$Element$paddingEach(
							{bottom: 0, left: 24, right: 0, top: 0}),
							mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill)
						]),
					A2(
						elm$core$List$indexedMap,
						F2(
							function (nodeIndex, childNode) {
								return A4(
									QiTASC$hatchinq$Hatchinq$Tree$renderTreeNode,
									theme,
									_Utils_ap(
										path,
										_List_fromArray(
											[nodeIndex])),
									A2(elm$core$Dict$get, nodeIndex, expandedNodes),
									childNode);
							}),
						children));
			}
		}();
		return A2(
			mdgriffith$elm_ui$Element$column,
			_List_fromArray(
				[
					mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill)
				]),
			_List_fromArray(
				[
					A2(
					mdgriffith$elm_ui$Element$row,
					_List_fromArray(
						[
							mdgriffith$elm_ui$Element$height(
							mdgriffith$elm_ui$Element$px(itemRowHeight))
						]),
					_List_fromArray(
						[
							toggleButton,
							A2(
							mdgriffith$elm_ui$Element$el,
							_List_fromArray(
								[
									mdgriffith$elm_ui$Element$paddingEach(
									{bottom: 0, left: 0, right: 4, top: 0})
								]),
							mdgriffith$elm_ui$Element$text(text))
						])),
					childrenElements
				]));
	});
var mdgriffith$elm_ui$Element$map = mdgriffith$elm_ui$Internal$Model$map;
var QiTASC$hatchinq$Hatchinq$Tree$view = F3(
	function (_n0, attributes, _n1) {
		var theme = _n0.theme;
		var lift = _n0.lift;
		var state = _n1.state;
		var data = _n1.data;
		var elementAttributes = QiTASC$hatchinq$Hatchinq$Attribute$toElement(attributes);
		var _n2 = state.rootExpandedNode;
		var expandedNodes = _n2.a.expandedNodes;
		return A2(
			mdgriffith$elm_ui$Element$column,
			A2(
				elm$core$List$cons,
				mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
				elementAttributes),
			A2(
				elm$core$List$map,
				mdgriffith$elm_ui$Element$map(lift),
				A2(
					elm$core$List$indexedMap,
					F2(
						function (index, treeNode) {
							return A4(
								QiTASC$hatchinq$Hatchinq$Tree$renderTreeNode,
								theme,
								_List_fromArray(
									[index]),
								A2(elm$core$Dict$get, index, expandedNodes),
								treeNode);
						}),
					data)));
	});
var QiTASC$hatchinq$Hatchinq$Tree$configure = function (config) {
	return QiTASC$hatchinq$Hatchinq$Tree$view(config);
};
var QiTASC$hatchinq$Examples$denseTree = QiTASC$hatchinq$Hatchinq$Tree$configure(
	{
		lift: QiTASC$hatchinq$Examples$FilesTreeLift,
		theme: QiTASC$hatchinq$Hatchinq$Theme$dense(QiTASC$hatchinq$Examples$theme)
	});
var QiTASC$hatchinq$Examples$tree = QiTASC$hatchinq$Hatchinq$Tree$configure(
	{lift: QiTASC$hatchinq$Examples$FilesTreeLift, theme: QiTASC$hatchinq$Examples$theme});
var QiTASC$hatchinq$Hatchinq$Tree$TreeNode = function (a) {
	return {$: 'TreeNode', a: a};
};
var QiTASC$hatchinq$Hatchinq$Tree$node = function (_n0) {
	var text = _n0.text;
	var children = _n0.children;
	return QiTASC$hatchinq$Hatchinq$Tree$TreeNode(
		{children: children, text: text});
};
var QiTASC$hatchinq$Examples$filesContent = F2(
	function (model, _n0) {
		var data = _List_fromArray(
			[
				QiTASC$hatchinq$Hatchinq$Tree$node(
				{children: _List_Nil, text: 'Documents'}),
				QiTASC$hatchinq$Hatchinq$Tree$node(
				{
					children: _List_fromArray(
						[
							QiTASC$hatchinq$Hatchinq$Tree$node(
							{children: _List_Nil, text: 'qitasc.mp4'}),
							QiTASC$hatchinq$Hatchinq$Tree$node(
							{
								children: _List_fromArray(
									[
										QiTASC$hatchinq$Hatchinq$Tree$node(
										{children: _List_Nil, text: 'intro.mp4'})
									]),
								text: 'Tutorials'
							})
						]),
					text: 'Videos'
				}),
				QiTASC$hatchinq$Hatchinq$Tree$node(
				{children: _List_Nil, text: 'Projects'})
			]);
		return A2(
			mdgriffith$elm_ui$Element$column,
			_List_fromArray(
				[
					mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
					mdgriffith$elm_ui$Element$height(mdgriffith$elm_ui$Element$fill),
					A2(mdgriffith$elm_ui$Element$paddingXY, 0, 8),
					mdgriffith$elm_ui$Element$spacing(8)
				]),
			_List_fromArray(
				[
					A2(
					mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[
							mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
							mdgriffith$elm_ui$Element$Border$width(1),
							mdgriffith$elm_ui$Element$Border$color(QiTASC$hatchinq$Examples$theme.colors.gray.light)
						]),
					A2(
						QiTASC$hatchinq$Examples$tree,
						_List_Nil,
						{data: data, state: model.filesTreeState})),
					A2(
					mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[
							mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
							mdgriffith$elm_ui$Element$Border$width(1),
							mdgriffith$elm_ui$Element$Border$color(QiTASC$hatchinq$Examples$theme.colors.gray.light)
						]),
					A2(
						QiTASC$hatchinq$Examples$denseTree,
						_List_Nil,
						{data: data, state: model.filesTreeState}))
				]));
	});
var elm$core$Array$fromListHelp = F3(
	function (list, nodeList, nodeListSize) {
		fromListHelp:
		while (true) {
			var _n0 = A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, list);
			var jsArray = _n0.a;
			var remainingItems = _n0.b;
			if (_Utils_cmp(
				elm$core$Elm$JsArray$length(jsArray),
				elm$core$Array$branchFactor) < 0) {
				return A2(
					elm$core$Array$builderToArray,
					true,
					{nodeList: nodeList, nodeListSize: nodeListSize, tail: jsArray});
			} else {
				var $temp$list = remainingItems,
					$temp$nodeList = A2(
					elm$core$List$cons,
					elm$core$Array$Leaf(jsArray),
					nodeList),
					$temp$nodeListSize = nodeListSize + 1;
				list = $temp$list;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue fromListHelp;
			}
		}
	});
var elm$core$Array$fromList = function (list) {
	if (!list.b) {
		return elm$core$Array$empty;
	} else {
		return A3(elm$core$Array$fromListHelp, list, _List_Nil, 0);
	}
};
var elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var elm$core$Array$bitMask = 4294967295 >>> (32 - elm$core$Array$shiftStep);
var elm$core$Elm$JsArray$unsafeGet = _JsArray_unsafeGet;
var elm$core$Array$getHelp = F3(
	function (shift, index, tree) {
		getHelp:
		while (true) {
			var pos = elm$core$Array$bitMask & (index >>> shift);
			var _n0 = A2(elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (_n0.$ === 'SubTree') {
				var subTree = _n0.a;
				var $temp$shift = shift - elm$core$Array$shiftStep,
					$temp$index = index,
					$temp$tree = subTree;
				shift = $temp$shift;
				index = $temp$index;
				tree = $temp$tree;
				continue getHelp;
			} else {
				var values = _n0.a;
				return A2(elm$core$Elm$JsArray$unsafeGet, elm$core$Array$bitMask & index, values);
			}
		}
	});
var elm$core$Array$tailIndex = function (len) {
	return (len >>> 5) << 5;
};
var elm$core$Array$get = F2(
	function (index, _n0) {
		var len = _n0.a;
		var startShift = _n0.b;
		var tree = _n0.c;
		var tail = _n0.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? elm$core$Maybe$Nothing : ((_Utils_cmp(
			index,
			elm$core$Array$tailIndex(len)) > -1) ? elm$core$Maybe$Just(
			A2(elm$core$Elm$JsArray$unsafeGet, elm$core$Array$bitMask & index, tail)) : elm$core$Maybe$Just(
			A3(elm$core$Array$getHelp, startShift, index, tree)));
	});
var QiTASC$hatchinq$Hatchinq$SidePanel$containerView = function (v) {
	return _Utils_eq(v.state.openedContainerId, -1) ? mdgriffith$elm_ui$Element$none : A2(
		elm$core$Maybe$withDefault,
		mdgriffith$elm_ui$Element$none,
		A2(
			elm$core$Maybe$map,
			function (btn) {
				return btn.containerContent(_Utils_Tuple0);
			},
			A2(
				elm$core$Array$get,
				v.state.openedContainerId,
				elm$core$Array$fromList(v.buttons))));
};
var QiTASC$hatchinq$Hatchinq$SidePanel$dragHandleWidth = 8;
var QiTASC$hatchinq$Hatchinq$SidePanel$onMouseDownNoBubble = function (msg) {
	return A2(
		elm$html$Html$Events$custom,
		'mousedown',
		elm$json$Json$Decode$succeed(
			{message: msg, preventDefault: true, stopPropagation: true}));
};
var mdgriffith$elm_ui$Internal$Model$InFront = {$: 'InFront'};
var mdgriffith$elm_ui$Element$inFront = function (element) {
	return A2(mdgriffith$elm_ui$Element$createNearby, mdgriffith$elm_ui$Internal$Model$InFront, element);
};
var mdgriffith$elm_ui$Internal$Flag$moveX = mdgriffith$elm_ui$Internal$Flag$flag(25);
var mdgriffith$elm_ui$Internal$Model$MoveX = function (a) {
	return {$: 'MoveX', a: a};
};
var mdgriffith$elm_ui$Element$moveLeft = function (x) {
	return A2(
		mdgriffith$elm_ui$Internal$Model$TransformComponent,
		mdgriffith$elm_ui$Internal$Flag$moveX,
		mdgriffith$elm_ui$Internal$Model$MoveX(-x));
};
var QiTASC$hatchinq$Hatchinq$SidePanel$dragHandle = F2(
	function (config, state) {
		var overlayWidth = 100;
		var activeDragOverlay = state.beingDragged ? A2(
			mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[
					mdgriffith$elm_ui$Element$width(
					mdgriffith$elm_ui$Element$px(overlayWidth)),
					mdgriffith$elm_ui$Element$moveLeft(overlayWidth / 2),
					mdgriffith$elm_ui$Element$height(mdgriffith$elm_ui$Element$fill),
					mdgriffith$elm_ui$Element$htmlAttribute(
					A2(elm$html$Html$Attributes$style, 'cursor', 'col-resize')),
					mdgriffith$elm_ui$Element$htmlAttribute(
					A2(elm$html$Html$Attributes$style, 'z-index', '1000'))
				]),
			mdgriffith$elm_ui$Element$none) : mdgriffith$elm_ui$Element$none;
		var handleOverlay = A2(
			mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[
					mdgriffith$elm_ui$Element$htmlAttribute(
					QiTASC$hatchinq$Hatchinq$SidePanel$onMouseDownNoBubble(
						_Utils_update(
							state,
							{beingDragged: true}))),
					mdgriffith$elm_ui$Element$height(mdgriffith$elm_ui$Element$fill),
					mdgriffith$elm_ui$Element$width(
					mdgriffith$elm_ui$Element$px(QiTASC$hatchinq$Hatchinq$SidePanel$dragHandleWidth)),
					mdgriffith$elm_ui$Element$htmlAttribute(
					A2(elm$html$Html$Attributes$style, 'cursor', 'col-resize')),
					mdgriffith$elm_ui$Element$htmlAttribute(
					A2(elm$html$Html$Attributes$style, 'z-index', '900')),
					mdgriffith$elm_ui$Element$inFront(activeDragOverlay),
					mdgriffith$elm_ui$Element$centerX
				]),
			mdgriffith$elm_ui$Element$none);
		return _Utils_eq(state.openedContainerId, -1) ? mdgriffith$elm_ui$Element$none : A2(
			mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[
					mdgriffith$elm_ui$Element$Background$color(config.theme.colors.gray.light),
					mdgriffith$elm_ui$Element$width(
					mdgriffith$elm_ui$Element$px(1)),
					mdgriffith$elm_ui$Element$height(mdgriffith$elm_ui$Element$fill),
					mdgriffith$elm_ui$Element$centerX,
					mdgriffith$elm_ui$Element$inFront(handleOverlay)
				]),
			mdgriffith$elm_ui$Element$none);
	});
var QiTASC$hatchinq$Hatchinq$SidePanel$offsetMultiplier = function (config) {
	return _Utils_eq(config.orientation, QiTASC$hatchinq$Hatchinq$SidePanel$LeftHand) ? 1 : (-1);
};
var QiTASC$hatchinq$Hatchinq$SidePanel$initialOpenPanelWidth = 300;
var QiTASC$hatchinq$Hatchinq$SidePanel$stateFromSelectionChanged = F2(
	function (index, state) {
		var newContainerWidths = A3(elm$core$Dict$insert, state.openedContainerId, state.containerWidth, state.containerWidths);
		var containerWidth = A2(
			elm$core$Maybe$withDefault,
			QiTASC$hatchinq$Hatchinq$SidePanel$initialOpenPanelWidth,
			A2(elm$core$Dict$get, index, state.containerWidths));
		return _Utils_eq(index, state.openedContainerId) ? _Utils_update(
			state,
			{containerWidth: 0, containerWidths: newContainerWidths, openedContainerId: -1}) : _Utils_update(
			state,
			{containerWidth: containerWidth, containerWidths: newContainerWidths, openedContainerId: index});
	});
var QiTASC$hatchinq$Hatchinq$Theme$transparent = QiTASC$hatchinq$Hatchinq$Color$toElement(
	A4(QiTASC$hatchinq$Hatchinq$Color$rgba, 0, 0, 0, 0));
var elm$core$Basics$pi = _Basics_pi;
var mdgriffith$elm_ui$Internal$Flag$rotate = mdgriffith$elm_ui$Internal$Flag$flag(24);
var mdgriffith$elm_ui$Internal$Model$Rotate = F2(
	function (a, b) {
		return {$: 'Rotate', a: a, b: b};
	});
var mdgriffith$elm_ui$Element$rotate = function (angle) {
	return A2(
		mdgriffith$elm_ui$Internal$Model$TransformComponent,
		mdgriffith$elm_ui$Internal$Flag$rotate,
		A2(
			mdgriffith$elm_ui$Internal$Model$Rotate,
			_Utils_Tuple3(0, 0, 1),
			angle));
};
var QiTASC$hatchinq$Hatchinq$SidePanel$toSidePanelButton = F4(
	function (index, btn, state, config) {
		var backgroundColor = _Utils_eq(state.openedContainerId, index) ? config.theme.colors.gray.light : QiTASC$hatchinq$Hatchinq$Theme$transparent;
		return A2(
			mdgriffith$elm_ui$Element$row,
			_Utils_ap(
				_List_fromArray(
					[
						mdgriffith$elm_ui$Element$paddingEach(
						{bottom: 4, left: 4, right: 12, top: 4}),
						mdgriffith$elm_ui$Element$Events$onClick(
						A2(QiTASC$hatchinq$Hatchinq$SidePanel$stateFromSelectionChanged, index, state)),
						mdgriffith$elm_ui$Element$Background$color(backgroundColor),
						_Utils_eq(config.orientation, QiTASC$hatchinq$Hatchinq$SidePanel$LeftHand) ? mdgriffith$elm_ui$Element$rotate(elm$core$Basics$pi) : mdgriffith$elm_ui$Element$rotate(0)
					]),
				A2(
					elm$core$Maybe$withDefault,
					_List_Nil,
					A2(
						elm$core$Maybe$map,
						function (id) {
							return _List_fromArray(
								[
									mdgriffith$elm_ui$Element$htmlAttribute(
									elm$html$Html$Attributes$id(id))
								]);
						},
						btn.id))),
			_List_fromArray(
				[
					A2(
					mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[
							mdgriffith$elm_ui$Element$centerX,
							mdgriffith$elm_ui$Element$centerY,
							mdgriffith$elm_ui$Element$rotate(
							(elm$core$Basics$pi / 2) * QiTASC$hatchinq$Hatchinq$SidePanel$offsetMultiplier(config)),
							A2(mdgriffith$elm_ui$Element$paddingXY, 4, 0),
							mdgriffith$elm_ui$Element$Font$color(config.theme.colors.primary.light)
						]),
					mdgriffith$elm_ui$Element$html(
						A2(
							elm$html$Html$i,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('material-icons')
								]),
							_List_fromArray(
								[
									elm$html$Html$text(btn.icon)
								])))),
					mdgriffith$elm_ui$Element$text(btn.title)
				]));
	});
var mdgriffith$elm_ui$Element$clip = A2(mdgriffith$elm_ui$Internal$Model$Class, mdgriffith$elm_ui$Internal$Flag$overflow, mdgriffith$elm_ui$Internal$Style$classes.clip);
var mdgriffith$elm_ui$Internal$Model$Max = F2(
	function (a, b) {
		return {$: 'Max', a: a, b: b};
	});
var mdgriffith$elm_ui$Element$maximum = F2(
	function (i, l) {
		return A2(mdgriffith$elm_ui$Internal$Model$Max, i, l);
	});
var mdgriffith$elm_ui$Element$Border$widthXY = F2(
	function (x, y) {
		return A2(
			mdgriffith$elm_ui$Internal$Model$StyleClass,
			mdgriffith$elm_ui$Internal$Flag$borderWidth,
			A5(
				mdgriffith$elm_ui$Internal$Model$BorderWidth,
				'b-' + (elm$core$String$fromInt(x) + ('-' + elm$core$String$fromInt(y))),
				y,
				x,
				y,
				x));
	});
var mdgriffith$elm_ui$Element$Border$widthEach = function (_n0) {
	var bottom = _n0.bottom;
	var top = _n0.top;
	var left = _n0.left;
	var right = _n0.right;
	return (_Utils_eq(top, bottom) && _Utils_eq(left, right)) ? (_Utils_eq(top, right) ? mdgriffith$elm_ui$Element$Border$width(top) : A2(mdgriffith$elm_ui$Element$Border$widthXY, left, top)) : A2(
		mdgriffith$elm_ui$Internal$Model$StyleClass,
		mdgriffith$elm_ui$Internal$Flag$borderWidth,
		A5(
			mdgriffith$elm_ui$Internal$Model$BorderWidth,
			'b-' + (elm$core$String$fromInt(top) + ('-' + (elm$core$String$fromInt(right) + ('-' + (elm$core$String$fromInt(bottom) + ('-' + elm$core$String$fromInt(left))))))),
			top,
			right,
			bottom,
			left));
};
var QiTASC$hatchinq$Hatchinq$SidePanel$sidebarButtons = F2(
	function (config, v) {
		var sideBarHeight = v.state.windowSize.height - v.topPageOffset;
		var buttons = A2(
			elm$core$List$indexedMap,
			F2(
				function (index, button) {
					return A4(QiTASC$hatchinq$Hatchinq$SidePanel$toSidePanelButton, index, button, v.state, config);
				}),
			v.buttons);
		var border = _Utils_eq(config.orientation, QiTASC$hatchinq$Hatchinq$SidePanel$LeftHand) ? mdgriffith$elm_ui$Element$Border$widthEach(
			{bottom: 0, left: 0, right: 1, top: 0}) : mdgriffith$elm_ui$Element$Border$widthEach(
			{bottom: 0, left: 1, right: 0, top: 0});
		return A2(
			mdgriffith$elm_ui$Element$column,
			_List_fromArray(
				[
					mdgriffith$elm_ui$Element$width(
					mdgriffith$elm_ui$Element$px(QiTASC$hatchinq$Hatchinq$SidePanel$closedSidePanelWidth)),
					mdgriffith$elm_ui$Element$height(
					mdgriffith$elm_ui$Element$px(sideBarHeight)),
					mdgriffith$elm_ui$Element$Background$color(config.theme.colors.gray.lightest),
					mdgriffith$elm_ui$Element$Font$color(config.theme.colors.gray.dark),
					mdgriffith$elm_ui$Element$alignTop,
					border,
					mdgriffith$elm_ui$Element$Border$color(config.theme.colors.gray.light)
				]),
			_List_fromArray(
				[
					A2(
					mdgriffith$elm_ui$Element$row,
					_List_fromArray(
						[
							mdgriffith$elm_ui$Element$pointer,
							mdgriffith$elm_ui$Element$htmlAttribute(
							A2(elm$html$Html$Attributes$style, 'user-select', 'none')),
							mdgriffith$elm_ui$Element$width(
							A2(mdgriffith$elm_ui$Element$maximum, sideBarHeight, mdgriffith$elm_ui$Element$shrink)),
							mdgriffith$elm_ui$Element$clip,
							mdgriffith$elm_ui$Element$htmlAttribute(
							A2(elm$html$Html$Attributes$style, 'transform-origin', '0% 100%')),
							mdgriffith$elm_ui$Element$htmlAttribute(
							A2(elm$html$Html$Attributes$style, 'transform', 'translateY(-100%) rotate(90deg)'))
						]),
					buttons)
				]));
	});
var QiTASC$hatchinq$Hatchinq$SidePanel$view = F3(
	function (config, source, v) {
		var defaultInternalConfig = {elevate: false, minWidth: elm$core$Maybe$Nothing};
		var internalConfig = A2(QiTASC$hatchinq$Hatchinq$Attribute$toInternalConfig, source, defaultInternalConfig);
		var widthPx = function () {
			if (!_Utils_eq(v.state.openedContainerId, -1)) {
				var _n1 = internalConfig.minWidth;
				if (_n1.$ === 'Just') {
					var m = _n1.a;
					return A2(elm$core$Basics$max, m, v.state.containerWidth);
				} else {
					return v.state.containerWidth;
				}
			} else {
				return 0;
			}
		}();
		var containerShadow = ((!_Utils_eq(v.state.openedContainerId, -1)) && internalConfig.elevate) ? _List_fromArray(
			[
				mdgriffith$elm_ui$Element$Border$shadow(
				{
					blur: 2,
					color: config.theme.colors.gray.light,
					offset: _Utils_Tuple2(
						1 * QiTASC$hatchinq$Hatchinq$SidePanel$offsetMultiplier(config),
						0),
					size: 1
				})
			]) : _List_Nil;
		var container = A2(
			mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[
					mdgriffith$elm_ui$Element$width(
					mdgriffith$elm_ui$Element$px(widthPx)),
					mdgriffith$elm_ui$Element$height(
					mdgriffith$elm_ui$Element$px(v.state.windowSize.height - v.topPageOffset)),
					mdgriffith$elm_ui$Element$scrollbars
				]),
			QiTASC$hatchinq$Hatchinq$SidePanel$containerView(v));
		var _n0 = config;
		var theme = _n0.theme;
		var lift = _n0.lift;
		var orientation = _n0.orientation;
		var dragHandleElement = A2(
			mdgriffith$elm_ui$Element$map,
			lift,
			A2(QiTASC$hatchinq$Hatchinq$SidePanel$dragHandle, config, v.state));
		var sideBarButtons = A2(
			mdgriffith$elm_ui$Element$map,
			lift,
			A2(QiTASC$hatchinq$Hatchinq$SidePanel$sidebarButtons, config, v));
		return A2(
			mdgriffith$elm_ui$Element$row,
			A2(
				elm$core$List$cons,
				mdgriffith$elm_ui$Element$height(mdgriffith$elm_ui$Element$fill),
				A2(
					elm$core$List$cons,
					mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$shrink),
					A2(
						elm$core$List$cons,
						mdgriffith$elm_ui$Element$Font$family(
							_List_fromArray(
								[config.theme.font.main])),
						A2(
							elm$core$List$cons,
							mdgriffith$elm_ui$Element$Font$size(16),
							_Utils_ap(
								containerShadow,
								QiTASC$hatchinq$Hatchinq$Attribute$toElement(source)))))),
			_Utils_eq(orientation, QiTASC$hatchinq$Hatchinq$SidePanel$LeftHand) ? _List_fromArray(
				[sideBarButtons, container, dragHandleElement]) : _List_fromArray(
				[dragHandleElement, container, sideBarButtons]));
	});
var QiTASC$hatchinq$Hatchinq$SidePanel$configure = function (config) {
	return QiTASC$hatchinq$Hatchinq$SidePanel$view(config);
};
var QiTASC$hatchinq$Examples$leftSidePanel = A2(QiTASC$hatchinq$Hatchinq$SidePanel$configure, QiTASC$hatchinq$Examples$leftPanelConfig, _List_Nil);
var QiTASC$hatchinq$Examples$CheckboxValueChange = function (a) {
	return {$: 'CheckboxValueChange', a: a};
};
var QiTASC$hatchinq$Examples$CustomTab = {$: 'CustomTab'};
var QiTASC$hatchinq$Examples$DataTableExpansionChange = F2(
	function (a, b) {
		return {$: 'DataTableExpansionChange', a: a, b: b};
	});
var QiTASC$hatchinq$Examples$DataTableSelectionChange = F2(
	function (a, b) {
		return {$: 'DataTableSelectionChange', a: a, b: b};
	});
var QiTASC$hatchinq$Examples$DataTableSortChange = F2(
	function (a, b) {
		return {$: 'DataTableSortChange', a: a, b: b};
	});
var QiTASC$hatchinq$Examples$Default = {$: 'Default'};
var QiTASC$hatchinq$Examples$Disabled = {$: 'Disabled'};
var QiTASC$hatchinq$Examples$DropdownValueChange = F2(
	function (a, b) {
		return {$: 'DropdownValueChange', a: a, b: b};
	});
var QiTASC$hatchinq$Examples$FirstInputField = {$: 'FirstInputField'};
var QiTASC$hatchinq$Examples$FirstMultiline = {$: 'FirstMultiline'};
var QiTASC$hatchinq$Examples$FullWidth = {$: 'FullWidth'};
var QiTASC$hatchinq$Examples$InputChange = F2(
	function (a, b) {
		return {$: 'InputChange', a: a, b: b};
	});
var QiTASC$hatchinq$Examples$ListValueChange = F2(
	function (a, b) {
		return {$: 'ListValueChange', a: a, b: b};
	});
var QiTASC$hatchinq$Examples$LoadPeople = function (a) {
	return {$: 'LoadPeople', a: a};
};
var QiTASC$hatchinq$Examples$NoOp = {$: 'NoOp'};
var QiTASC$hatchinq$Examples$SecondInputField = {$: 'SecondInputField'};
var QiTASC$hatchinq$Examples$SecondMultiline = {$: 'SecondMultiline'};
var QiTASC$hatchinq$Examples$SettingsTab = {$: 'SettingsTab'};
var QiTASC$hatchinq$Examples$Simple = {$: 'Simple'};
var QiTASC$hatchinq$Examples$SnackbarAlert = function (a) {
	return {$: 'SnackbarAlert', a: a};
};
var QiTASC$hatchinq$Examples$TabBarSelect = function (a) {
	return {$: 'TabBarSelect', a: a};
};
var QiTASC$hatchinq$Examples$WithImagesAndSecondaryTextAndSelectable = {$: 'WithImagesAndSecondaryTextAndSelectable'};
var QiTASC$hatchinq$Examples$WithImagesAndSelectable = {$: 'WithImagesAndSelectable'};
var QiTASC$hatchinq$Examples$WithSecondaryText = {$: 'WithSecondaryText'};
var QiTASC$hatchinq$Hatchinq$Card$MediaCenter = {$: 'MediaCenter'};
var QiTASC$hatchinq$Hatchinq$Card$ToggleExpanded = {$: 'ToggleExpanded'};
var elm$html$Html$img = _VirtualDom_node('img');
var elm$html$Html$Attributes$alt = elm$html$Html$Attributes$stringProperty('alt');
var elm$html$Html$Attributes$height = function (n) {
	return A2(
		_VirtualDom_attribute,
		'height',
		elm$core$String$fromInt(n));
};
var elm$html$Html$Attributes$src = function (url) {
	return A2(
		elm$html$Html$Attributes$stringProperty,
		'src',
		_VirtualDom_noJavaScriptOrHtmlUri(url));
};
var elm$html$Html$Attributes$width = function (n) {
	return A2(
		_VirtualDom_attribute,
		'width',
		elm$core$String$fromInt(n));
};
var QiTASC$hatchinq$Hatchinq$Common$roundImage = function (src) {
	return A2(
		mdgriffith$elm_ui$Element$el,
		_List_fromArray(
			[
				mdgriffith$elm_ui$Element$centerY,
				A2(mdgriffith$elm_ui$Element$paddingXY, 16, 0)
			]),
		mdgriffith$elm_ui$Element$html(
			A2(
				elm$html$Html$img,
				_List_fromArray(
					[
						elm$html$Html$Attributes$src(src),
						elm$html$Html$Attributes$alt(''),
						elm$html$Html$Attributes$width(40),
						elm$html$Html$Attributes$height(40),
						A2(elm$html$Html$Attributes$style, 'border-radius', '50%'),
						A2(elm$html$Html$Attributes$style, 'object-fit', 'cover')
					]),
				_List_Nil)));
};
var elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2(elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var elm$core$List$takeTailRec = F2(
	function (n, list) {
		return elm$core$List$reverse(
			A3(elm$core$List$takeReverse, n, list, _List_Nil));
	});
var elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _n0 = _Utils_Tuple2(n, list);
			_n0$1:
			while (true) {
				_n0$5:
				while (true) {
					if (!_n0.b.b) {
						return list;
					} else {
						if (_n0.b.b.b) {
							switch (_n0.a) {
								case 1:
									break _n0$1;
								case 2:
									var _n2 = _n0.b;
									var x = _n2.a;
									var _n3 = _n2.b;
									var y = _n3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_n0.b.b.b.b) {
										var _n4 = _n0.b;
										var x = _n4.a;
										var _n5 = _n4.b;
										var y = _n5.a;
										var _n6 = _n5.b;
										var z = _n6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _n0$5;
									}
								default:
									if (_n0.b.b.b.b && _n0.b.b.b.b.b) {
										var _n7 = _n0.b;
										var x = _n7.a;
										var _n8 = _n7.b;
										var y = _n8.a;
										var _n9 = _n8.b;
										var z = _n9.a;
										var _n10 = _n9.b;
										var w = _n10.a;
										var tl = _n10.b;
										return (ctr > 1000) ? A2(
											elm$core$List$cons,
											x,
											A2(
												elm$core$List$cons,
												y,
												A2(
													elm$core$List$cons,
													z,
													A2(
														elm$core$List$cons,
														w,
														A2(elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											elm$core$List$cons,
											x,
											A2(
												elm$core$List$cons,
												y,
												A2(
													elm$core$List$cons,
													z,
													A2(
														elm$core$List$cons,
														w,
														A3(elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _n0$5;
									}
							}
						} else {
							if (_n0.a === 1) {
								break _n0$1;
							} else {
								break _n0$5;
							}
						}
					}
				}
				return list;
			}
			var _n1 = _n0.b;
			var x = _n1.a;
			return _List_fromArray(
				[x]);
		}
	});
var elm$core$List$take = F2(
	function (n, list) {
		return A3(elm$core$List$takeFast, 0, n, list);
	});
var QiTASC$hatchinq$Hatchinq$Util$takeFirstNLines = F2(
	function (text, numLines) {
		return A2(
			elm$core$String$join,
			'\n',
			A2(
				elm$core$List$take,
				numLines,
				A2(elm$core$String$split, '\n', text)));
	});
var mdgriffith$elm_ui$Element$Font$semiBold = A2(mdgriffith$elm_ui$Internal$Model$Class, mdgriffith$elm_ui$Internal$Flag$fontWeight, mdgriffith$elm_ui$Internal$Style$classes.textSemiBold);
var QiTASC$hatchinq$Hatchinq$Card$view = F3(
	function (_n0, attributes, _n1) {
		var theme = _n0.theme;
		var lift = _n0.lift;
		var media = _n1.media;
		var titles = _n1.titles;
		var thumbnail = _n1.thumbnail;
		var content = _n1.content;
		var actions = _n1.actions;
		var state = _n1.state;
		var toggleContentButton = A3(
			QiTASC$hatchinq$Hatchinq$IconButton$configure,
			{theme: theme},
			_List_Nil,
			{
				icon: state.contentExpanded ? 'expand_less' : 'expand_more',
				onPress: elm$core$Maybe$Just(
					lift(QiTASC$hatchinq$Hatchinq$Card$ToggleExpanded))
			});
		var mediaRow = A2(
			mdgriffith$elm_ui$Element$row,
			_List_fromArray(
				[
					mdgriffith$elm_ui$Element$htmlAttribute(
					A2(elm$html$Html$Attributes$style, 'overflow', 'hidden')),
					mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
					mdgriffith$elm_ui$Element$height(
					A2(mdgriffith$elm_ui$Element$maximum, 194, mdgriffith$elm_ui$Element$fill)),
					mdgriffith$elm_ui$Element$centerX,
					mdgriffith$elm_ui$Element$centerY
				]),
			_List_fromArray(
				[media]));
		var imageOrIcon = function () {
			if (thumbnail.$ === 'Image') {
				var url = thumbnail.a;
				return QiTASC$hatchinq$Hatchinq$Common$roundImage(url);
			} else {
				var url = thumbnail.a;
				return A2(
					mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[
							mdgriffith$elm_ui$Element$width(
							mdgriffith$elm_ui$Element$px(40)),
							mdgriffith$elm_ui$Element$height(
							mdgriffith$elm_ui$Element$px(40)),
							A2(mdgriffith$elm_ui$Element$paddingXY, 26, 0)
						]),
					A2(
						mdgriffith$elm_ui$Element$el,
						_List_fromArray(
							[mdgriffith$elm_ui$Element$centerX, mdgriffith$elm_ui$Element$centerY]),
						QiTASC$hatchinq$Hatchinq$Theme$icon(url)));
			}
		}();
		var headers = A2(
			mdgriffith$elm_ui$Element$column,
			_List_fromArray(
				[
					mdgriffith$elm_ui$Element$paddingEach(
					{bottom: 2, left: 0, right: 8, top: 2}),
					mdgriffith$elm_ui$Element$Font$family(
					_List_fromArray(
						[theme.font.main])),
					mdgriffith$elm_ui$Element$Font$size(theme.font.defaultSize),
					mdgriffith$elm_ui$Element$Font$bold,
					mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
					mdgriffith$elm_ui$Element$height(mdgriffith$elm_ui$Element$shrink),
					mdgriffith$elm_ui$Element$centerY,
					mdgriffith$elm_ui$Element$htmlAttribute(
					A2(elm$html$Html$Attributes$style, 'display', 'inline-block')),
					mdgriffith$elm_ui$Element$htmlAttribute(
					A2(elm$html$Html$Attributes$style, 'overflow', 'hidden')),
					mdgriffith$elm_ui$Element$htmlAttribute(
					A2(elm$html$Html$Attributes$style, 'text-overflow', 'ellipsis'))
				]),
			_List_fromArray(
				[
					mdgriffith$elm_ui$Element$html(
					elm$html$Html$text(
						_Utils_eq(titles.subHead, elm$core$Maybe$Nothing) ? A2(QiTASC$hatchinq$Hatchinq$Util$takeFirstNLines, titles.head, 2) : A2(QiTASC$hatchinq$Hatchinq$Util$takeFirstNLines, titles.head, 1))),
					function () {
					var _n4 = titles.subHead;
					if (_n4.$ === 'Nothing') {
						return mdgriffith$elm_ui$Element$none;
					} else {
						var subHead = _n4.a;
						return A2(
							mdgriffith$elm_ui$Element$el,
							_List_fromArray(
								[
									mdgriffith$elm_ui$Element$Font$size(theme.font.smallerSize),
									mdgriffith$elm_ui$Element$Font$color(theme.colors.gray.dark),
									mdgriffith$elm_ui$Element$Font$semiBold
								]),
							QiTASC$hatchinq$Hatchinq$Theme$textWithEllipsis(
								A2(QiTASC$hatchinq$Hatchinq$Util$takeFirstNLines, subHead, 2)));
					}
				}()
				]));
		var defaultWidth = 344;
		var defaultInternalConfig = {expandable: false, layout: QiTASC$hatchinq$Hatchinq$Card$MediaCenter};
		var internalConfig = A2(QiTASC$hatchinq$Hatchinq$Attribute$toInternalConfig, attributes, defaultInternalConfig);
		var defaultHeight = 382;
		var contentRow = A2(
			mdgriffith$elm_ui$Element$row,
			_Utils_ap(
				_List_fromArray(
					[
						mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
						mdgriffith$elm_ui$Element$htmlAttribute(
						A2(elm$html$Html$Attributes$style, 'overflow', 'auto')),
						mdgriffith$elm_ui$Element$htmlAttribute(
						A2(elm$html$Html$Attributes$style, 'will-change', 'max-height, opacity, padding')),
						mdgriffith$elm_ui$Element$htmlAttribute(
						A2(elm$html$Html$Attributes$style, 'transition', 'transform 0.25s, opacity 0.25s, max-height 0.25s, padding 0.25s'))
					]),
				((internalConfig.expandable && state.contentExpanded) || (!internalConfig.expandable)) ? _List_fromArray(
					[
						mdgriffith$elm_ui$Element$htmlAttribute(
						A2(elm$html$Html$Attributes$style, 'opacity', '1')),
						mdgriffith$elm_ui$Element$height(
						A2(mdgriffith$elm_ui$Element$maximum, 194, mdgriffith$elm_ui$Element$shrink))
					]) : _List_fromArray(
					[
						mdgriffith$elm_ui$Element$htmlAttribute(
						A2(elm$html$Html$Attributes$style, 'opacity', '0')),
						mdgriffith$elm_ui$Element$height(
						A2(mdgriffith$elm_ui$Element$maximum, 0, mdgriffith$elm_ui$Element$shrink))
					])),
			_List_fromArray(
				[
					A2(
					mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[
							mdgriffith$elm_ui$Element$paddingEach(
							{bottom: 16, left: 0, right: 0, top: 8}),
							mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
							mdgriffith$elm_ui$Element$height(mdgriffith$elm_ui$Element$fill)
						]),
					content)
				]));
		var actionsButtons = A2(
			elm$core$List$map,
			function (_n3) {
				var text = _n3.a;
				var action = _n3.b;
				return A3(
					QiTASC$hatchinq$Hatchinq$Button$configure,
					{theme: theme},
					_List_fromArray(
						[QiTASC$hatchinq$Hatchinq$Button$text]),
					{
						label: text,
						onPress: elm$core$Maybe$Just(action)
					});
			},
			actions);
		var buttonsRow = elm$core$List$isEmpty(actionsButtons) ? mdgriffith$elm_ui$Element$none : A2(
			mdgriffith$elm_ui$Element$row,
			_List_fromArray(
				[
					mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
					mdgriffith$elm_ui$Element$height(mdgriffith$elm_ui$Element$shrink),
					mdgriffith$elm_ui$Element$spacing(8),
					mdgriffith$elm_ui$Element$padding(8),
					mdgriffith$elm_ui$Element$htmlAttribute(
					A2(elm$html$Html$Attributes$style, 'overflow-x', 'auto'))
				]),
			actionsButtons);
		return A2(
			mdgriffith$elm_ui$Element$column,
			_Utils_ap(
				_List_fromArray(
					[
						mdgriffith$elm_ui$Element$centerX,
						mdgriffith$elm_ui$Element$centerY,
						mdgriffith$elm_ui$Element$Font$family(
						_List_fromArray(
							[theme.font.main])),
						mdgriffith$elm_ui$Element$Font$size(theme.font.defaultSize),
						mdgriffith$elm_ui$Element$width(
						A2(mdgriffith$elm_ui$Element$maximum, defaultWidth, mdgriffith$elm_ui$Element$fill)),
						mdgriffith$elm_ui$Element$height(mdgriffith$elm_ui$Element$shrink),
						mdgriffith$elm_ui$Element$htmlAttribute(
						A2(elm$html$Html$Attributes$style, 'overflow', 'hidden')),
						mdgriffith$elm_ui$Element$Border$color(theme.colors.gray.lightest),
						mdgriffith$elm_ui$Element$Border$shadow(
						{
							blur: 3,
							color: A4(mdgriffith$elm_ui$Element$rgba255, 140, 140, 140, 0.58),
							offset: _Utils_Tuple2(0, 0),
							size: 0
						}),
						mdgriffith$elm_ui$Element$mouseOver(
						_List_fromArray(
							[
								mdgriffith$elm_ui$Element$Background$color(theme.colors.gray.lightest),
								mdgriffith$elm_ui$Element$Border$shadow(
								{
									blur: 4,
									color: A4(mdgriffith$elm_ui$Element$rgba255, 140, 140, 140, 0.58),
									offset: _Utils_Tuple2(0, 2),
									size: 2
								})
							])),
						mdgriffith$elm_ui$Element$Border$rounded(4),
						mdgriffith$elm_ui$Element$htmlAttribute(
						A2(elm$html$Html$Attributes$style, 'transition', 'box-shadow 0.1s'))
					]),
				QiTASC$hatchinq$Hatchinq$Attribute$toElement(attributes)),
			function () {
				var _n2 = internalConfig.layout;
				if (_n2.$ === 'MediaCenter') {
					return _List_fromArray(
						[
							A2(
							mdgriffith$elm_ui$Element$row,
							_List_fromArray(
								[
									mdgriffith$elm_ui$Element$width(
									A2(mdgriffith$elm_ui$Element$minimum, 344, mdgriffith$elm_ui$Element$fill)),
									mdgriffith$elm_ui$Element$height(
									A2(mdgriffith$elm_ui$Element$maximum, 80, mdgriffith$elm_ui$Element$shrink)),
									mdgriffith$elm_ui$Element$paddingEach(
									{bottom: 16, left: 0, right: 0, top: 16}),
									mdgriffith$elm_ui$Element$centerY
								]),
							_List_fromArray(
								[imageOrIcon, headers])),
							mediaRow,
							A2(
							mdgriffith$elm_ui$Element$row,
							_List_fromArray(
								[
									mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
									mdgriffith$elm_ui$Element$paddingEach(
									{bottom: 0, left: 16, right: 16, top: 8})
								]),
							_List_fromArray(
								[contentRow])),
							A2(
							mdgriffith$elm_ui$Element$row,
							_List_fromArray(
								[
									mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill)
								]),
							_List_fromArray(
								[
									buttonsRow,
									internalConfig.expandable ? A2(
									mdgriffith$elm_ui$Element$el,
									_List_fromArray(
										[
											A2(mdgriffith$elm_ui$Element$paddingXY, 8, 8),
											mdgriffith$elm_ui$Element$alignRight
										]),
									toggleContentButton) : mdgriffith$elm_ui$Element$none
								]))
						]);
				} else {
					return _List_fromArray(
						[
							mediaRow,
							A2(
							mdgriffith$elm_ui$Element$row,
							_List_fromArray(
								[
									mdgriffith$elm_ui$Element$width(
									A2(mdgriffith$elm_ui$Element$minimum, 344, mdgriffith$elm_ui$Element$fill)),
									mdgriffith$elm_ui$Element$height(
									A2(mdgriffith$elm_ui$Element$maximum, 80, mdgriffith$elm_ui$Element$shrink)),
									mdgriffith$elm_ui$Element$paddingEach(
									{bottom: 8, left: 0, right: 0, top: 8}),
									mdgriffith$elm_ui$Element$centerY
								]),
							_List_fromArray(
								[
									imageOrIcon,
									headers,
									internalConfig.expandable ? A2(
									mdgriffith$elm_ui$Element$el,
									_List_fromArray(
										[
											A2(mdgriffith$elm_ui$Element$paddingXY, 8, 0)
										]),
									toggleContentButton) : mdgriffith$elm_ui$Element$none
								])),
							A2(
							mdgriffith$elm_ui$Element$row,
							_List_fromArray(
								[
									mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
									mdgriffith$elm_ui$Element$paddingEach(
									{bottom: 0, left: 16, right: 16, top: 0})
								]),
							_List_fromArray(
								[contentRow])),
							buttonsRow
						]);
				}
			}());
	});
var QiTASC$hatchinq$Hatchinq$Card$configure = function (config) {
	return QiTASC$hatchinq$Hatchinq$Card$view(config);
};
var QiTASC$hatchinq$Examples$card = QiTASC$hatchinq$Hatchinq$Card$configure(
	{lift: QiTASC$hatchinq$Examples$CardLift, theme: QiTASC$hatchinq$Examples$theme});
var elm$html$Html$input = _VirtualDom_node('input');
var elm$html$Html$Attributes$type_ = elm$html$Html$Attributes$stringProperty('type');
var QiTASC$hatchinq$Hatchinq$Checkbox$view = F3(
	function (_n0, attributes, data) {
		var theme = _n0.theme;
		var nativeCheckboxValueAttributes = function () {
			var _n6 = data.value;
			if (_n6.$ === 'Just') {
				if (_n6.a) {
					return _List_fromArray(
						[
							A2(elm$html$Html$Attributes$attribute, 'aria-checked', 'true')
						]);
				} else {
					return _List_fromArray(
						[
							A2(elm$html$Html$Attributes$attribute, 'aria-checked', 'false')
						]);
				}
			} else {
				return _List_fromArray(
					[
						A2(elm$html$Html$Attributes$attribute, 'aria-checked', 'mixed')
					]);
			}
		}();
		var keyEnterAttributes = function () {
			var _n5 = data.onChange;
			if (_n5.$ === 'Just') {
				var onChange = _n5.a;
				return _List_fromArray(
					[
						A2(
						QiTASC$hatchinq$Hatchinq$Util$keyDownAttribute,
						QiTASC$hatchinq$Hatchinq$Util$enterKeyCode,
						onChange(
							!A2(elm$core$Maybe$withDefault, false, data.value)))
					]);
			} else {
				return _List_Nil;
			}
		}();
		var icon = function () {
			var _n4 = data.value;
			if (_n4.$ === 'Just') {
				if (_n4.a) {
					return QiTASC$hatchinq$Hatchinq$Theme$icon('check_box');
				} else {
					return QiTASC$hatchinq$Hatchinq$Theme$icon('check_box_outline_blank');
				}
			} else {
				return QiTASC$hatchinq$Hatchinq$Theme$icon('indeterminate_check_box');
			}
		}();
		var elementAttributes = QiTASC$hatchinq$Hatchinq$Attribute$toElement(attributes);
		var disabled = _Utils_eq(data.onChange, elm$core$Maybe$Nothing);
		var defaultConfig = {stopPropagation: false};
		var internalConfig = A2(QiTASC$hatchinq$Hatchinq$Attribute$toInternalConfig, attributes, defaultConfig);
		var nativeCheckboxDisabledAttributes = function () {
			var _n3 = data.onChange;
			if (_n3.$ === 'Just') {
				var onChange = _n3.a;
				return _List_fromArray(
					[
						A2(
						elm$html$Html$Events$custom,
						'click',
						elm$json$Json$Decode$succeed(
							{
								message: onChange(
									!A2(elm$core$Maybe$withDefault, false, data.value)),
								preventDefault: false,
								stopPropagation: internalConfig.stopPropagation
							}))
					]);
			} else {
				return _List_fromArray(
					[
						elm$html$Html$Attributes$disabled(true)
					]);
			}
		}();
		var accentColorType = function () {
			var _n2 = data.value;
			if ((_n2.$ === 'Just') && (!_n2.a)) {
				return theme.colors.gray;
			} else {
				return theme.colors.secondary;
			}
		}();
		var styleAttributes = disabled ? _List_Nil : _List_fromArray(
			[
				mdgriffith$elm_ui$Element$focused(
				_List_fromArray(
					[
						mdgriffith$elm_ui$Element$Background$color(
						accentColorType.withAlpha(8.0e-2))
					])),
				mdgriffith$elm_ui$Element$mouseOver(
				_List_fromArray(
					[
						mdgriffith$elm_ui$Element$Background$color(
						accentColorType.withAlpha(4.0e-2))
					])),
				mdgriffith$elm_ui$Element$htmlAttribute(
				A2(elm$html$Html$Attributes$attribute, 'tabindex', '0')),
				mdgriffith$elm_ui$Element$pointer
			]);
		var accentColor = function () {
			var _n1 = data.value;
			if ((_n1.$ === 'Just') && (!_n1.a)) {
				return theme.colors.gray.dark;
			} else {
				return theme.colors.secondary.color;
			}
		}();
		return A2(
			mdgriffith$elm_ui$Element$el,
			_Utils_ap(
				_List_fromArray(
					[
						mdgriffith$elm_ui$Element$width(
						mdgriffith$elm_ui$Element$px(theme.sizes.minRowHeight - 8)),
						mdgriffith$elm_ui$Element$height(
						mdgriffith$elm_ui$Element$px(theme.sizes.minRowHeight - 8)),
						mdgriffith$elm_ui$Element$htmlAttribute(
						A2(elm$html$Html$Attributes$style, 'border-radius', '50%')),
						mdgriffith$elm_ui$Element$htmlAttribute(
						elm$html$Html$Attributes$class('ripple focusSecondaryRipple')),
						mdgriffith$elm_ui$Element$behindContent(
						A2(
							mdgriffith$elm_ui$Element$el,
							_List_fromArray(
								[
									mdgriffith$elm_ui$Element$centerX,
									mdgriffith$elm_ui$Element$centerY,
									mdgriffith$elm_ui$Element$Font$color(
									disabled ? theme.colors.gray.color : accentColor)
								]),
							icon))
					]),
				_Utils_ap(
					styleAttributes,
					_Utils_ap(elementAttributes, keyEnterAttributes))),
			mdgriffith$elm_ui$Element$html(
				A2(
					elm$html$Html$input,
					_Utils_ap(
						_List_fromArray(
							[
								elm$html$Html$Attributes$type_('checkbox'),
								A2(elm$html$Html$Attributes$style, 'width', '100%'),
								A2(elm$html$Html$Attributes$style, 'height', '100%'),
								A2(elm$html$Html$Attributes$style, 'opacity', '0'),
								A2(elm$html$Html$Attributes$style, 'padding', '0'),
								A2(elm$html$Html$Attributes$style, 'margin', '0'),
								A2(elm$html$Html$Attributes$style, 'position', 'absolute'),
								A2(elm$html$Html$Attributes$style, 'top', '0'),
								A2(elm$html$Html$Attributes$style, 'left', '0'),
								A2(elm$html$Html$Attributes$style, 'cursor', 'inherit'),
								A2(elm$html$Html$Attributes$attribute, 'tabindex', '-1')
							]),
						_Utils_ap(nativeCheckboxValueAttributes, nativeCheckboxDisabledAttributes)),
					_List_Nil)));
	});
var QiTASC$hatchinq$Hatchinq$Checkbox$configure = function (config) {
	return QiTASC$hatchinq$Hatchinq$Checkbox$view(config);
};
var QiTASC$hatchinq$Examples$checkbox = QiTASC$hatchinq$Hatchinq$Checkbox$configure(
	{theme: QiTASC$hatchinq$Examples$theme});
var QiTASC$hatchinq$Examples$DataTableChange = function (a) {
	return {$: 'DataTableChange', a: a};
};
var elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return elm$core$Maybe$Just(x);
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var QiTASC$hatchinq$Hatchinq$Attribute$toId = function (source) {
	return elm$core$List$head(
		elm$core$List$reverse(
			A2(
				elm$core$List$filterMap,
				function (a) {
					if (a.$ === 'Id') {
						var i = a.a;
						return elm$core$Maybe$Just(i);
					} else {
						return elm$core$Maybe$Nothing;
					}
				},
				source)));
};
var QiTASC$hatchinq$Hatchinq$Checkbox$stopPropagation = QiTASC$hatchinq$Hatchinq$Attribute$custom(
	function (v) {
		return _Utils_update(
			v,
			{stopPropagation: true});
	});
var QiTASC$hatchinq$Hatchinq$DataTable$NoOp = {$: 'NoOp'};
var QiTASC$hatchinq$Hatchinq$DataTable$Plain = {$: 'Plain'};
var QiTASC$hatchinq$Hatchinq$DataTable$Sort = F2(
	function (a, b) {
		return {$: 'Sort', a: a, b: b};
	});
var QiTASC$hatchinq$Hatchinq$DataTable$TableScroll = F5(
	function (a, b, c, d, e) {
		return {$: 'TableScroll', a: a, b: b, c: c, d: d, e: e};
	});
var QiTASC$hatchinq$Hatchinq$DataTable$ScrollPos = F3(
	function (scrollTop, contentHeight, containerHeight) {
		return {containerHeight: containerHeight, contentHeight: contentHeight, scrollTop: scrollTop};
	});
var elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3(elm$core$List$foldr, elm$json$Json$Decode$field, decoder, fields);
	});
var QiTASC$hatchinq$Hatchinq$DataTable$clientHeight = A2(
	elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'clientHeight']),
	elm$json$Json$Decode$int);
var QiTASC$hatchinq$Hatchinq$DataTable$offsetHeight = A2(
	elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'offsetHeight']),
	elm$json$Json$Decode$int);
var elm$json$Json$Decode$float = _Json_decodeFloat;
var elm$json$Json$Decode$map3 = _Json_map3;
var QiTASC$hatchinq$Hatchinq$DataTable$decodeScrollPos = A4(
	elm$json$Json$Decode$map3,
	QiTASC$hatchinq$Hatchinq$DataTable$ScrollPos,
	A2(
		elm$json$Json$Decode$at,
		_List_fromArray(
			['target', 'scrollTop']),
		elm$json$Json$Decode$float),
	A2(
		elm$json$Json$Decode$at,
		_List_fromArray(
			['target', 'scrollHeight']),
		elm$json$Json$Decode$int),
	A3(elm$json$Json$Decode$map2, elm$core$Basics$max, QiTASC$hatchinq$Hatchinq$DataTable$offsetHeight, QiTASC$hatchinq$Hatchinq$DataTable$clientHeight));
var elm$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			elm$core$List$any,
			A2(elm$core$Basics$composeL, elm$core$Basics$not, isOkay),
			list);
	});
var elm$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (n <= 0) {
				return result;
			} else {
				var $temp$result = A2(elm$core$List$cons, value, result),
					$temp$n = n - 1,
					$temp$value = value;
				result = $temp$result;
				n = $temp$n;
				value = $temp$value;
				continue repeatHelp;
			}
		}
	});
var elm$core$List$repeat = F2(
	function (n, value) {
		return A3(elm$core$List$repeatHelp, _List_Nil, n, value);
	});
var mdgriffith$elm_ui$Element$scrollbarY = A2(mdgriffith$elm_ui$Internal$Model$Class, mdgriffith$elm_ui$Internal$Flag$overflow, mdgriffith$elm_ui$Internal$Style$classes.scrollbarsY);
var elm$html$Html$Events$onMouseDown = function (msg) {
	return A2(
		elm$html$Html$Events$on,
		'mousedown',
		elm$json$Json$Decode$succeed(msg));
};
var mdgriffith$elm_ui$Element$Events$onMouseDown = A2(elm$core$Basics$composeL, mdgriffith$elm_ui$Internal$Model$Attr, elm$html$Html$Events$onMouseDown);
var QiTASC$hatchinq$Hatchinq$DataTable$view = F3(
	function (_n0, attributes, data) {
		var theme = _n0.theme;
		var lift = _n0.lift;
		var tableAttributes = _List_fromArray(
			[
				mdgriffith$elm_ui$Element$Font$family(
				_List_fromArray(
					[theme.font.main])),
				mdgriffith$elm_ui$Element$Font$size(14)
			]);
		var sorterFunc = function () {
			var _n23 = data.state.sort;
			switch (_n23.$) {
				case 'NoSort':
					return elm$core$Basics$identity;
				case 'Increasing':
					var sorter = _n23.b;
					return A2(elm$core$Maybe$withDefault, elm$core$Basics$identity, sorter);
				default:
					var sorter = _n23.b;
					return A2(elm$core$Maybe$withDefault, elm$core$Basics$identity, sorter);
			}
		}();
		var rowAttributes = _List_fromArray(
			[
				mdgriffith$elm_ui$Element$height(
				mdgriffith$elm_ui$Element$px(theme.sizes.table.rowHeight)),
				mdgriffith$elm_ui$Element$paddingEach(theme.sizes.table.rowPadding),
				mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill)
			]);
		var rowHeaderAttributes = _Utils_ap(
			rowAttributes,
			_List_fromArray(
				[
					mdgriffith$elm_ui$Element$Border$widthEach(
					{bottom: 1, left: 0, right: 0, top: 0}),
					mdgriffith$elm_ui$Element$Border$color(theme.colors.gray.lighter),
					mdgriffith$elm_ui$Element$Font$color(theme.colors.gray.dark)
				]));
		var items = sorterFunc(data.items);
		var extraItems = function (maybeCount) {
			return A2(
				elm$core$List$repeat,
				A2(elm$core$Maybe$withDefault, 0, maybeCount),
				A2(
					mdgriffith$elm_ui$Element$row,
					_Utils_ap(
						rowAttributes,
						_List_fromArray(
							[
								mdgriffith$elm_ui$Element$Border$widthEach(
								{bottom: 0, left: 0, right: 0, top: 1}),
								mdgriffith$elm_ui$Element$Border$color(theme.colors.gray.lighter),
								mdgriffith$elm_ui$Element$Background$color(theme.colors.gray.lightest)
							])),
					_List_Nil));
		};
		var expansionWidth = mdgriffith$elm_ui$Element$px(theme.sizes.table.rowHeight);
		var elementId = A2(
			elm$core$Maybe$withDefault,
			'',
			QiTASC$hatchinq$Hatchinq$Attribute$toId(attributes)) + '-internal-scroll';
		var elementAttributes = QiTASC$hatchinq$Hatchinq$Attribute$toElement(attributes);
		var defaultConfig = {dataTableType: QiTASC$hatchinq$Hatchinq$DataTable$Plain, expansion: elm$core$Maybe$Nothing, selection: elm$core$Maybe$Nothing};
		var internalConfig = A2(QiTASC$hatchinq$Hatchinq$Attribute$toInternalConfig, attributes, defaultConfig);
		var expansionColumn = function (it) {
			var _n21 = internalConfig.expansion;
			if (_n21.$ === 'Nothing') {
				return _List_Nil;
			} else {
				var _n22 = _n21.a;
				var expanded = _n22.a;
				var onExpansion = _n22.b;
				var expansionContent = _n22.c;
				return _List_fromArray(
					[
						A2(
						mdgriffith$elm_ui$Element$el,
						_Utils_ap(
							_List_fromArray(
								[
									mdgriffith$elm_ui$Element$width(expansionWidth),
									mdgriffith$elm_ui$Element$htmlAttribute(
									A2(elm$html$Html$Attributes$style, 'will-change', 'transform')),
									mdgriffith$elm_ui$Element$htmlAttribute(QiTASC$hatchinq$Hatchinq$Theme$arrowTransition)
								]),
							expanded(it) ? _List_fromArray(
								[
									mdgriffith$elm_ui$Element$htmlAttribute(
									A2(elm$html$Html$Attributes$style, 'transform', 'rotate(90deg)'))
								]) : _List_Nil),
						A2(
							mdgriffith$elm_ui$Element$el,
							_List_fromArray(
								[mdgriffith$elm_ui$Element$centerX, mdgriffith$elm_ui$Element$centerY]),
							A3(
								QiTASC$hatchinq$Hatchinq$IconButton$configure,
								{theme: theme},
								_List_Nil,
								{
									icon: 'arrow_right',
									onPress: elm$core$Maybe$Just(
										A2(
											onExpansion,
											it,
											!expanded(it)))
								})))
					]);
			}
		};
		var expansionHeader = function () {
			var _n20 = internalConfig.expansion;
			if (_n20.$ === 'Nothing') {
				return _List_Nil;
			} else {
				return _List_fromArray(
					[
						A2(
						mdgriffith$elm_ui$Element$el,
						_List_fromArray(
							[
								mdgriffith$elm_ui$Element$width(expansionWidth)
							]),
						mdgriffith$elm_ui$Element$none)
					]);
			}
		}();
		var itemAttributes = function (it) {
			var expansionAttr = function () {
				var _n16 = internalConfig.expansion;
				if (_n16.$ === 'Nothing') {
					var _n17 = internalConfig.selection;
					if (_n17.$ === 'Nothing') {
						return _List_Nil;
					} else {
						var _n18 = _n17.a;
						var selected = _n18.a;
						var onSelected = _n18.b;
						return _List_fromArray(
							[
								mdgriffith$elm_ui$Element$pointer,
								mdgriffith$elm_ui$Element$Events$onClick(
								A2(
									onSelected,
									it,
									!selected(it)))
							]);
					}
				} else {
					var _n19 = _n16.a;
					var expanded = _n19.a;
					var onExpansion = _n19.b;
					return _List_fromArray(
						[
							mdgriffith$elm_ui$Element$pointer,
							mdgriffith$elm_ui$Element$Events$onClick(
							A2(
								onExpansion,
								it,
								!expanded(it)))
						]);
				}
			}();
			return _Utils_ap(
				expansionAttr,
				_Utils_ap(
					function () {
						var _n14 = internalConfig.selection;
						if (_n14.$ === 'Nothing') {
							return _List_fromArray(
								[
									mdgriffith$elm_ui$Element$mouseOver(
									_List_fromArray(
										[
											mdgriffith$elm_ui$Element$Background$color(theme.colors.gray.lightest)
										]))
								]);
						} else {
							var _n15 = _n14.a;
							var selected = _n15.a;
							var onSelected = _n15.b;
							return _Utils_ap(
								_List_fromArray(
									[
										mdgriffith$elm_ui$Element$mouseDown(
										_List_fromArray(
											[
												mdgriffith$elm_ui$Element$Background$color(theme.colors.secondary.lighter)
											]))
									]),
								selected(it) ? _List_fromArray(
									[
										mdgriffith$elm_ui$Element$Background$color(theme.colors.secondary.lightest)
									]) : _List_fromArray(
									[
										mdgriffith$elm_ui$Element$mouseOver(
										_List_fromArray(
											[
												mdgriffith$elm_ui$Element$Background$color(theme.colors.gray.lightest)
											]))
									]));
						}
					}(),
					rowAttributes));
		};
		var scrollingAttribute = function () {
			var _n13 = internalConfig.dataTableType;
			if (_n13.$ === 'Infinite') {
				var infiniteView = _n13.a;
				return _List_fromArray(
					[
						mdgriffith$elm_ui$Element$htmlAttribute(
						A2(
							elm$html$Html$Events$on,
							'scroll',
							A2(
								elm$json$Json$Decode$map,
								A2(
									elm$core$Basics$composeL,
									lift,
									A4(
										QiTASC$hatchinq$Hatchinq$DataTable$TableScroll,
										lift(QiTASC$hatchinq$Hatchinq$DataTable$NoOp),
										theme.sizes.table.rowHeight,
										elementId,
										infiniteView)),
								QiTASC$hatchinq$Hatchinq$DataTable$decodeScrollPos)))
					]);
			} else {
				return _List_Nil;
			}
		}();
		var checkbox = A2(
			QiTASC$hatchinq$Hatchinq$Checkbox$configure,
			{theme: theme},
			_List_fromArray(
				[QiTASC$hatchinq$Hatchinq$Checkbox$stopPropagation]));
		var cellAttributes = _List_fromArray(
			[
				mdgriffith$elm_ui$Element$paddingEach(theme.sizes.table.cellPadding)
			]);
		var createHeader = F2(
			function (_n12, columnIndex) {
				var header = _n12.a.header;
				var width = _n12.a.width;
				var viewFunc = _n12.a.viewFunc;
				var sorter = _n12.a.sorter;
				var sortIcon = A2(
					mdgriffith$elm_ui$Element$el,
					_Utils_ap(
						_List_fromArray(
							[
								mdgriffith$elm_ui$Element$centerX,
								mdgriffith$elm_ui$Element$centerY,
								mdgriffith$elm_ui$Element$htmlAttribute(
								A2(elm$html$Html$Attributes$style, 'will-change', 'transform, opacity')),
								mdgriffith$elm_ui$Element$htmlAttribute(QiTASC$hatchinq$Hatchinq$Theme$arrowTransition)
							]),
						function () {
							var _n11 = data.state.sort;
							switch (_n11.$) {
								case 'Increasing':
									var index = _n11.a;
									return _Utils_eq(columnIndex, index) ? _List_Nil : _List_fromArray(
										[
											mdgriffith$elm_ui$Element$htmlAttribute(
											A2(elm$html$Html$Attributes$style, 'opacity', '0'))
										]);
								case 'Decreasing':
									var index = _n11.a;
									return _Utils_eq(columnIndex, index) ? _List_fromArray(
										[
											mdgriffith$elm_ui$Element$htmlAttribute(
											A2(elm$html$Html$Attributes$style, 'transform', 'rotate(180deg)'))
										]) : _List_fromArray(
										[
											mdgriffith$elm_ui$Element$htmlAttribute(
											A2(elm$html$Html$Attributes$style, 'opacity', '0'))
										]);
								default:
									return _List_fromArray(
										[
											mdgriffith$elm_ui$Element$htmlAttribute(
											A2(elm$html$Html$Attributes$style, 'opacity', '0'))
										]);
							}
						}()),
					QiTASC$hatchinq$Hatchinq$Theme$icon('expand_less'));
				return A2(
					mdgriffith$elm_ui$Element$el,
					_Utils_ap(
						_List_fromArray(
							[
								mdgriffith$elm_ui$Element$width(width)
							]),
						_Utils_ap(
							cellAttributes,
							function () {
								if (sorter.$ === 'Just') {
									var s = sorter.a;
									return _List_fromArray(
										[
											mdgriffith$elm_ui$Element$Events$onMouseDown(
											lift(
												A2(QiTASC$hatchinq$Hatchinq$DataTable$Sort, columnIndex, s))),
											mdgriffith$elm_ui$Element$Font$size(theme.font.smallerSize),
											mdgriffith$elm_ui$Element$mouseOver(
											_List_fromArray(
												[
													mdgriffith$elm_ui$Element$Font$color(QiTASC$hatchinq$Hatchinq$Theme$black)
												])),
											mdgriffith$elm_ui$Element$pointer
										]);
								} else {
									return _List_fromArray(
										[
											mdgriffith$elm_ui$Element$Font$size(theme.font.smallerSize)
										]);
								}
							}())),
					A2(
						mdgriffith$elm_ui$Element$row,
						_List_Nil,
						_List_fromArray(
							[header, sortIcon])));
			});
		var selectionColumn = function (it) {
			var _n8 = internalConfig.selection;
			if (_n8.$ === 'Nothing') {
				return _List_Nil;
			} else {
				var _n9 = _n8.a;
				var selected = _n9.a;
				var onSelected = _n9.b;
				var selectAll = _n9.c;
				return _List_fromArray(
					[
						A2(
						mdgriffith$elm_ui$Element$el,
						cellAttributes,
						checkbox(
							{
								onChange: elm$core$Maybe$Just(
									onSelected(it)),
								value: elm$core$Maybe$Just(
									selected(it))
							}))
					]);
			}
		};
		var selectionHeader = function () {
			var _n6 = internalConfig.selection;
			if (_n6.$ === 'Nothing') {
				return _List_Nil;
			} else {
				var _n7 = _n6.a;
				var selected = _n7.a;
				var onSelected = _n7.b;
				var selectAll = _n7.c;
				var checkboxValue = A2(elm$core$List$all, selected, data.items) ? elm$core$Maybe$Just(true) : ((!A2(elm$core$List$any, selected, data.items)) ? elm$core$Maybe$Just(false) : elm$core$Maybe$Nothing);
				return _List_fromArray(
					[
						A2(
						mdgriffith$elm_ui$Element$el,
						cellAttributes,
						checkbox(
							{
								onChange: elm$core$Maybe$Just(selectAll),
								value: checkboxValue
							}))
					]);
			}
		}();
		var _n1 = function () {
			var _n2 = internalConfig.dataTableType;
			if (_n2.$ === 'Infinite') {
				var infiniteView = _n2.a;
				return _Utils_Tuple2(
					extraItems(infiniteView.loadingTop),
					extraItems(infiniteView.loadingBottom));
			} else {
				return _Utils_Tuple2(_List_Nil, _List_Nil);
			}
		}();
		var extraItemsTop = _n1.a;
		var extraItemsBottom = _n1.b;
		var rowDisplay = F2(
			function (rowIndex, it) {
				var borderAttributes = ((!rowIndex) && elm$core$List$isEmpty(extraItemsTop)) ? _List_Nil : _List_fromArray(
					[
						mdgriffith$elm_ui$Element$Border$widthEach(
						{bottom: 0, left: 0, right: 0, top: 1}),
						mdgriffith$elm_ui$Element$Border$color(theme.colors.gray.lighter)
					]);
				return A2(
					mdgriffith$elm_ui$Element$row,
					_Utils_ap(
						itemAttributes(it),
						borderAttributes),
					_Utils_ap(
						expansionColumn(it),
						_Utils_ap(
							selectionColumn(it),
							A2(
								elm$core$List$indexedMap,
								F2(
									function (columnIndex, _n5) {
										var header = _n5.a.header;
										var width = _n5.a.width;
										var viewFunc = _n5.a.viewFunc;
										var sorter = _n5.a.sorter;
										return A2(
											mdgriffith$elm_ui$Element$el,
											_Utils_ap(
												_List_fromArray(
													[
														mdgriffith$elm_ui$Element$width(width)
													]),
												cellAttributes),
											A2(viewFunc, rowIndex, it));
									}),
								data.columns))));
			});
		var itemDisplay = F2(
			function (rowIndex, it) {
				var _n3 = internalConfig.expansion;
				if (_n3.$ === 'Nothing') {
					return A2(rowDisplay, rowIndex, it);
				} else {
					var _n4 = _n3.a;
					var expanded = _n4.a;
					var onExpansion = _n4.b;
					var expansionContent = _n4.c;
					return expanded(it) ? A2(
						mdgriffith$elm_ui$Element$column,
						_List_fromArray(
							[
								mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill)
							]),
						_List_fromArray(
							[
								A2(rowDisplay, rowIndex, it),
								A2(
								mdgriffith$elm_ui$Element$row,
								_List_fromArray(
									[
										mdgriffith$elm_ui$Element$paddingEach(theme.sizes.table.expansionPadding)
									]),
								_List_fromArray(
									[
										A2(
										mdgriffith$elm_ui$Element$el,
										_List_fromArray(
											[
												mdgriffith$elm_ui$Element$width(expansionWidth)
											]),
										mdgriffith$elm_ui$Element$none),
										expansionContent(it)
									]))
							])) : A2(
						mdgriffith$elm_ui$Element$column,
						_List_fromArray(
							[
								mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill)
							]),
						_List_fromArray(
							[
								A2(rowDisplay, rowIndex, it)
							]));
				}
			});
		return A2(
			mdgriffith$elm_ui$Element$column,
			_Utils_ap(tableAttributes, elementAttributes),
			_List_fromArray(
				[
					A2(
					mdgriffith$elm_ui$Element$row,
					rowHeaderAttributes,
					_Utils_ap(
						expansionHeader,
						_Utils_ap(
							selectionHeader,
							A2(
								elm$core$List$indexedMap,
								F2(
									function (columnIndex, headerColumn) {
										return A2(createHeader, headerColumn, columnIndex);
									}),
								data.columns)))),
					A2(
					mdgriffith$elm_ui$Element$el,
					_Utils_ap(
						scrollingAttribute,
						_List_fromArray(
							[
								mdgriffith$elm_ui$Element$scrollbarY,
								mdgriffith$elm_ui$Element$height(mdgriffith$elm_ui$Element$fill),
								mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
								mdgriffith$elm_ui$Element$htmlAttribute(
								elm$html$Html$Attributes$id(elementId))
							])),
					A2(
						mdgriffith$elm_ui$Element$column,
						_List_fromArray(
							[
								mdgriffith$elm_ui$Element$height(mdgriffith$elm_ui$Element$fill),
								mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill)
							]),
						_Utils_ap(
							extraItemsTop,
							_Utils_ap(
								A2(elm$core$List$indexedMap, itemDisplay, items),
								extraItemsBottom))))
				]));
	});
var QiTASC$hatchinq$Hatchinq$DataTable$configure = function (config) {
	return QiTASC$hatchinq$Hatchinq$DataTable$view(config);
};
var QiTASC$hatchinq$Examples$dataTable = QiTASC$hatchinq$Hatchinq$DataTable$configure(
	{lift: QiTASC$hatchinq$Examples$DataTableChange, theme: QiTASC$hatchinq$Examples$theme});
var QiTASC$hatchinq$Examples$denseDataTable = QiTASC$hatchinq$Hatchinq$DataTable$configure(
	{
		lift: QiTASC$hatchinq$Examples$DataTableChange,
		theme: QiTASC$hatchinq$Hatchinq$Theme$dense(QiTASC$hatchinq$Examples$theme)
	});
var QiTASC$hatchinq$Hatchinq$Divider$view = F2(
	function (_n0, source) {
		var theme = _n0.theme;
		var defaultConfig = {color: theme.colors.gray.color};
		var internalConfig = A2(QiTASC$hatchinq$Hatchinq$Attribute$toInternalConfig, source, defaultConfig);
		var attributes = QiTASC$hatchinq$Hatchinq$Attribute$toElement(source);
		return A2(
			mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[
					mdgriffith$elm_ui$Element$padding(8),
					mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill)
				]),
			A2(
				mdgriffith$elm_ui$Element$el,
				_Utils_ap(
					_List_fromArray(
						[
							mdgriffith$elm_ui$Element$height(
							mdgriffith$elm_ui$Element$px(2)),
							mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
							mdgriffith$elm_ui$Element$Background$color(internalConfig.color)
						]),
					attributes),
				mdgriffith$elm_ui$Element$none));
	});
var QiTASC$hatchinq$Hatchinq$Divider$configure = function (config) {
	return QiTASC$hatchinq$Hatchinq$Divider$view(config);
};
var QiTASC$hatchinq$Examples$divider = QiTASC$hatchinq$Hatchinq$Divider$configure(
	{theme: QiTASC$hatchinq$Examples$theme});
var QiTASC$hatchinq$Examples$DropdownStateChange = F2(
	function (a, b) {
		return {$: 'DropdownStateChange', a: a, b: b};
	});
var QiTASC$hatchinq$Hatchinq$Attribute$toWidth = function (source) {
	return elm$core$List$head(
		elm$core$List$reverse(
			A2(
				elm$core$List$filterMap,
				function (i) {
					if (i.$ === 'Width') {
						var l = i.a;
						return elm$core$Maybe$Just(l);
					} else {
						return elm$core$Maybe$Nothing;
					}
				},
				source)));
};
var QiTASC$hatchinq$Hatchinq$DropDown$ArrowDownPress = function (a) {
	return {$: 'ArrowDownPress', a: a};
};
var QiTASC$hatchinq$Hatchinq$DropDown$ArrowUpPress = function (a) {
	return {$: 'ArrowUpPress', a: a};
};
var QiTASC$hatchinq$Hatchinq$DropDown$CloseSelect = {$: 'CloseSelect'};
var QiTASC$hatchinq$Hatchinq$DropDown$Filled = {$: 'Filled'};
var QiTASC$hatchinq$Hatchinq$DropDown$Noop = {$: 'Noop'};
var QiTASC$hatchinq$Hatchinq$DropDown$OpenSelect = function (a) {
	return {$: 'OpenSelect', a: a};
};
var QiTASC$hatchinq$Hatchinq$DropDown$SearchInput = function (a) {
	return {$: 'SearchInput', a: a};
};
var QiTASC$hatchinq$Hatchinq$DropDown$Select = F2(
	function (a, b) {
		return {$: 'Select', a: a, b: b};
	});
var QiTASC$hatchinq$Hatchinq$DropDown$dropdownItem = F6(
	function (_n0, widthLength, focused, value, selectedItem, data) {
		var theme = _n0.theme;
		var lift = _n0.lift;
		var onSelectMessage = A2(
			elm$core$Maybe$map,
			function (onChange) {
				return onChange(value);
			},
			data.onChange);
		var itemAttributes = A2(
			elm$core$List$cons,
			mdgriffith$elm_ui$Element$Events$onMouseDown(
				lift(
					A2(QiTASC$hatchinq$Hatchinq$DropDown$Select, value, onSelectMessage))),
			A2(
				elm$core$List$cons,
				mdgriffith$elm_ui$Element$pointer,
				A2(
					elm$core$List$cons,
					mdgriffith$elm_ui$Element$Font$family(
						_List_fromArray(
							[theme.font.main])),
					A2(
						elm$core$List$cons,
						mdgriffith$elm_ui$Element$Font$size(theme.font.defaultSize),
						A2(
							elm$core$List$cons,
							mdgriffith$elm_ui$Element$width(widthLength),
							A2(
								elm$core$List$cons,
								mdgriffith$elm_ui$Element$height(
									mdgriffith$elm_ui$Element$px(56)),
								A2(
									elm$core$List$cons,
									mdgriffith$elm_ui$Element$paddingEach(
										{bottom: 4, left: 12, right: 12, top: 20}),
									_Utils_eq(
										elm$core$Maybe$Just(value),
										selectedItem) ? (focused ? _List_fromArray(
										[
											mdgriffith$elm_ui$Element$Background$color(theme.colors.secondary.light)
										]) : _List_fromArray(
										[
											mdgriffith$elm_ui$Element$Background$color(theme.colors.secondary.lighter)
										])) : (focused ? _List_fromArray(
										[
											mdgriffith$elm_ui$Element$Background$color(theme.colors.gray.light),
											mdgriffith$elm_ui$Element$mouseOver(
											_List_fromArray(
												[
													mdgriffith$elm_ui$Element$Background$color(theme.colors.gray.color)
												]))
										]) : _List_fromArray(
										[
											mdgriffith$elm_ui$Element$mouseOver(
											_List_fromArray(
												[
													mdgriffith$elm_ui$Element$Background$color(theme.colors.gray.lighter)
												]))
										])))))))));
		return A2(
			mdgriffith$elm_ui$Element$el,
			itemAttributes,
			QiTASC$hatchinq$Hatchinq$Theme$textWithEllipsis(
				data.itemToString(value)));
	});
var QiTASC$hatchinq$Hatchinq$DropDown$matchQuery = F2(
	function (needle, haystack) {
		return A2(
			elm$core$String$contains,
			elm$core$String$toLower(needle),
			elm$core$String$toLower(haystack));
	});
var QiTASC$hatchinq$Hatchinq$DropDown$filteredValues = F2(
	function (data, query) {
		return A2(
			elm$core$List$filter,
			function (it) {
				return A2(
					QiTASC$hatchinq$Hatchinq$DropDown$matchQuery,
					query,
					data.itemToString(it));
			},
			data.items);
	});
var QiTASC$hatchinq$Hatchinq$Theme$transition = A2(elm$html$Html$Attributes$style, 'transition', 'all .25s');
var elm$core$Basics$modBy = _Basics_modBy;
var mdgriffith$elm_ui$Internal$Flag$scale = mdgriffith$elm_ui$Internal$Flag$flag(23);
var mdgriffith$elm_ui$Internal$Model$Scale = function (a) {
	return {$: 'Scale', a: a};
};
var mdgriffith$elm_ui$Element$scale = function (n) {
	return A2(
		mdgriffith$elm_ui$Internal$Model$TransformComponent,
		mdgriffith$elm_ui$Internal$Flag$scale,
		mdgriffith$elm_ui$Internal$Model$Scale(
			_Utils_Tuple3(n, n, 1)));
};
var QiTASC$hatchinq$Hatchinq$DropDown$dropdownBody = F6(
	function (config, internalConfig, widthLength, _n0, _n1, data) {
		var uiState = _n0.uiState;
		var focusedItem = _n0.focusedItem;
		var query = _n1.a;
		var items = A2(QiTASC$hatchinq$Hatchinq$DropDown$filteredValues, data, query);
		var itemsSize = elm$core$List$length(items);
		var itemHeightPx = 56;
		var focusedIndex = A2(
			elm$core$Maybe$map,
			function (index) {
				return A2(elm$core$Basics$modBy, itemsSize, index);
			},
			focusedItem);
		var bodyHeight = mdgriffith$elm_ui$Element$px(
			(A2(
				elm$core$Basics$min,
				A2(elm$core$Basics$max, 1, internalConfig.dropDownCount),
				elm$core$List$length(items)) * itemHeightPx) + 16);
		var standardBodyAttributes = _List_fromArray(
			[
				mdgriffith$elm_ui$Element$Border$rounded(4),
				mdgriffith$elm_ui$Element$Background$color(QiTASC$hatchinq$Hatchinq$Theme$white),
				mdgriffith$elm_ui$Element$height(bodyHeight),
				mdgriffith$elm_ui$Element$width(widthLength),
				A2(mdgriffith$elm_ui$Element$paddingXY, 0, 8),
				mdgriffith$elm_ui$Element$htmlAttribute(
				A2(elm$html$Html$Attributes$style, 'will-change', 'transform, opacity')),
				mdgriffith$elm_ui$Element$htmlAttribute(
				A2(elm$html$Html$Attributes$style, 'transform-origin', 'center top 0px')),
				mdgriffith$elm_ui$Element$htmlAttribute(
				A2(elm$html$Html$Attributes$style, 'box-shadow', '0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12)')),
				mdgriffith$elm_ui$Element$htmlAttribute(
				A2(elm$html$Html$Attributes$style, '-webkit-box-shadow', '0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12)')),
				mdgriffith$elm_ui$Element$htmlAttribute(QiTASC$hatchinq$Hatchinq$Theme$transition)
			]);
		var bodyAttributes = function () {
			if (uiState.$ === 'Open') {
				return A2(
					elm$core$List$cons,
					mdgriffith$elm_ui$Element$htmlAttribute(
						A2(elm$html$Html$Attributes$style, 'opacity', '1')),
					A2(
						elm$core$List$cons,
						mdgriffith$elm_ui$Element$scale(1),
						standardBodyAttributes));
			} else {
				return A2(
					elm$core$List$cons,
					mdgriffith$elm_ui$Element$htmlAttribute(
						A2(elm$html$Html$Attributes$style, 'opacity', '0')),
					A2(
						elm$core$List$cons,
						mdgriffith$elm_ui$Element$scale(0),
						standardBodyAttributes));
			}
		}();
		return A2(
			mdgriffith$elm_ui$Element$el,
			bodyAttributes,
			A2(
				mdgriffith$elm_ui$Element$column,
				_List_fromArray(
					[
						mdgriffith$elm_ui$Element$width(widthLength),
						mdgriffith$elm_ui$Element$scrollbarY
					]),
				A2(
					elm$core$List$indexedMap,
					F2(
						function (index, value) {
							return A6(
								QiTASC$hatchinq$Hatchinq$DropDown$dropdownItem,
								config,
								widthLength,
								_Utils_eq(
									elm$core$Maybe$Just(index),
									focusedIndex),
								value,
								data.value,
								data);
						}),
					items)));
	});
var QiTASC$hatchinq$Hatchinq$Util$arrowDownKeyCode = 40;
var QiTASC$hatchinq$Hatchinq$Util$arrowUpKeyCode = 38;
var QiTASC$hatchinq$Hatchinq$Util$escapeKeyCode = 27;
var QiTASC$hatchinq$Hatchinq$Util$keysDownAttribute = function (keyCodes) {
	var isKey = function (code) {
		var maybeMessage = A2(elm$core$Dict$get, code, keyCodes);
		if (maybeMessage.$ === 'Just') {
			var message = maybeMessage.a;
			return elm$json$Json$Decode$succeed(message);
		} else {
			return elm$json$Json$Decode$fail('no keyCode found');
		}
	};
	return mdgriffith$elm_ui$Element$htmlAttribute(
		A2(
			elm$html$Html$Events$on,
			'keydown',
			A2(elm$json$Json$Decode$andThen, isKey, elm$html$Html$Events$keyCode)));
};
var elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var mdgriffith$elm_ui$Internal$Model$Below = {$: 'Below'};
var mdgriffith$elm_ui$Element$below = function (element) {
	return A2(mdgriffith$elm_ui$Element$createNearby, mdgriffith$elm_ui$Internal$Model$Below, element);
};
var mdgriffith$elm_ui$Element$Border$roundEach = function (_n0) {
	var topLeft = _n0.topLeft;
	var topRight = _n0.topRight;
	var bottomLeft = _n0.bottomLeft;
	var bottomRight = _n0.bottomRight;
	return A2(
		mdgriffith$elm_ui$Internal$Model$StyleClass,
		mdgriffith$elm_ui$Internal$Flag$borderRound,
		A3(
			mdgriffith$elm_ui$Internal$Model$Single,
			'br-' + (elm$core$String$fromInt(topLeft) + ('-' + (elm$core$String$fromInt(topRight) + (elm$core$String$fromInt(bottomLeft) + ('-' + elm$core$String$fromInt(bottomRight)))))),
			'border-radius',
			elm$core$String$fromInt(topLeft) + ('px ' + (elm$core$String$fromInt(topRight) + ('px ' + (elm$core$String$fromInt(bottomRight) + ('px ' + (elm$core$String$fromInt(bottomLeft) + 'px'))))))));
};
var elm$html$Html$Events$onBlur = function (msg) {
	return A2(
		elm$html$Html$Events$on,
		'blur',
		elm$json$Json$Decode$succeed(msg));
};
var mdgriffith$elm_ui$Element$Events$onLoseFocus = A2(elm$core$Basics$composeL, mdgriffith$elm_ui$Internal$Model$Attr, elm$html$Html$Events$onBlur);
var mdgriffith$elm_ui$Element$Input$HiddenLabel = function (a) {
	return {$: 'HiddenLabel', a: a};
};
var mdgriffith$elm_ui$Element$Input$labelHidden = mdgriffith$elm_ui$Element$Input$HiddenLabel;
var mdgriffith$elm_ui$Element$Input$Placeholder = F2(
	function (a, b) {
		return {$: 'Placeholder', a: a, b: b};
	});
var mdgriffith$elm_ui$Element$Input$placeholder = mdgriffith$elm_ui$Element$Input$Placeholder;
var mdgriffith$elm_ui$Element$Input$TextInputNode = function (a) {
	return {$: 'TextInputNode', a: a};
};
var elm$html$Html$span = _VirtualDom_node('span');
var elm$html$Html$Events$alwaysStop = function (x) {
	return _Utils_Tuple2(x, true);
};
var elm$virtual_dom$VirtualDom$MayStopPropagation = function (a) {
	return {$: 'MayStopPropagation', a: a};
};
var elm$html$Html$Events$stopPropagationOn = F2(
	function (event, decoder) {
		return A2(
			elm$virtual_dom$VirtualDom$on,
			event,
			elm$virtual_dom$VirtualDom$MayStopPropagation(decoder));
	});
var elm$html$Html$Events$targetValue = A2(
	elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'value']),
	elm$json$Json$Decode$string);
var elm$html$Html$Events$onInput = function (tagger) {
	return A2(
		elm$html$Html$Events$stopPropagationOn,
		'input',
		A2(
			elm$json$Json$Decode$map,
			elm$html$Html$Events$alwaysStop,
			A2(elm$json$Json$Decode$map, tagger, elm$html$Html$Events$targetValue)));
};
var mdgriffith$elm_ui$Element$Input$TextArea = {$: 'TextArea'};
var mdgriffith$elm_ui$Element$Input$applyLabel = F3(
	function (attrs, label, input) {
		if (label.$ === 'HiddenLabel') {
			var labelText = label.a;
			return A4(
				mdgriffith$elm_ui$Internal$Model$element,
				mdgriffith$elm_ui$Internal$Model$asColumn,
				mdgriffith$elm_ui$Internal$Model$NodeName('label'),
				attrs,
				mdgriffith$elm_ui$Internal$Model$Unkeyed(
					_List_fromArray(
						[input])));
		} else {
			var position = label.a;
			var labelAttrs = label.b;
			var labelChild = label.c;
			var labelElement = A4(
				mdgriffith$elm_ui$Internal$Model$element,
				mdgriffith$elm_ui$Internal$Model$asEl,
				mdgriffith$elm_ui$Internal$Model$div,
				labelAttrs,
				mdgriffith$elm_ui$Internal$Model$Unkeyed(
					_List_fromArray(
						[labelChild])));
			switch (position.$) {
				case 'Above':
					return A4(
						mdgriffith$elm_ui$Internal$Model$element,
						mdgriffith$elm_ui$Internal$Model$asColumn,
						mdgriffith$elm_ui$Internal$Model$NodeName('label'),
						attrs,
						mdgriffith$elm_ui$Internal$Model$Unkeyed(
							_List_fromArray(
								[labelElement, input])));
				case 'Below':
					return A4(
						mdgriffith$elm_ui$Internal$Model$element,
						mdgriffith$elm_ui$Internal$Model$asColumn,
						mdgriffith$elm_ui$Internal$Model$NodeName('label'),
						attrs,
						mdgriffith$elm_ui$Internal$Model$Unkeyed(
							_List_fromArray(
								[input, labelElement])));
				case 'OnRight':
					return A4(
						mdgriffith$elm_ui$Internal$Model$element,
						mdgriffith$elm_ui$Internal$Model$asRow,
						mdgriffith$elm_ui$Internal$Model$NodeName('label'),
						attrs,
						mdgriffith$elm_ui$Internal$Model$Unkeyed(
							_List_fromArray(
								[input, labelElement])));
				default:
					return A4(
						mdgriffith$elm_ui$Internal$Model$element,
						mdgriffith$elm_ui$Internal$Model$asRow,
						mdgriffith$elm_ui$Internal$Model$NodeName('label'),
						attrs,
						mdgriffith$elm_ui$Internal$Model$Unkeyed(
							_List_fromArray(
								[labelElement, input])));
			}
		}
	});
var mdgriffith$elm_ui$Element$Input$autofill = A2(
	elm$core$Basics$composeL,
	mdgriffith$elm_ui$Internal$Model$Attr,
	elm$html$Html$Attributes$attribute('autocomplete'));
var mdgriffith$elm_ui$Internal$Flag$moveY = mdgriffith$elm_ui$Internal$Flag$flag(26);
var mdgriffith$elm_ui$Internal$Model$MoveY = function (a) {
	return {$: 'MoveY', a: a};
};
var mdgriffith$elm_ui$Element$moveUp = function (y) {
	return A2(
		mdgriffith$elm_ui$Internal$Model$TransformComponent,
		mdgriffith$elm_ui$Internal$Flag$moveY,
		mdgriffith$elm_ui$Internal$Model$MoveY(-y));
};
var mdgriffith$elm_ui$Element$Input$calcMoveToCompensateForPadding = function (attrs) {
	var gatherSpacing = F2(
		function (attr, found) {
			if ((attr.$ === 'StyleClass') && (attr.b.$ === 'SpacingStyle')) {
				var _n2 = attr.b;
				var x = _n2.b;
				var y = _n2.c;
				if (found.$ === 'Nothing') {
					return elm$core$Maybe$Just(y);
				} else {
					return found;
				}
			} else {
				return found;
			}
		});
	var _n0 = A3(elm$core$List$foldr, gatherSpacing, elm$core$Maybe$Nothing, attrs);
	if (_n0.$ === 'Nothing') {
		return mdgriffith$elm_ui$Internal$Model$NoAttribute;
	} else {
		var vSpace = _n0.a;
		return mdgriffith$elm_ui$Element$moveUp(
			elm$core$Basics$floor(vSpace / 2));
	}
};
var mdgriffith$elm_ui$Element$rgb = F3(
	function (r, g, b) {
		return A4(mdgriffith$elm_ui$Internal$Model$Rgba, r, g, b, 1);
	});
var mdgriffith$elm_ui$Element$Input$darkGrey = A3(mdgriffith$elm_ui$Element$rgb, 186 / 255, 189 / 255, 182 / 255);
var mdgriffith$elm_ui$Element$Input$defaultTextPadding = A2(mdgriffith$elm_ui$Element$paddingXY, 12, 12);
var mdgriffith$elm_ui$Element$Input$white = A3(mdgriffith$elm_ui$Element$rgb, 1, 1, 1);
var mdgriffith$elm_ui$Element$Input$defaultTextBoxStyle = _List_fromArray(
	[
		mdgriffith$elm_ui$Element$Input$defaultTextPadding,
		mdgriffith$elm_ui$Element$Border$rounded(3),
		mdgriffith$elm_ui$Element$Border$color(mdgriffith$elm_ui$Element$Input$darkGrey),
		mdgriffith$elm_ui$Element$Background$color(mdgriffith$elm_ui$Element$Input$white),
		mdgriffith$elm_ui$Element$Border$width(1),
		mdgriffith$elm_ui$Element$spacing(5),
		mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
		mdgriffith$elm_ui$Element$height(mdgriffith$elm_ui$Element$shrink)
	]);
var mdgriffith$elm_ui$Element$Input$getHeight = function (attr) {
	if (attr.$ === 'Height') {
		var h = attr.a;
		return elm$core$Maybe$Just(h);
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var mdgriffith$elm_ui$Internal$Model$Label = function (a) {
	return {$: 'Label', a: a};
};
var mdgriffith$elm_ui$Element$Input$hiddenLabelAttribute = function (label) {
	if (label.$ === 'HiddenLabel') {
		var textLabel = label.a;
		return mdgriffith$elm_ui$Internal$Model$Describe(
			mdgriffith$elm_ui$Internal$Model$Label(textLabel));
	} else {
		return mdgriffith$elm_ui$Internal$Model$NoAttribute;
	}
};
var mdgriffith$elm_ui$Element$Input$isConstrained = function (len) {
	isConstrained:
	while (true) {
		switch (len.$) {
			case 'Content':
				return false;
			case 'Px':
				return true;
			case 'Fill':
				return true;
			case 'Min':
				var l = len.b;
				var $temp$len = l;
				len = $temp$len;
				continue isConstrained;
			default:
				var l = len.b;
				return true;
		}
	}
};
var mdgriffith$elm_ui$Element$Input$isHiddenLabel = function (label) {
	if (label.$ === 'HiddenLabel') {
		return true;
	} else {
		return false;
	}
};
var mdgriffith$elm_ui$Element$Input$isStacked = function (label) {
	if (label.$ === 'Label') {
		var loc = label.a;
		switch (loc.$) {
			case 'OnRight':
				return false;
			case 'OnLeft':
				return false;
			case 'Above':
				return true;
			default:
				return true;
		}
	} else {
		return true;
	}
};
var mdgriffith$elm_ui$Element$Input$negateBox = function (box) {
	return {bottom: -box.bottom, left: -box.left, right: -box.right, top: -box.top};
};
var mdgriffith$elm_ui$Element$Input$isFill = function (len) {
	isFill:
	while (true) {
		switch (len.$) {
			case 'Fill':
				return true;
			case 'Content':
				return false;
			case 'Px':
				return false;
			case 'Min':
				var l = len.b;
				var $temp$len = l;
				len = $temp$len;
				continue isFill;
			default:
				var l = len.b;
				var $temp$len = l;
				len = $temp$len;
				continue isFill;
		}
	}
};
var mdgriffith$elm_ui$Element$Input$isPixel = function (len) {
	isPixel:
	while (true) {
		switch (len.$) {
			case 'Content':
				return false;
			case 'Px':
				return true;
			case 'Fill':
				return false;
			case 'Min':
				var l = len.b;
				var $temp$len = l;
				len = $temp$len;
				continue isPixel;
			default:
				var l = len.b;
				var $temp$len = l;
				len = $temp$len;
				continue isPixel;
		}
	}
};
var mdgriffith$elm_ui$Element$Input$redistributeOver = F4(
	function (isMultiline, stacked, attr, els) {
		switch (attr.$) {
			case 'Nearby':
				return _Utils_update(
					els,
					{
						parent: A2(elm$core$List$cons, attr, els.parent)
					});
			case 'Width':
				var width = attr.a;
				return mdgriffith$elm_ui$Element$Input$isFill(width) ? _Utils_update(
					els,
					{
						fullParent: A2(elm$core$List$cons, attr, els.fullParent),
						input: A2(elm$core$List$cons, attr, els.input),
						parent: A2(elm$core$List$cons, attr, els.parent)
					}) : (stacked ? _Utils_update(
					els,
					{
						fullParent: A2(elm$core$List$cons, attr, els.fullParent)
					}) : _Utils_update(
					els,
					{
						parent: A2(elm$core$List$cons, attr, els.parent)
					}));
			case 'Height':
				var height = attr.a;
				return (!stacked) ? _Utils_update(
					els,
					{
						fullParent: A2(elm$core$List$cons, attr, els.fullParent),
						parent: A2(elm$core$List$cons, attr, els.parent)
					}) : (mdgriffith$elm_ui$Element$Input$isFill(height) ? _Utils_update(
					els,
					{
						fullParent: A2(elm$core$List$cons, attr, els.fullParent),
						parent: A2(elm$core$List$cons, attr, els.parent)
					}) : (mdgriffith$elm_ui$Element$Input$isPixel(height) ? _Utils_update(
					els,
					{
						parent: A2(elm$core$List$cons, attr, els.parent)
					}) : _Utils_update(
					els,
					{
						parent: A2(elm$core$List$cons, attr, els.parent)
					})));
			case 'AlignX':
				return _Utils_update(
					els,
					{
						fullParent: A2(elm$core$List$cons, attr, els.fullParent)
					});
			case 'AlignY':
				return _Utils_update(
					els,
					{
						fullParent: A2(elm$core$List$cons, attr, els.fullParent)
					});
			case 'StyleClass':
				switch (attr.b.$) {
					case 'SpacingStyle':
						var _n1 = attr.b;
						return _Utils_update(
							els,
							{
								fullParent: A2(elm$core$List$cons, attr, els.fullParent),
								input: A2(elm$core$List$cons, attr, els.input),
								parent: A2(elm$core$List$cons, attr, els.parent),
								wrapper: A2(elm$core$List$cons, attr, els.wrapper)
							});
					case 'PaddingStyle':
						var cls = attr.a;
						var _n2 = attr.b;
						var pad = _n2.a;
						var t = _n2.b;
						var r = _n2.c;
						var b = _n2.d;
						var l = _n2.e;
						if (isMultiline) {
							return _Utils_update(
								els,
								{
									cover: A2(elm$core$List$cons, attr, els.cover),
									parent: A2(elm$core$List$cons, attr, els.parent)
								});
						} else {
							var reducedVerticalPadding = mdgriffith$elm_ui$Element$paddingEach(
								{
									bottom: b - A2(elm$core$Basics$min, t, b),
									left: l,
									right: r,
									top: t - A2(elm$core$Basics$min, t, b)
								});
							var newLineHeight = mdgriffith$elm_ui$Element$htmlAttribute(
								A2(
									elm$html$Html$Attributes$style,
									'line-height',
									'calc(1.0em + ' + (elm$core$String$fromInt(
										2 * A2(elm$core$Basics$min, t, b)) + 'px)')));
							var newHeight = mdgriffith$elm_ui$Element$htmlAttribute(
								A2(
									elm$html$Html$Attributes$style,
									'height',
									'calc(1.0em + ' + (elm$core$String$fromInt(
										2 * A2(elm$core$Basics$min, t, b)) + 'px)')));
							return _Utils_update(
								els,
								{
									cover: A2(elm$core$List$cons, attr, els.cover),
									input: A2(
										elm$core$List$cons,
										newHeight,
										A2(elm$core$List$cons, newLineHeight, els.input)),
									parent: A2(elm$core$List$cons, reducedVerticalPadding, els.parent)
								});
						}
					case 'BorderWidth':
						var _n3 = attr.b;
						return _Utils_update(
							els,
							{
								cover: A2(elm$core$List$cons, attr, els.cover),
								parent: A2(elm$core$List$cons, attr, els.parent)
							});
					case 'Transform':
						return _Utils_update(
							els,
							{
								cover: A2(elm$core$List$cons, attr, els.cover),
								parent: A2(elm$core$List$cons, attr, els.parent)
							});
					case 'FontSize':
						return _Utils_update(
							els,
							{
								fullParent: A2(elm$core$List$cons, attr, els.fullParent)
							});
					case 'FontFamily':
						var _n4 = attr.b;
						return _Utils_update(
							els,
							{
								fullParent: A2(elm$core$List$cons, attr, els.fullParent)
							});
					default:
						var flag = attr.a;
						var cls = attr.b;
						return _Utils_update(
							els,
							{
								parent: A2(elm$core$List$cons, attr, els.parent)
							});
				}
			case 'NoAttribute':
				return els;
			case 'Attr':
				var a = attr.a;
				return _Utils_update(
					els,
					{
						input: A2(elm$core$List$cons, attr, els.input)
					});
			case 'Describe':
				return _Utils_update(
					els,
					{
						input: A2(elm$core$List$cons, attr, els.input)
					});
			case 'Class':
				return _Utils_update(
					els,
					{
						parent: A2(elm$core$List$cons, attr, els.parent)
					});
			default:
				return _Utils_update(
					els,
					{
						input: A2(elm$core$List$cons, attr, els.input)
					});
		}
	});
var mdgriffith$elm_ui$Element$Input$redistribute = F3(
	function (isMultiline, stacked, attrs) {
		return function (redist) {
			return {
				cover: elm$core$List$reverse(redist.cover),
				fullParent: elm$core$List$reverse(redist.fullParent),
				input: elm$core$List$reverse(redist.input),
				parent: elm$core$List$reverse(redist.parent),
				wrapper: elm$core$List$reverse(redist.wrapper)
			};
		}(
			A3(
				elm$core$List$foldl,
				A2(mdgriffith$elm_ui$Element$Input$redistributeOver, isMultiline, stacked),
				{cover: _List_Nil, fullParent: _List_Nil, input: _List_Nil, parent: _List_Nil, wrapper: _List_Nil},
				attrs));
	});
var mdgriffith$elm_ui$Element$Input$renderBox = function (_n0) {
	var top = _n0.top;
	var right = _n0.right;
	var bottom = _n0.bottom;
	var left = _n0.left;
	return elm$core$String$fromInt(top) + ('px ' + (elm$core$String$fromInt(right) + ('px ' + (elm$core$String$fromInt(bottom) + ('px ' + (elm$core$String$fromInt(left) + 'px'))))));
};
var mdgriffith$elm_ui$Internal$Flag$transparency = mdgriffith$elm_ui$Internal$Flag$flag(0);
var mdgriffith$elm_ui$Internal$Model$Transparency = F2(
	function (a, b) {
		return {$: 'Transparency', a: a, b: b};
	});
var mdgriffith$elm_ui$Element$alpha = function (o) {
	var transparency = function (x) {
		return 1 - x;
	}(
		A2(
			elm$core$Basics$min,
			1.0,
			A2(elm$core$Basics$max, 0.0, o)));
	return A2(
		mdgriffith$elm_ui$Internal$Model$StyleClass,
		mdgriffith$elm_ui$Internal$Flag$transparency,
		A2(
			mdgriffith$elm_ui$Internal$Model$Transparency,
			'transparency-' + mdgriffith$elm_ui$Internal$Model$floatClass(transparency),
			transparency));
};
var mdgriffith$elm_ui$Element$rgba = mdgriffith$elm_ui$Internal$Model$Rgba;
var mdgriffith$elm_ui$Element$Input$charcoal = A3(mdgriffith$elm_ui$Element$rgb, 136 / 255, 138 / 255, 133 / 255);
var mdgriffith$elm_ui$Element$Input$renderPlaceholder = F3(
	function (_n0, forPlaceholder, on) {
		var placeholderAttrs = _n0.a;
		var placeholderEl = _n0.b;
		return A2(
			mdgriffith$elm_ui$Element$el,
			_Utils_ap(
				forPlaceholder,
				_Utils_ap(
					_List_fromArray(
						[
							mdgriffith$elm_ui$Element$Font$color(mdgriffith$elm_ui$Element$Input$charcoal),
							mdgriffith$elm_ui$Internal$Model$htmlClass(mdgriffith$elm_ui$Internal$Style$classes.noTextSelection + (' ' + mdgriffith$elm_ui$Internal$Style$classes.passPointerEvents)),
							mdgriffith$elm_ui$Element$clip,
							mdgriffith$elm_ui$Element$Border$color(
							A4(mdgriffith$elm_ui$Element$rgba, 0, 0, 0, 0)),
							mdgriffith$elm_ui$Element$Background$color(
							A4(mdgriffith$elm_ui$Element$rgba, 0, 0, 0, 0)),
							mdgriffith$elm_ui$Element$height(mdgriffith$elm_ui$Element$fill),
							mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
							mdgriffith$elm_ui$Element$alpha(
							on ? 1 : 0)
						]),
					placeholderAttrs)),
			placeholderEl);
	});
var elm$html$Html$Attributes$spellcheck = elm$html$Html$Attributes$boolProperty('spellcheck');
var mdgriffith$elm_ui$Element$Input$spellcheck = A2(elm$core$Basics$composeL, mdgriffith$elm_ui$Internal$Model$Attr, elm$html$Html$Attributes$spellcheck);
var elm$html$Html$Attributes$value = elm$html$Html$Attributes$stringProperty('value');
var mdgriffith$elm_ui$Element$Input$value = A2(elm$core$Basics$composeL, mdgriffith$elm_ui$Internal$Model$Attr, elm$html$Html$Attributes$value);
var mdgriffith$elm_ui$Internal$Model$LivePolite = {$: 'LivePolite'};
var mdgriffith$elm_ui$Element$Region$announce = mdgriffith$elm_ui$Internal$Model$Describe(mdgriffith$elm_ui$Internal$Model$LivePolite);
var mdgriffith$elm_ui$Element$Input$textHelper = F3(
	function (textInput, attrs, textOptions) {
		var withDefaults = _Utils_ap(mdgriffith$elm_ui$Element$Input$defaultTextBoxStyle, attrs);
		var redistributed = A3(
			mdgriffith$elm_ui$Element$Input$redistribute,
			_Utils_eq(textInput.type_, mdgriffith$elm_ui$Element$Input$TextArea),
			mdgriffith$elm_ui$Element$Input$isStacked(textOptions.label),
			withDefaults);
		var onlySpacing = function (attr) {
			if ((attr.$ === 'StyleClass') && (attr.b.$ === 'SpacingStyle')) {
				var _n9 = attr.b;
				return true;
			} else {
				return false;
			}
		};
		var heightConstrained = function () {
			var _n7 = textInput.type_;
			if (_n7.$ === 'TextInputNode') {
				var inputType = _n7.a;
				return false;
			} else {
				return A2(
					elm$core$Maybe$withDefault,
					false,
					A2(
						elm$core$Maybe$map,
						mdgriffith$elm_ui$Element$Input$isConstrained,
						elm$core$List$head(
							elm$core$List$reverse(
								A2(elm$core$List$filterMap, mdgriffith$elm_ui$Element$Input$getHeight, withDefaults)))));
			}
		}();
		var getPadding = function (attr) {
			if ((attr.$ === 'StyleClass') && (attr.b.$ === 'PaddingStyle')) {
				var cls = attr.a;
				var _n6 = attr.b;
				var pad = _n6.a;
				var t = _n6.b;
				var r = _n6.c;
				var b = _n6.d;
				var l = _n6.e;
				return elm$core$Maybe$Just(
					{
						bottom: A2(
							elm$core$Basics$max,
							0,
							elm$core$Basics$floor(b - 3)),
						left: A2(
							elm$core$Basics$max,
							0,
							elm$core$Basics$floor(l - 3)),
						right: A2(
							elm$core$Basics$max,
							0,
							elm$core$Basics$floor(r - 3)),
						top: A2(
							elm$core$Basics$max,
							0,
							elm$core$Basics$floor(t - 3))
					});
			} else {
				return elm$core$Maybe$Nothing;
			}
		};
		var parentPadding = A2(
			elm$core$Maybe$withDefault,
			{bottom: 0, left: 0, right: 0, top: 0},
			elm$core$List$head(
				elm$core$List$reverse(
					A2(elm$core$List$filterMap, getPadding, withDefaults))));
		var inputElement = A4(
			mdgriffith$elm_ui$Internal$Model$element,
			mdgriffith$elm_ui$Internal$Model$asEl,
			function () {
				var _n3 = textInput.type_;
				if (_n3.$ === 'TextInputNode') {
					var inputType = _n3.a;
					return mdgriffith$elm_ui$Internal$Model$NodeName('input');
				} else {
					return mdgriffith$elm_ui$Internal$Model$NodeName('textarea');
				}
			}(),
			_Utils_ap(
				function () {
					var _n4 = textInput.type_;
					if (_n4.$ === 'TextInputNode') {
						var inputType = _n4.a;
						return _List_fromArray(
							[
								mdgriffith$elm_ui$Internal$Model$Attr(
								elm$html$Html$Attributes$type_(inputType)),
								mdgriffith$elm_ui$Internal$Model$htmlClass(mdgriffith$elm_ui$Internal$Style$classes.inputText)
							]);
					} else {
						return _List_fromArray(
							[
								mdgriffith$elm_ui$Element$clip,
								mdgriffith$elm_ui$Element$height(mdgriffith$elm_ui$Element$fill),
								mdgriffith$elm_ui$Internal$Model$htmlClass(mdgriffith$elm_ui$Internal$Style$classes.inputMultiline),
								mdgriffith$elm_ui$Element$Input$calcMoveToCompensateForPadding(withDefaults),
								mdgriffith$elm_ui$Element$paddingEach(parentPadding),
								mdgriffith$elm_ui$Internal$Model$Attr(
								A2(
									elm$html$Html$Attributes$style,
									'margin',
									mdgriffith$elm_ui$Element$Input$renderBox(
										mdgriffith$elm_ui$Element$Input$negateBox(parentPadding)))),
								mdgriffith$elm_ui$Internal$Model$Attr(
								A2(elm$html$Html$Attributes$style, 'box-sizing', 'content-box'))
							]);
					}
				}(),
				_Utils_ap(
					_List_fromArray(
						[
							mdgriffith$elm_ui$Element$Input$value(textOptions.text),
							mdgriffith$elm_ui$Internal$Model$Attr(
							elm$html$Html$Events$onInput(textOptions.onChange)),
							mdgriffith$elm_ui$Element$Input$hiddenLabelAttribute(textOptions.label),
							mdgriffith$elm_ui$Element$Input$spellcheck(textInput.spellchecked),
							A2(
							elm$core$Maybe$withDefault,
							mdgriffith$elm_ui$Internal$Model$NoAttribute,
							A2(elm$core$Maybe$map, mdgriffith$elm_ui$Element$Input$autofill, textInput.autofill))
						]),
					redistributed.input)),
			mdgriffith$elm_ui$Internal$Model$Unkeyed(_List_Nil));
		var wrappedInput = function () {
			var _n0 = textInput.type_;
			if (_n0.$ === 'TextArea') {
				return A4(
					mdgriffith$elm_ui$Internal$Model$element,
					mdgriffith$elm_ui$Internal$Model$asEl,
					mdgriffith$elm_ui$Internal$Model$div,
					_Utils_ap(
						(heightConstrained ? elm$core$List$cons(mdgriffith$elm_ui$Element$scrollbarY) : elm$core$Basics$identity)(
							_List_fromArray(
								[
									mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
									A2(elm$core$List$any, mdgriffith$elm_ui$Element$Input$hasFocusStyle, withDefaults) ? mdgriffith$elm_ui$Internal$Model$NoAttribute : mdgriffith$elm_ui$Internal$Model$htmlClass(mdgriffith$elm_ui$Internal$Style$classes.focusedWithin),
									mdgriffith$elm_ui$Internal$Model$htmlClass(mdgriffith$elm_ui$Internal$Style$classes.inputMultilineWrapper)
								])),
						redistributed.parent),
					mdgriffith$elm_ui$Internal$Model$Unkeyed(
						_List_fromArray(
							[
								A4(
								mdgriffith$elm_ui$Internal$Model$element,
								mdgriffith$elm_ui$Internal$Model$asParagraph,
								mdgriffith$elm_ui$Internal$Model$div,
								A2(
									elm$core$List$cons,
									mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
									A2(
										elm$core$List$cons,
										mdgriffith$elm_ui$Element$height(mdgriffith$elm_ui$Element$fill),
										A2(
											elm$core$List$cons,
											mdgriffith$elm_ui$Element$inFront(inputElement),
											A2(
												elm$core$List$cons,
												mdgriffith$elm_ui$Internal$Model$htmlClass(mdgriffith$elm_ui$Internal$Style$classes.inputMultilineParent),
												redistributed.wrapper)))),
								mdgriffith$elm_ui$Internal$Model$Unkeyed(
									function () {
										if (textOptions.text === '') {
											var _n1 = textOptions.placeholder;
											if (_n1.$ === 'Nothing') {
												return _List_fromArray(
													[
														mdgriffith$elm_ui$Element$text('\u00a0')
													]);
											} else {
												var place = _n1.a;
												return _List_fromArray(
													[
														A3(mdgriffith$elm_ui$Element$Input$renderPlaceholder, place, _List_Nil, textOptions.text === '')
													]);
											}
										} else {
											return _List_fromArray(
												[
													mdgriffith$elm_ui$Internal$Model$unstyled(
													A2(
														elm$html$Html$span,
														_List_fromArray(
															[
																elm$html$Html$Attributes$class(mdgriffith$elm_ui$Internal$Style$classes.inputMultilineFiller)
															]),
														_List_fromArray(
															[
																elm$html$Html$text(textOptions.text + '\u00a0')
															])))
												]);
										}
									}()))
							])));
			} else {
				var inputType = _n0.a;
				return A4(
					mdgriffith$elm_ui$Internal$Model$element,
					mdgriffith$elm_ui$Internal$Model$asEl,
					mdgriffith$elm_ui$Internal$Model$div,
					A2(
						elm$core$List$cons,
						mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
						A2(
							elm$core$List$cons,
							A2(elm$core$List$any, mdgriffith$elm_ui$Element$Input$hasFocusStyle, withDefaults) ? mdgriffith$elm_ui$Internal$Model$NoAttribute : mdgriffith$elm_ui$Internal$Model$htmlClass(mdgriffith$elm_ui$Internal$Style$classes.focusedWithin),
							elm$core$List$concat(
								_List_fromArray(
									[
										redistributed.parent,
										function () {
										var _n2 = textOptions.placeholder;
										if (_n2.$ === 'Nothing') {
											return _List_Nil;
										} else {
											var place = _n2.a;
											return _List_fromArray(
												[
													mdgriffith$elm_ui$Element$behindContent(
													A3(mdgriffith$elm_ui$Element$Input$renderPlaceholder, place, redistributed.cover, textOptions.text === ''))
												]);
										}
									}()
									])))),
					mdgriffith$elm_ui$Internal$Model$Unkeyed(
						_List_fromArray(
							[inputElement])));
			}
		}();
		return A3(
			mdgriffith$elm_ui$Element$Input$applyLabel,
			A2(
				elm$core$List$cons,
				A2(mdgriffith$elm_ui$Internal$Model$Class, mdgriffith$elm_ui$Internal$Flag$cursor, mdgriffith$elm_ui$Internal$Style$classes.cursorText),
				A2(
					elm$core$List$cons,
					mdgriffith$elm_ui$Element$Input$isHiddenLabel(textOptions.label) ? mdgriffith$elm_ui$Internal$Model$NoAttribute : mdgriffith$elm_ui$Element$spacing(5),
					A2(elm$core$List$cons, mdgriffith$elm_ui$Element$Region$announce, redistributed.fullParent))),
			textOptions.label,
			wrappedInput);
	});
var mdgriffith$elm_ui$Element$Input$text = mdgriffith$elm_ui$Element$Input$textHelper(
	{
		autofill: elm$core$Maybe$Nothing,
		spellchecked: false,
		type_: mdgriffith$elm_ui$Element$Input$TextInputNode('text')
	});
var QiTASC$hatchinq$Hatchinq$DropDown$view = F3(
	function (config, attributes, data) {
		var widthLength = A2(
			elm$core$Maybe$withDefault,
			mdgriffith$elm_ui$Element$px(280),
			QiTASC$hatchinq$Hatchinq$Attribute$toWidth(attributes));
		var state = data.state;
		var selectedItemIndex = A2(
			elm$core$Maybe$withDefault,
			elm$core$Maybe$Nothing,
			A2(
				elm$core$Maybe$map,
				function (selectedItem) {
					return elm$core$List$head(
						A2(
							elm$core$List$filterMap,
							function (_n11) {
								var i = _n11.a;
								var item = _n11.b;
								return _Utils_eq(selectedItem, item) ? elm$core$Maybe$Just(i) : elm$core$Maybe$Nothing;
							},
							A2(
								elm$core$List$indexedMap,
								F2(
									function (i, item) {
										return _Utils_Tuple2(i, item);
									}),
								data.items)));
				},
				data.value));
		var itemsSize = elm$core$List$length(data.items);
		var items = function () {
			var _n10 = state.uiState;
			if (_n10.$ === 'Open') {
				var q = _n10.a.a;
				return A2(QiTASC$hatchinq$Hatchinq$DropDown$filteredValues, data, q);
			} else {
				return data.items;
			}
		}();
		var focusedItem = A2(
			elm$core$Maybe$withDefault,
			elm$core$Maybe$Nothing,
			A2(
				elm$core$Maybe$map,
				function (index) {
					return elm$core$List$head(
						A2(
							elm$core$List$drop,
							A2(elm$core$Basics$modBy, itemsSize, index),
							data.items));
				},
				data.state.focusedItem));
		var selectMessage = function () {
			if (focusedItem.$ === 'Just') {
				var item = focusedItem.a;
				return A2(
					QiTASC$hatchinq$Hatchinq$DropDown$Select,
					item,
					A2(
						elm$core$Maybe$map,
						function (onChange) {
							return onChange(item);
						},
						data.onChange));
			} else {
				var _n9 = state.uiState;
				if (_n9.$ === 'Closed') {
					return QiTASC$hatchinq$Hatchinq$DropDown$OpenSelect(selectedItemIndex);
				} else {
					return QiTASC$hatchinq$Hatchinq$DropDown$Noop;
				}
			}
		}();
		var elementAttributes = QiTASC$hatchinq$Hatchinq$Attribute$toElement(attributes);
		var disabled = _Utils_eq(data.onChange, elm$core$Maybe$Nothing);
		var defaultConfig = {dropDownCount: 10, dropDownType: QiTASC$hatchinq$Hatchinq$DropDown$Filled, label: elm$core$Maybe$Nothing, searchable: false};
		var internalConfig = A2(QiTASC$hatchinq$Hatchinq$Attribute$toInternalConfig, attributes, defaultConfig);
		var converter = data.itemToString;
		var _n0 = config;
		var theme = _n0.theme;
		var lift = _n0.lift;
		var keyDownAttributes = _List_fromArray(
			[
				QiTASC$hatchinq$Hatchinq$Util$keysDownAttribute(
				elm$core$Dict$fromList(
					_List_fromArray(
						[
							_Utils_Tuple2(
							QiTASC$hatchinq$Hatchinq$Util$arrowUpKeyCode,
							lift(
								QiTASC$hatchinq$Hatchinq$DropDown$ArrowUpPress(selectedItemIndex))),
							_Utils_Tuple2(
							QiTASC$hatchinq$Hatchinq$Util$arrowDownKeyCode,
							lift(
								QiTASC$hatchinq$Hatchinq$DropDown$ArrowDownPress(selectedItemIndex))),
							_Utils_Tuple2(
							QiTASC$hatchinq$Hatchinq$Util$enterKeyCode,
							lift(selectMessage)),
							_Utils_Tuple2(
							QiTASC$hatchinq$Hatchinq$Util$escapeKeyCode,
							lift(QiTASC$hatchinq$Hatchinq$DropDown$CloseSelect))
						])))
			]);
		var inputHoverAttributes = function () {
			var _n7 = internalConfig.dropDownType;
			if (_n7.$ === 'Filled') {
				return ((!disabled) && _Utils_eq(state.uiState, QiTASC$hatchinq$Hatchinq$DropDown$Closed)) ? _List_fromArray(
					[
						mdgriffith$elm_ui$Element$pointer,
						mdgriffith$elm_ui$Element$mouseOver(
						_List_fromArray(
							[
								mdgriffith$elm_ui$Element$Background$color(theme.colors.gray.light),
								mdgriffith$elm_ui$Element$Border$color(theme.colors.gray.color)
							]))
					]) : _List_Nil;
			} else {
				return ((!disabled) && _Utils_eq(state.uiState, QiTASC$hatchinq$Hatchinq$DropDown$Closed)) ? _List_fromArray(
					[
						mdgriffith$elm_ui$Element$pointer,
						mdgriffith$elm_ui$Element$mouseOver(
						_List_fromArray(
							[
								mdgriffith$elm_ui$Element$Border$color(QiTASC$hatchinq$Hatchinq$Theme$black)
							]))
					]) : _List_Nil;
			}
		}();
		var inputStyledAttributes = function () {
			var _n6 = internalConfig.dropDownType;
			if (_n6.$ === 'Filled') {
				return _List_fromArray(
					[
						mdgriffith$elm_ui$Element$Background$color(theme.colors.gray.lighter),
						mdgriffith$elm_ui$Element$Border$roundEach(
						{bottomLeft: 0, bottomRight: 0, topLeft: 4, topRight: 4}),
						mdgriffith$elm_ui$Element$Border$widthEach(
						{bottom: 2, left: 0, right: 0, top: 0}),
						mdgriffith$elm_ui$Element$Border$color(
						disabled ? QiTASC$hatchinq$Hatchinq$Theme$transparent : theme.colors.gray.color),
						mdgriffith$elm_ui$Element$Font$color(
						disabled ? theme.colors.gray.withAlpha(0.48) : QiTASC$hatchinq$Hatchinq$Theme$black),
						mdgriffith$elm_ui$Element$focused(
						_List_fromArray(
							[
								mdgriffith$elm_ui$Element$Background$color(theme.colors.gray.lightest),
								mdgriffith$elm_ui$Element$Border$color(theme.colors.secondary.color)
							]))
					]);
			} else {
				return _List_fromArray(
					[
						mdgriffith$elm_ui$Element$Border$rounded(4),
						mdgriffith$elm_ui$Element$Border$width(
						_Utils_eq(state.uiState, QiTASC$hatchinq$Hatchinq$DropDown$Closed) ? 1 : 2),
						mdgriffith$elm_ui$Element$Border$color(
						disabled ? theme.colors.gray.lightest : theme.colors.gray.color),
						mdgriffith$elm_ui$Element$Font$color(
						disabled ? theme.colors.gray.withAlpha(0.48) : QiTASC$hatchinq$Hatchinq$Theme$black),
						mdgriffith$elm_ui$Element$focused(
						_List_fromArray(
							[
								mdgriffith$elm_ui$Element$Border$color(theme.colors.secondary.color)
							]))
					]);
			}
		}();
		var labelColor = disabled ? theme.colors.gray.color : theme.colors.gray.dark;
		var arrowAttributes = A2(
			elm$core$List$cons,
			mdgriffith$elm_ui$Element$htmlAttribute(
				A2(elm$html$Html$Attributes$style, 'will-change', 'transform')),
			A2(
				elm$core$List$cons,
				mdgriffith$elm_ui$Element$pointer,
				A2(
					elm$core$List$cons,
					mdgriffith$elm_ui$Element$alignRight,
					A2(
						elm$core$List$cons,
						mdgriffith$elm_ui$Element$centerY,
						A2(
							elm$core$List$cons,
							mdgriffith$elm_ui$Element$padding(8),
							A2(
								elm$core$List$cons,
								mdgriffith$elm_ui$Element$htmlAttribute(QiTASC$hatchinq$Hatchinq$Theme$arrowTransition),
								function () {
									var _n5 = state.uiState;
									if (_n5.$ === 'Open') {
										return _List_fromArray(
											[
												mdgriffith$elm_ui$Element$Font$color(theme.colors.secondary.color),
												mdgriffith$elm_ui$Element$htmlAttribute(
												A2(elm$html$Html$Attributes$style, 'transform', 'rotate(180deg) translateY(-5px)'))
											]);
									} else {
										return _List_fromArray(
											[
												mdgriffith$elm_ui$Element$Font$color(labelColor),
												mdgriffith$elm_ui$Element$htmlAttribute(
												A2(elm$html$Html$Attributes$style, 'pointer-events', 'none'))
											]);
									}
								}()))))));
		var standardLabelAttributes = _List_fromArray(
			[
				mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
				mdgriffith$elm_ui$Element$height(mdgriffith$elm_ui$Element$shrink),
				mdgriffith$elm_ui$Element$Font$family(
				_List_fromArray(
					[theme.font.main])),
				mdgriffith$elm_ui$Element$htmlAttribute(QiTASC$hatchinq$Hatchinq$Theme$transition),
				mdgriffith$elm_ui$Element$htmlAttribute(
				A2(elm$html$Html$Attributes$style, 'pointer-events', 'none'))
			]);
		var _n1 = function () {
			var _n3 = state.uiState;
			if (_n3.$ === 'Open') {
				var q = _n3.a.a;
				return _Utils_Tuple3(
					_Utils_Tuple2(
						QiTASC$hatchinq$Hatchinq$DropDown$Query(q),
						q),
					(q === '') ? A2(
						elm$core$Maybe$map,
						function (t) {
							return A2(
								mdgriffith$elm_ui$Element$Input$placeholder,
								_List_Nil,
								A2(
									mdgriffith$elm_ui$Element$el,
									_List_fromArray(
										[
											mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
											mdgriffith$elm_ui$Element$height(mdgriffith$elm_ui$Element$fill)
										]),
									QiTASC$hatchinq$Hatchinq$Theme$textWithEllipsis(
										converter(t))));
						},
						data.value) : elm$core$Maybe$Nothing,
					A2(
						elm$core$List$cons,
						A2(mdgriffith$elm_ui$Element$paddingXY, 12, 8),
						A2(
							elm$core$List$cons,
							mdgriffith$elm_ui$Element$Font$size(theme.font.smallerSize),
							A2(
								elm$core$List$cons,
								mdgriffith$elm_ui$Element$Font$color(theme.colors.secondary.color),
								standardLabelAttributes))));
			} else {
				return _Utils_Tuple3(
					_Utils_Tuple2(
						QiTASC$hatchinq$Hatchinq$DropDown$Query(''),
						A2(
							elm$core$Maybe$withDefault,
							'',
							A2(elm$core$Maybe$map, converter, data.value))),
					elm$core$Maybe$Nothing,
					function () {
						var _n4 = data.value;
						if (_n4.$ === 'Just') {
							return A2(
								elm$core$List$cons,
								mdgriffith$elm_ui$Element$pointer,
								A2(
									elm$core$List$cons,
									A2(mdgriffith$elm_ui$Element$paddingXY, 12, 8),
									A2(
										elm$core$List$cons,
										mdgriffith$elm_ui$Element$Font$size(theme.font.smallerSize),
										A2(
											elm$core$List$cons,
											mdgriffith$elm_ui$Element$Font$color(labelColor),
											standardLabelAttributes))));
						} else {
							return A2(
								elm$core$List$cons,
								mdgriffith$elm_ui$Element$pointer,
								A2(
									elm$core$List$cons,
									A2(mdgriffith$elm_ui$Element$paddingXY, 12, 20),
									A2(
										elm$core$List$cons,
										mdgriffith$elm_ui$Element$Font$size(theme.font.defaultSize),
										A2(
											elm$core$List$cons,
											mdgriffith$elm_ui$Element$Font$color(labelColor),
											standardLabelAttributes))));
						}
					}());
			}
		}();
		var _n2 = _n1.a;
		var query = _n2.a;
		var text = _n2.b;
		var placeholder = _n1.b;
		var labelAttributes = _n1.c;
		var labelElement = A2(
			mdgriffith$elm_ui$Element$el,
			labelAttributes,
			QiTASC$hatchinq$Hatchinq$Theme$textWithEllipsis(
				A2(elm$core$Maybe$withDefault, '', internalConfig.label)));
		var inputAttributes = A2(
			elm$core$List$cons,
			mdgriffith$elm_ui$Element$Font$family(
				_List_fromArray(
					[theme.font.main])),
			A2(
				elm$core$List$cons,
				mdgriffith$elm_ui$Element$Font$size(theme.font.defaultSize),
				A2(
					elm$core$List$cons,
					mdgriffith$elm_ui$Element$width(
						mdgriffith$elm_ui$Element$px(280)),
					A2(
						elm$core$List$cons,
						mdgriffith$elm_ui$Element$height(
							mdgriffith$elm_ui$Element$px(56)),
						A2(
							elm$core$List$cons,
							mdgriffith$elm_ui$Element$htmlAttribute(
								A2(elm$html$Html$Attributes$style, 'display', 'inline-block')),
							A2(
								elm$core$List$cons,
								mdgriffith$elm_ui$Element$htmlAttribute(
									A2(elm$html$Html$Attributes$style, 'overflow', 'hidden')),
								A2(
									elm$core$List$cons,
									mdgriffith$elm_ui$Element$htmlAttribute(
										A2(elm$html$Html$Attributes$style, 'text-overflow', 'ellipsis')),
									A2(
										elm$core$List$cons,
										mdgriffith$elm_ui$Element$paddingEach(
											{bottom: 4, left: 12, right: 32, top: 32}),
										A2(
											elm$core$List$cons,
											mdgriffith$elm_ui$Element$inFront(labelElement),
											A2(
												elm$core$List$cons,
												mdgriffith$elm_ui$Element$Events$onClick(
													lift(
														QiTASC$hatchinq$Hatchinq$DropDown$OpenSelect(selectedItemIndex))),
												A2(
													elm$core$List$cons,
													mdgriffith$elm_ui$Element$Events$onLoseFocus(
														lift(
															disabled ? QiTASC$hatchinq$Hatchinq$DropDown$Noop : QiTASC$hatchinq$Hatchinq$DropDown$CloseSelect)),
													A2(
														elm$core$List$cons,
														mdgriffith$elm_ui$Element$htmlAttribute(
															elm$html$Html$Attributes$disabled(disabled)),
														keyDownAttributes))))))))))));
		return A2(
			mdgriffith$elm_ui$Element$el,
			A2(
				elm$core$List$cons,
				mdgriffith$elm_ui$Element$below(
					A6(QiTASC$hatchinq$Hatchinq$DropDown$dropdownBody, config, internalConfig, widthLength, state, query, data)),
				A2(
					elm$core$List$cons,
					mdgriffith$elm_ui$Element$inFront(
						A2(
							mdgriffith$elm_ui$Element$el,
							arrowAttributes,
							QiTASC$hatchinq$Hatchinq$Theme$icon('arrow_drop_down'))),
					elementAttributes)),
			A2(
				mdgriffith$elm_ui$Element$Input$text,
				_Utils_ap(
					inputStyledAttributes,
					_Utils_ap(
						inputAttributes,
						_Utils_ap(inputHoverAttributes, elementAttributes))),
				{
					label: mdgriffith$elm_ui$Element$Input$labelHidden(
						A2(elm$core$Maybe$withDefault, '', internalConfig.label)),
					onChange: function (newQuery) {
						return lift(
							QiTASC$hatchinq$Hatchinq$DropDown$SearchInput(
								QiTASC$hatchinq$Hatchinq$DropDown$Query(newQuery)));
					},
					placeholder: placeholder,
					text: text
				}));
	});
var QiTASC$hatchinq$Hatchinq$DropDown$configure = function (config) {
	return QiTASC$hatchinq$Hatchinq$DropDown$view(config);
};
var QiTASC$hatchinq$Examples$dropDown = F3(
	function (id, attr, v) {
		return A3(
			QiTASC$hatchinq$Hatchinq$DropDown$configure,
			{
				lift: QiTASC$hatchinq$Examples$DropdownStateChange(id),
				theme: QiTASC$hatchinq$Examples$theme
			},
			attr,
			v);
	});
var QiTASC$hatchinq$Examples$ListStateChange = F2(
	function (a, b) {
		return {$: 'ListStateChange', a: a, b: b};
	});
var QiTASC$hatchinq$Hatchinq$List$Select = F2(
	function (a, b) {
		return {$: 'Select', a: a, b: b};
	});
var QiTASC$hatchinq$Hatchinq$List$listItem = F5(
	function (_n0, internalConfig, data, item, itemHeightPx) {
		var theme = _n0.theme;
		var lift = _n0.lift;
		var controlAttributes = function () {
			var _n4 = internalConfig.toControl;
			if (_n4.$ === 'Just') {
				var toControl = _n4.a;
				return _List_fromArray(
					[
						mdgriffith$elm_ui$Element$inFront(
						A2(
							mdgriffith$elm_ui$Element$el,
							_List_fromArray(
								[
									mdgriffith$elm_ui$Element$alignRight,
									mdgriffith$elm_ui$Element$centerY,
									mdgriffith$elm_ui$Element$paddingEach(
									{bottom: 0, left: 16, right: 16, top: 0})
								]),
							toControl(item)))
					]);
			} else {
				return _List_Nil;
			}
		}();
		var colorAttributes = _Utils_eq(
			data.activated,
			elm$core$Maybe$Just(item)) ? A2(
			elm$core$List$cons,
			mdgriffith$elm_ui$Element$Font$color(theme.colors.primary.dark),
			A2(
				elm$core$List$cons,
				mdgriffith$elm_ui$Element$htmlAttribute(
					elm$html$Html$Attributes$class('ripple focusPrimaryRipple')),
				_Utils_eq(
					data.state.selected,
					elm$core$Maybe$Just(item)) ? _List_fromArray(
					[
						mdgriffith$elm_ui$Element$Background$color(theme.colors.primary.lighter)
					]) : _List_fromArray(
					[
						mdgriffith$elm_ui$Element$Background$color(theme.colors.primary.lightest),
						mdgriffith$elm_ui$Element$mouseOver(
						_List_fromArray(
							[
								mdgriffith$elm_ui$Element$Background$color(theme.colors.primary.lighter)
							]))
					]))) : A2(
			elm$core$List$cons,
			mdgriffith$elm_ui$Element$htmlAttribute(
				elm$html$Html$Attributes$class('ripple focusGrayRipple')),
			_Utils_eq(
				data.state.selected,
				elm$core$Maybe$Just(item)) ? _List_fromArray(
				[
					mdgriffith$elm_ui$Element$Background$color(theme.colors.gray.light)
				]) : _List_fromArray(
				[
					mdgriffith$elm_ui$Element$mouseOver(
					_List_fromArray(
						[
							mdgriffith$elm_ui$Element$Background$color(theme.colors.gray.lightest)
						]))
				]));
		var _n1 = function () {
			var _n2 = internalConfig.toImageSrc;
			if (_n2.$ === 'Just') {
				var toImageSrc = _n2.a;
				return _Utils_Tuple2(
					72,
					_List_fromArray(
						[
							mdgriffith$elm_ui$Element$height(
							mdgriffith$elm_ui$Element$px(itemHeightPx)),
							mdgriffith$elm_ui$Element$inFront(
							QiTASC$hatchinq$Hatchinq$Common$roundImage(
								toImageSrc(item)))
						]));
			} else {
				return _Utils_Tuple2(
					16,
					_List_fromArray(
						[
							mdgriffith$elm_ui$Element$height(
							mdgriffith$elm_ui$Element$px(itemHeightPx))
						]));
			}
		}();
		var leftPadding = _n1.a;
		var additionalItemAttributes = _n1.b;
		var itemAttributes = _Utils_ap(
			_List_fromArray(
				[
					mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
					mdgriffith$elm_ui$Element$Font$family(
					_List_fromArray(
						[theme.font.main])),
					mdgriffith$elm_ui$Element$Font$size(theme.font.defaultSize),
					mdgriffith$elm_ui$Element$Events$onClick(
					lift(
						A2(
							QiTASC$hatchinq$Hatchinq$List$Select,
							elm$core$Maybe$Just(item),
							A2(
								elm$core$Maybe$map,
								function (onSelect) {
									return onSelect(item);
								},
								data.onSelect))))
				]),
			_Utils_ap(colorAttributes, additionalItemAttributes));
		var textAttributes = _List_fromArray(
			[
				mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
				mdgriffith$elm_ui$Element$paddingEach(
				{bottom: 0, left: leftPadding, right: 16, top: 0}),
				mdgriffith$elm_ui$Element$centerY
			]);
		var secondaryTextElements = function () {
			var _n3 = internalConfig.toSecondaryText;
			if (_n3.$ === 'Just') {
				var toSecondaryText = _n3.a;
				return _List_fromArray(
					[
						A2(
						mdgriffith$elm_ui$Element$el,
						A2(
							elm$core$List$cons,
							mdgriffith$elm_ui$Element$Font$color(theme.colors.gray.color),
							A2(
								elm$core$List$cons,
								mdgriffith$elm_ui$Element$Font$size(theme.font.smallSize),
								textAttributes)),
						QiTASC$hatchinq$Hatchinq$Theme$textWithEllipsis(
							toSecondaryText(item)))
					]);
			} else {
				return _List_Nil;
			}
		}();
		return A2(
			mdgriffith$elm_ui$Element$column,
			_Utils_ap(itemAttributes, controlAttributes),
			A2(
				elm$core$List$cons,
				A2(
					mdgriffith$elm_ui$Element$el,
					textAttributes,
					QiTASC$hatchinq$Hatchinq$Theme$textWithEllipsis(
						data.toPrimaryText(item))),
				secondaryTextElements));
	});
var QiTASC$hatchinq$Hatchinq$List$view = F3(
	function (config, attributes, data) {
		var externalAttributes = QiTASC$hatchinq$Hatchinq$Attribute$toElement(attributes);
		var defaultInternalConfig = {itemsCount: elm$core$Maybe$Nothing, toControl: elm$core$Maybe$Nothing, toImageSrc: elm$core$Maybe$Nothing, toSecondaryText: elm$core$Maybe$Nothing};
		var internalConfig = A2(QiTASC$hatchinq$Hatchinq$Attribute$toInternalConfig, attributes, defaultInternalConfig);
		var itemHeightPx = function () {
			var _n2 = internalConfig.toImageSrc;
			if (_n2.$ === 'Just') {
				var toImageSrc = _n2.a;
				var _n3 = internalConfig.toSecondaryText;
				if (_n3.$ === 'Just') {
					return 72;
				} else {
					return 56;
				}
			} else {
				var _n4 = internalConfig.toSecondaryText;
				if (_n4.$ === 'Just') {
					return 64;
				} else {
					return 48;
				}
			}
		}();
		var bodyHeightAttribute = A2(
			elm$core$Maybe$withDefault,
			_List_Nil,
			A2(
				elm$core$Maybe$map,
				function (count) {
					return _List_fromArray(
						[
							mdgriffith$elm_ui$Element$height(
							mdgriffith$elm_ui$Element$px((count * itemHeightPx) + 16))
						]);
				},
				internalConfig.itemsCount));
		var bodyAttributes = _List_fromArray(
			[
				A2(mdgriffith$elm_ui$Element$paddingXY, 0, 8),
				mdgriffith$elm_ui$Element$width(
				mdgriffith$elm_ui$Element$px(280))
			]);
		var _n0 = config;
		var theme = _n0.theme;
		var lift = _n0.lift;
		var extraAttributes = function () {
			var _n1 = data.onSelect;
			if (_n1.$ === 'Nothing') {
				return _List_fromArray(
					[
						mdgriffith$elm_ui$Element$htmlAttribute(
						elm$html$Html$Attributes$tabindex(-1)),
						mdgriffith$elm_ui$Element$Events$onLoseFocus(
						lift(
							A2(QiTASC$hatchinq$Hatchinq$List$Select, elm$core$Maybe$Nothing, elm$core$Maybe$Nothing)))
					]);
			} else {
				return _List_Nil;
			}
		}();
		return A2(
			mdgriffith$elm_ui$Element$el,
			_Utils_ap(
				_List_fromArray(
					[mdgriffith$elm_ui$Element$scrollbarY]),
				_Utils_ap(
					bodyAttributes,
					_Utils_ap(
						extraAttributes,
						_Utils_ap(externalAttributes, bodyHeightAttribute)))),
			A2(
				mdgriffith$elm_ui$Element$column,
				_List_fromArray(
					[
						mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
						mdgriffith$elm_ui$Element$height(mdgriffith$elm_ui$Element$fill)
					]),
				A2(
					elm$core$List$map,
					function (item) {
						return A5(QiTASC$hatchinq$Hatchinq$List$listItem, config, internalConfig, data, item, itemHeightPx);
					},
					data.items)));
	});
var QiTASC$hatchinq$Hatchinq$List$configure = function (config) {
	return QiTASC$hatchinq$Hatchinq$List$view(config);
};
var QiTASC$hatchinq$Examples$list = F3(
	function (id, attr, v) {
		return A3(
			QiTASC$hatchinq$Hatchinq$List$configure,
			{
				lift: QiTASC$hatchinq$Examples$ListStateChange(id),
				theme: QiTASC$hatchinq$Examples$theme
			},
			attr,
			v);
	});
var QiTASC$hatchinq$Hatchinq$Paginator$view = F3(
	function (_n0, attributes, data) {
		var theme = _n0.theme;
		var to = A2(
			elm$core$Basics$max,
			A2(elm$core$Basics$min, data.offset + data.rowsPerPage, data.total),
			1);
		var nextPageButtonAttributes = (_Utils_cmp(to, data.total) > -1) ? _List_fromArray(
			[
				mdgriffith$elm_ui$Element$Font$color(theme.colors.gray.color)
			]) : _List_fromArray(
			[
				mdgriffith$elm_ui$Element$pointer,
				mdgriffith$elm_ui$Element$htmlAttribute(
				A2(elm$html$Html$Attributes$attribute, 'tabindex', '0')),
				mdgriffith$elm_ui$Element$htmlAttribute(
				A2(elm$html$Html$Attributes$style, 'border-radius', '50%')),
				mdgriffith$elm_ui$Element$htmlAttribute(
				elm$html$Html$Attributes$class('ripple focusGrayRipple')),
				mdgriffith$elm_ui$Element$focused(
				_List_fromArray(
					[
						mdgriffith$elm_ui$Element$Background$color(theme.colors.gray.lighter)
					])),
				mdgriffith$elm_ui$Element$Events$onClick(data.nextPage),
				A2(QiTASC$hatchinq$Hatchinq$Util$keyDownAttribute, QiTASC$hatchinq$Hatchinq$Util$enterKeyCode, data.nextPage)
			]);
		var from = A2(
			elm$core$Basics$max,
			A2(elm$core$Basics$min, data.offset + 1, data.total),
			1);
		var pagesText = (!data.total) ? ('0-0 of ' + elm$core$String$fromInt(data.total)) : (elm$core$String$fromInt(from) + ('-' + (elm$core$String$fromInt(to) + (' of ' + elm$core$String$fromInt(data.total)))));
		var previousPageButtonAttributes = (from === 1) ? _List_fromArray(
			[
				mdgriffith$elm_ui$Element$Font$color(theme.colors.gray.color)
			]) : _List_fromArray(
			[
				mdgriffith$elm_ui$Element$pointer,
				mdgriffith$elm_ui$Element$htmlAttribute(
				A2(elm$html$Html$Attributes$attribute, 'tabindex', '0')),
				mdgriffith$elm_ui$Element$htmlAttribute(
				A2(elm$html$Html$Attributes$style, 'border-radius', '50%')),
				mdgriffith$elm_ui$Element$htmlAttribute(
				elm$html$Html$Attributes$class('ripple focusGrayRipple')),
				mdgriffith$elm_ui$Element$focused(
				_List_fromArray(
					[
						mdgriffith$elm_ui$Element$Background$color(theme.colors.gray.lighter)
					])),
				mdgriffith$elm_ui$Element$Events$onClick(data.previousPage),
				A2(QiTASC$hatchinq$Hatchinq$Util$keyDownAttribute, QiTASC$hatchinq$Hatchinq$Util$enterKeyCode, data.nextPage)
			]);
		var elementAttributes = QiTASC$hatchinq$Hatchinq$Attribute$toElement(attributes);
		return A2(
			mdgriffith$elm_ui$Element$row,
			_Utils_ap(
				_List_fromArray(
					[
						mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
						mdgriffith$elm_ui$Element$spacing(24),
						mdgriffith$elm_ui$Element$padding(16),
						mdgriffith$elm_ui$Element$Font$family(
						_List_fromArray(
							[theme.font.main])),
						mdgriffith$elm_ui$Element$Font$size(theme.font.smallerSize),
						mdgriffith$elm_ui$Element$Font$color(
						theme.colors.gray.withAlpha(0.54))
					]),
				elementAttributes),
			_List_fromArray(
				[
					A2(
					mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[
							mdgriffith$elm_ui$Element$alignRight,
							mdgriffith$elm_ui$Element$paddingEach(
							{bottom: 0, left: 0, right: 6, top: 0})
						]),
					mdgriffith$elm_ui$Element$text(
						'Rows per page: ' + elm$core$String$fromInt(data.rowsPerPage))),
					A2(
					mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[
							mdgriffith$elm_ui$Element$alignRight,
							mdgriffith$elm_ui$Element$paddingEach(
							{bottom: 0, left: 0, right: 20, top: 0})
						]),
					mdgriffith$elm_ui$Element$text(pagesText)),
					A2(
					mdgriffith$elm_ui$Element$el,
					_Utils_ap(
						_List_fromArray(
							[
								mdgriffith$elm_ui$Element$alignRight,
								mdgriffith$elm_ui$Element$width(
								mdgriffith$elm_ui$Element$px(24)),
								mdgriffith$elm_ui$Element$height(
								mdgriffith$elm_ui$Element$px(24))
							]),
						previousPageButtonAttributes),
					QiTASC$hatchinq$Hatchinq$Theme$icon('chevron_left')),
					A2(
					mdgriffith$elm_ui$Element$el,
					_Utils_ap(
						_List_fromArray(
							[
								mdgriffith$elm_ui$Element$alignRight,
								mdgriffith$elm_ui$Element$width(
								mdgriffith$elm_ui$Element$px(24)),
								mdgriffith$elm_ui$Element$height(
								mdgriffith$elm_ui$Element$px(24))
							]),
						nextPageButtonAttributes),
					QiTASC$hatchinq$Hatchinq$Theme$icon('chevron_right'))
				]));
	});
var QiTASC$hatchinq$Hatchinq$Paginator$configure = function (config) {
	return QiTASC$hatchinq$Hatchinq$Paginator$view(config);
};
var QiTASC$hatchinq$Examples$paginator = QiTASC$hatchinq$Hatchinq$Paginator$configure(
	{theme: QiTASC$hatchinq$Examples$theme});
var QiTASC$hatchinq$Hatchinq$ProgressIndicator$Linear = function (a) {
	return {$: 'Linear', a: a};
};
var QiTASC$hatchinq$Hatchinq$ProgressIndicator$TopDown = {$: 'TopDown'};
var QiTASC$hatchinq$Hatchinq$ProgressIndicator$transitionDelaySeconds = function (internalConfig) {
	return (!internalConfig.visible) ? 0 : internalConfig.startDelaySeconds;
};
var elm$core$Basics$clamp = F3(
	function (low, high, number) {
		return (_Utils_cmp(number, low) < 0) ? low : ((_Utils_cmp(number, high) > 0) ? high : number);
	});
var QiTASC$hatchinq$Hatchinq$ProgressIndicator$circularProgressIndicator = F4(
	function (theme, internalConfig, externalAttributes, _n0) {
		var progress = _n0.progress;
		var progressIndicatorAttributes = (!internalConfig.visible) ? _List_fromArray(
			[
				mdgriffith$elm_ui$Element$htmlAttribute(
				A2(elm$html$Html$Attributes$style, 'opacity', '0'))
			]) : _List_Nil;
		var defaultDeterminateContainerAttributes = _List_fromArray(
			[
				mdgriffith$elm_ui$Element$height(
				mdgriffith$elm_ui$Element$px(45)),
				mdgriffith$elm_ui$Element$width(
				mdgriffith$elm_ui$Element$px(45)),
				mdgriffith$elm_ui$Element$Border$color(theme.colors.secondary.color),
				mdgriffith$elm_ui$Element$htmlAttribute(
				elm$html$Html$Attributes$class('progress-indicator-circular-determinate-container'))
			]);
		var circle = function () {
			if (progress.$ === 'Determinate') {
				var pct = progress.a;
				var pctClamped = A3(elm$core$Basics$clamp, 0, 100, pct);
				return (pctClamped < 50) ? A2(
					mdgriffith$elm_ui$Element$el,
					_Utils_ap(
						_List_fromArray(
							[
								mdgriffith$elm_ui$Element$htmlAttribute(
								elm$html$Html$Attributes$class('lt50'))
							]),
						_Utils_ap(defaultDeterminateContainerAttributes, externalAttributes)),
					A2(
						mdgriffith$elm_ui$Element$el,
						_Utils_ap(
							_List_fromArray(
								[
									mdgriffith$elm_ui$Element$htmlAttribute(
									elm$html$Html$Attributes$class('circle')),
									mdgriffith$elm_ui$Element$htmlAttribute(
									elm$html$Html$Attributes$class('half')),
									mdgriffith$elm_ui$Element$htmlAttribute(
									A2(
										elm$html$Html$Attributes$style,
										'transform',
										'rotate(' + (elm$core$String$fromFloat((pctClamped / 50) * 180) + 'deg)'))),
									mdgriffith$elm_ui$Element$htmlAttribute(
									A2(
										elm$html$Html$Attributes$style,
										'transition',
										'opacity .5s ' + (elm$core$String$fromFloat(
											QiTASC$hatchinq$Hatchinq$ProgressIndicator$transitionDelaySeconds(internalConfig)) + 's')))
								]),
							progressIndicatorAttributes),
						mdgriffith$elm_ui$Element$none)) : ((pctClamped < 100) ? A2(
					mdgriffith$elm_ui$Element$row,
					_Utils_ap(defaultDeterminateContainerAttributes, externalAttributes),
					_List_fromArray(
						[
							A2(
							mdgriffith$elm_ui$Element$el,
							_Utils_ap(
								_List_fromArray(
									[
										mdgriffith$elm_ui$Element$htmlAttribute(
										elm$html$Html$Attributes$class('circle')),
										mdgriffith$elm_ui$Element$htmlAttribute(
										elm$html$Html$Attributes$class('half')),
										mdgriffith$elm_ui$Element$htmlAttribute(
										A2(
											elm$html$Html$Attributes$style,
											'transform',
											'rotate(' + (elm$core$String$fromFloat((pctClamped / 50) * 180) + 'deg)'))),
										mdgriffith$elm_ui$Element$htmlAttribute(
										A2(
											elm$html$Html$Attributes$style,
											'transition',
											'opacity .5s ' + (elm$core$String$fromFloat(
												QiTASC$hatchinq$Hatchinq$ProgressIndicator$transitionDelaySeconds(internalConfig)) + 's')))
									]),
								progressIndicatorAttributes),
							mdgriffith$elm_ui$Element$none),
							A2(
							mdgriffith$elm_ui$Element$el,
							_List_fromArray(
								[
									mdgriffith$elm_ui$Element$htmlAttribute(
									elm$html$Html$Attributes$class('circle')),
									mdgriffith$elm_ui$Element$htmlAttribute(
									elm$html$Html$Attributes$class('half')),
									mdgriffith$elm_ui$Element$htmlAttribute(
									A2(elm$html$Html$Attributes$style, 'transform', 'rotate(180deg)'))
								]),
							mdgriffith$elm_ui$Element$none)
						])) : A2(
					mdgriffith$elm_ui$Element$el,
					_Utils_ap(defaultDeterminateContainerAttributes, externalAttributes),
					A2(
						mdgriffith$elm_ui$Element$el,
						_Utils_ap(
							_List_fromArray(
								[
									mdgriffith$elm_ui$Element$htmlAttribute(
									elm$html$Html$Attributes$class('circle')),
									mdgriffith$elm_ui$Element$htmlAttribute(
									A2(
										elm$html$Html$Attributes$style,
										'transition',
										'all .25s ' + (elm$core$String$fromFloat(
											QiTASC$hatchinq$Hatchinq$ProgressIndicator$transitionDelaySeconds(internalConfig)) + 's')))
								]),
							progressIndicatorAttributes),
						mdgriffith$elm_ui$Element$none)));
			} else {
				return A2(
					mdgriffith$elm_ui$Element$el,
					_Utils_ap(
						_List_fromArray(
							[
								mdgriffith$elm_ui$Element$htmlAttribute(
								elm$html$Html$Attributes$class('progress-indicator-circular-container')),
								mdgriffith$elm_ui$Element$height(
								mdgriffith$elm_ui$Element$px(45)),
								mdgriffith$elm_ui$Element$width(
								mdgriffith$elm_ui$Element$px(45)),
								mdgriffith$elm_ui$Element$Border$color(theme.colors.secondary.color)
							]),
						externalAttributes),
					A2(
						mdgriffith$elm_ui$Element$row,
						_Utils_ap(
							_List_fromArray(
								[
									mdgriffith$elm_ui$Element$htmlAttribute(
									elm$html$Html$Attributes$class('progress-indicator-circular-spinner')),
									mdgriffith$elm_ui$Element$htmlAttribute(
									A2(
										elm$html$Html$Attributes$style,
										'transition',
										'opacity .5s ' + (elm$core$String$fromFloat(
											QiTASC$hatchinq$Hatchinq$ProgressIndicator$transitionDelaySeconds(internalConfig)) + 's')))
								]),
							progressIndicatorAttributes),
						_List_fromArray(
							[
								A2(
								mdgriffith$elm_ui$Element$el,
								_List_fromArray(
									[
										mdgriffith$elm_ui$Element$htmlAttribute(
										elm$html$Html$Attributes$class('circle-clipper')),
										mdgriffith$elm_ui$Element$htmlAttribute(
										elm$html$Html$Attributes$class('left'))
									]),
								A2(
									mdgriffith$elm_ui$Element$el,
									_List_fromArray(
										[
											mdgriffith$elm_ui$Element$htmlAttribute(
											elm$html$Html$Attributes$class('circle'))
										]),
									mdgriffith$elm_ui$Element$none)),
								A2(
								mdgriffith$elm_ui$Element$el,
								_List_fromArray(
									[
										mdgriffith$elm_ui$Element$htmlAttribute(
										elm$html$Html$Attributes$class('gap-patch'))
									]),
								mdgriffith$elm_ui$Element$none),
								A2(
								mdgriffith$elm_ui$Element$el,
								_List_fromArray(
									[
										mdgriffith$elm_ui$Element$htmlAttribute(
										elm$html$Html$Attributes$class('circle-clipper')),
										mdgriffith$elm_ui$Element$htmlAttribute(
										elm$html$Html$Attributes$class('right'))
									]),
								A2(
									mdgriffith$elm_ui$Element$el,
									_List_fromArray(
										[
											mdgriffith$elm_ui$Element$htmlAttribute(
											elm$html$Html$Attributes$class('circle'))
										]),
									mdgriffith$elm_ui$Element$none))
							])));
			}
		}();
		return circle;
	});
var mdgriffith$elm_ui$Element$clipX = A2(mdgriffith$elm_ui$Internal$Model$Class, mdgriffith$elm_ui$Internal$Flag$overflow, mdgriffith$elm_ui$Internal$Style$classes.clipX);
var QiTASC$hatchinq$Hatchinq$ProgressIndicator$linearProgressIndicator = F5(
	function (theme, growthDirection, internalConfig, externalAttributes, _n0) {
		var progress = _n0.progress;
		var transformOrigin = function () {
			if (growthDirection.$ === 'TopDown') {
				return 'top';
			} else {
				return 'bottom';
			}
		}();
		var progressIndicatorAttributes = (!internalConfig.visible) ? _List_fromArray(
			[
				mdgriffith$elm_ui$Element$htmlAttribute(
				A2(elm$html$Html$Attributes$style, 'transform', 'scaleY(0)'))
			]) : _List_Nil;
		var bar = function () {
			if (progress.$ === 'Determinate') {
				var pct = progress.a;
				var pctClamped = A3(elm$core$Basics$clamp, 0, 100, pct);
				return _List_fromArray(
					[
						A2(
						mdgriffith$elm_ui$Element$el,
						_List_fromArray(
							[
								mdgriffith$elm_ui$Element$Background$color(theme.colors.secondary.color),
								mdgriffith$elm_ui$Element$htmlAttribute(
								A2(elm$html$Html$Attributes$style, 'position', 'absolute')),
								mdgriffith$elm_ui$Element$htmlAttribute(
								A2(
									elm$html$Html$Attributes$style,
									'width',
									elm$core$String$fromFloat(pctClamped) + '%')),
								mdgriffith$elm_ui$Element$htmlAttribute(
								A2(elm$html$Html$Attributes$style, 'height', '100%'))
							]),
						mdgriffith$elm_ui$Element$none)
					]);
			} else {
				return _List_fromArray(
					[
						A2(
						mdgriffith$elm_ui$Element$el,
						_List_fromArray(
							[
								mdgriffith$elm_ui$Element$htmlAttribute(
								A2(elm$html$Html$Attributes$style, 'position', 'absolute')),
								mdgriffith$elm_ui$Element$htmlAttribute(
								A2(elm$html$Html$Attributes$style, 'width', '100%')),
								mdgriffith$elm_ui$Element$htmlAttribute(
								A2(elm$html$Html$Attributes$style, 'height', '100%')),
								mdgriffith$elm_ui$Element$htmlAttribute(
								elm$html$Html$Attributes$class('progress-indicator-primary-bar'))
							]),
						A2(
							mdgriffith$elm_ui$Element$el,
							_List_fromArray(
								[
									mdgriffith$elm_ui$Element$Background$color(theme.colors.secondary.color),
									mdgriffith$elm_ui$Element$htmlAttribute(
									A2(elm$html$Html$Attributes$style, 'position', 'absolute')),
									mdgriffith$elm_ui$Element$htmlAttribute(
									A2(elm$html$Html$Attributes$style, 'width', '100%')),
									mdgriffith$elm_ui$Element$htmlAttribute(
									A2(elm$html$Html$Attributes$style, 'height', '100%')),
									mdgriffith$elm_ui$Element$htmlAttribute(
									elm$html$Html$Attributes$class('progress-indicator-primary-bar-inner'))
								]),
							mdgriffith$elm_ui$Element$none)),
						A2(
						mdgriffith$elm_ui$Element$el,
						_List_fromArray(
							[
								mdgriffith$elm_ui$Element$htmlAttribute(
								A2(elm$html$Html$Attributes$style, 'position', 'absolute')),
								mdgriffith$elm_ui$Element$htmlAttribute(
								A2(elm$html$Html$Attributes$style, 'width', '100%')),
								mdgriffith$elm_ui$Element$htmlAttribute(
								A2(elm$html$Html$Attributes$style, 'height', '100%')),
								mdgriffith$elm_ui$Element$htmlAttribute(
								elm$html$Html$Attributes$class('progress-indicator-secondary-bar'))
							]),
						A2(
							mdgriffith$elm_ui$Element$el,
							_List_fromArray(
								[
									mdgriffith$elm_ui$Element$Background$color(theme.colors.secondary.color),
									mdgriffith$elm_ui$Element$htmlAttribute(
									A2(elm$html$Html$Attributes$style, 'position', 'absolute')),
									mdgriffith$elm_ui$Element$htmlAttribute(
									A2(elm$html$Html$Attributes$style, 'width', '100%')),
									mdgriffith$elm_ui$Element$htmlAttribute(
									A2(elm$html$Html$Attributes$style, 'height', '100%')),
									mdgriffith$elm_ui$Element$htmlAttribute(
									elm$html$Html$Attributes$class('progress-indicator-secondary-bar-inner'))
								]),
							mdgriffith$elm_ui$Element$none))
					]);
			}
		}();
		return A2(
			mdgriffith$elm_ui$Element$row,
			_Utils_ap(
				_List_fromArray(
					[
						mdgriffith$elm_ui$Element$height(
						mdgriffith$elm_ui$Element$px(4)),
						mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
						mdgriffith$elm_ui$Element$Background$color(theme.colors.gray.lighter),
						mdgriffith$elm_ui$Element$clipX,
						mdgriffith$elm_ui$Element$htmlAttribute(
						A2(elm$html$Html$Attributes$style, 'transform-origin', transformOrigin)),
						mdgriffith$elm_ui$Element$htmlAttribute(
						A2(
							elm$html$Html$Attributes$style,
							'transition',
							'transform .5s ' + (elm$core$String$fromFloat(
								QiTASC$hatchinq$Hatchinq$ProgressIndicator$transitionDelaySeconds(internalConfig)) + 's')))
					]),
				_Utils_ap(progressIndicatorAttributes, externalAttributes)),
			bar);
	});
var QiTASC$hatchinq$Hatchinq$ProgressIndicator$view = F3(
	function (_n0, attributes, data) {
		var theme = _n0.theme;
		var externalAttributes = QiTASC$hatchinq$Hatchinq$Attribute$toElement(attributes);
		var defaultInternalConfig = {
			progressIndicatorType: QiTASC$hatchinq$Hatchinq$ProgressIndicator$Linear(QiTASC$hatchinq$Hatchinq$ProgressIndicator$TopDown),
			startDelaySeconds: 0,
			visible: true
		};
		var internalConfig = A2(QiTASC$hatchinq$Hatchinq$Attribute$toInternalConfig, attributes, defaultInternalConfig);
		var _n1 = internalConfig.progressIndicatorType;
		if (_n1.$ === 'Linear') {
			var growthDirection = _n1.a;
			return A5(QiTASC$hatchinq$Hatchinq$ProgressIndicator$linearProgressIndicator, theme, growthDirection, internalConfig, externalAttributes, data);
		} else {
			return A4(QiTASC$hatchinq$Hatchinq$ProgressIndicator$circularProgressIndicator, theme, internalConfig, externalAttributes, data);
		}
	});
var QiTASC$hatchinq$Hatchinq$ProgressIndicator$configure = function (config) {
	return QiTASC$hatchinq$Hatchinq$ProgressIndicator$view(config);
};
var QiTASC$hatchinq$Examples$progressIndicator = QiTASC$hatchinq$Hatchinq$ProgressIndicator$configure(
	{theme: QiTASC$hatchinq$Examples$theme});
var QiTASC$hatchinq$Hatchinq$IconButton$White = {$: 'White'};
var QiTASC$hatchinq$Hatchinq$IconButton$white = QiTASC$hatchinq$Hatchinq$Attribute$custom(
	function (v) {
		return _Utils_update(
			v,
			{iconButtonType: QiTASC$hatchinq$Hatchinq$IconButton$White});
	});
var QiTASC$hatchinq$Hatchinq$Snackbar$calculateHeight = function (text) {
	return (elm$core$List$length(
		A2(elm$core$String$split, '\n', text)) > 1) ? 68 : 48;
};
var QiTASC$hatchinq$Hatchinq$Snackbar$getText = function (maybeValue) {
	if (maybeValue.$ === 'Just') {
		var value = maybeValue.a;
		if (value.$ === 'Plain') {
			var text = value.a;
			return A2(QiTASC$hatchinq$Hatchinq$Util$takeFirstNLines, text, 2);
		} else {
			var text = value.a;
			return A2(QiTASC$hatchinq$Hatchinq$Util$takeFirstNLines, text, 2);
		}
	} else {
		return '';
	}
};
var mdgriffith$elm_ui$Internal$Model$Bottom = {$: 'Bottom'};
var mdgriffith$elm_ui$Element$alignBottom = mdgriffith$elm_ui$Internal$Model$AlignY(mdgriffith$elm_ui$Internal$Model$Bottom);
var QiTASC$hatchinq$Hatchinq$Snackbar$view = F3(
	function (_n0, attributes, _n1) {
		var theme = _n0.theme;
		var lift = _n0.lift;
		var state = _n1.state;
		var iconButton = QiTASC$hatchinq$Hatchinq$IconButton$configure(
			{theme: theme});
		var htmlAttributes = state.isOpen ? _List_fromArray(
			[
				mdgriffith$elm_ui$Element$htmlAttribute(
				A2(elm$html$Html$Attributes$style, 'opacity', '1')),
				mdgriffith$elm_ui$Element$htmlAttribute(
				A2(elm$html$Html$Attributes$style, 'transform', 'scale(1)')),
				mdgriffith$elm_ui$Element$htmlAttribute(
				A2(elm$html$Html$Attributes$style, 'transition', 'opacity .25s, transform .25s'))
			]) : _List_fromArray(
			[
				mdgriffith$elm_ui$Element$htmlAttribute(
				A2(elm$html$Html$Attributes$style, 'opacity', '0')),
				mdgriffith$elm_ui$Element$htmlAttribute(
				A2(elm$html$Html$Attributes$style, 'transform', 'scale(0.8)')),
				mdgriffith$elm_ui$Element$htmlAttribute(
				A2(elm$html$Html$Attributes$style, 'transition', 'opacity .25s, transform .25s .25s'))
			]);
		var defaultInternalConfig = {dismissible: false, maximumWidth: 344};
		var internalConfig = A2(QiTASC$hatchinq$Hatchinq$Attribute$toInternalConfig, attributes, defaultInternalConfig);
		var dismissibleButton = internalConfig.dismissible ? A2(
			iconButton,
			_List_fromArray(
				[
					QiTASC$hatchinq$Hatchinq$IconButton$white,
					QiTASC$hatchinq$Hatchinq$Attribute$width(
					mdgriffith$elm_ui$Element$px(36)),
					QiTASC$hatchinq$Hatchinq$Attribute$height(
					mdgriffith$elm_ui$Element$px(36))
				]),
			{
				icon: 'close',
				onPress: elm$core$Maybe$Just(
					A2(QiTASC$hatchinq$Hatchinq$Snackbar$Close, state.id, elm$core$Maybe$Nothing))
			}) : mdgriffith$elm_ui$Element$none;
		var button = QiTASC$hatchinq$Hatchinq$Button$configure(
			{theme: theme});
		var getButton = function (maybeValue) {
			if (maybeValue.$ === 'Just') {
				var value = maybeValue.a;
				return A2(
					mdgriffith$elm_ui$Element$map,
					lift,
					A2(
						mdgriffith$elm_ui$Element$row,
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Element$paddingXY, 8, 0),
								mdgriffith$elm_ui$Element$alignRight
							]),
						_List_fromArray(
							[
								function () {
								if (value.$ === 'Plain') {
									return mdgriffith$elm_ui$Element$none;
								} else {
									var buttonText = value.b;
									var buttonMsg = value.c;
									return A2(
										button,
										_List_fromArray(
											[
												QiTASC$hatchinq$Hatchinq$Button$text,
												QiTASC$hatchinq$Hatchinq$Attribute$width(
												A2(mdgriffith$elm_ui$Element$maximum, 120, mdgriffith$elm_ui$Element$shrink))
											]),
										{
											label: buttonText,
											onPress: elm$core$Maybe$Just(
												A2(
													QiTASC$hatchinq$Hatchinq$Snackbar$Close,
													state.id,
													elm$core$Maybe$Just(buttonMsg)))
										});
								}
							}(),
								dismissibleButton
							])));
			} else {
				return A2(
					mdgriffith$elm_ui$Element$map,
					lift,
					A2(
						mdgriffith$elm_ui$Element$row,
						_List_fromArray(
							[
								A2(mdgriffith$elm_ui$Element$paddingXY, 8, 0),
								mdgriffith$elm_ui$Element$alignRight
							]),
						_List_fromArray(
							[dismissibleButton])));
			}
		};
		return A2(
			mdgriffith$elm_ui$Element$column,
			_List_fromArray(
				[
					mdgriffith$elm_ui$Element$htmlAttribute(
					A2(elm$html$Html$Attributes$style, 'position', 'fixed')),
					mdgriffith$elm_ui$Element$htmlAttribute(
					A2(elm$html$Html$Attributes$style, 'width', '100%')),
					mdgriffith$elm_ui$Element$htmlAttribute(
					A2(elm$html$Html$Attributes$style, 'height', '100%')),
					mdgriffith$elm_ui$Element$htmlAttribute(
					A2(elm$html$Html$Attributes$style, 'top', '0')),
					mdgriffith$elm_ui$Element$htmlAttribute(
					A2(elm$html$Html$Attributes$style, 'left', '0')),
					mdgriffith$elm_ui$Element$htmlAttribute(
					A2(elm$html$Html$Attributes$style, 'pointer-events', 'none')),
					mdgriffith$elm_ui$Element$padding(20)
				]),
			_List_fromArray(
				[
					A2(
					mdgriffith$elm_ui$Element$row,
					_Utils_ap(
						_List_fromArray(
							[
								mdgriffith$elm_ui$Element$height(
								mdgriffith$elm_ui$Element$px(
									QiTASC$hatchinq$Hatchinq$Snackbar$calculateHeight(
										QiTASC$hatchinq$Hatchinq$Snackbar$getText(state.currentValue)))),
								mdgriffith$elm_ui$Element$width(
								A2(
									mdgriffith$elm_ui$Element$maximum,
									internalConfig.maximumWidth,
									A2(mdgriffith$elm_ui$Element$minimum, 344, mdgriffith$elm_ui$Element$shrink))),
								mdgriffith$elm_ui$Element$alignBottom,
								mdgriffith$elm_ui$Element$centerX,
								mdgriffith$elm_ui$Element$Background$color(theme.colors.gray.dark),
								mdgriffith$elm_ui$Element$Border$rounded(4),
								mdgriffith$elm_ui$Element$Border$shadow(
								{
									blur: 3,
									color: A4(mdgriffith$elm_ui$Element$rgba255, 140, 140, 140, 0.74),
									offset: _Utils_Tuple2(0, 3),
									size: 0
								}),
								mdgriffith$elm_ui$Element$Font$color(QiTASC$hatchinq$Hatchinq$Theme$white),
								mdgriffith$elm_ui$Element$Font$family(
								_List_fromArray(
									[theme.font.main])),
								mdgriffith$elm_ui$Element$Font$size(theme.font.smallSize),
								mdgriffith$elm_ui$Element$htmlAttribute(
								A2(elm$html$Html$Attributes$style, 'pointer-events', 'all'))
							]),
						htmlAttributes),
					_List_fromArray(
						[
							A2(
							mdgriffith$elm_ui$Element$el,
							_List_fromArray(
								[
									mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
									mdgriffith$elm_ui$Element$htmlAttribute(
									A2(elm$html$Html$Attributes$style, 'display', 'inline-block')),
									mdgriffith$elm_ui$Element$htmlAttribute(
									A2(elm$html$Html$Attributes$style, 'overflow', 'hidden')),
									mdgriffith$elm_ui$Element$htmlAttribute(
									A2(elm$html$Html$Attributes$style, 'text-overflow', 'ellipsis')),
									mdgriffith$elm_ui$Element$htmlAttribute(
									A2(elm$html$Html$Attributes$style, 'line-height', '1.6')),
									mdgriffith$elm_ui$Element$paddingEach(
									{bottom: 0, left: 16, right: 8, top: 0})
								]),
							mdgriffith$elm_ui$Element$html(
								elm$html$Html$text(
									QiTASC$hatchinq$Hatchinq$Snackbar$getText(state.currentValue)))),
							A2(
							mdgriffith$elm_ui$Element$el,
							_List_fromArray(
								[
									mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$shrink)
								]),
							getButton(state.currentValue))
						]))
				]));
	});
var QiTASC$hatchinq$Hatchinq$Snackbar$configure = function (config) {
	return QiTASC$hatchinq$Hatchinq$Snackbar$view(config);
};
var QiTASC$hatchinq$Examples$snackbar = QiTASC$hatchinq$Hatchinq$Snackbar$configure(
	{lift: QiTASC$hatchinq$Examples$SnackbarLift, theme: QiTASC$hatchinq$Examples$theme});
var QiTASC$hatchinq$Hatchinq$TabBar$Blur = {$: 'Blur'};
var QiTASC$hatchinq$Hatchinq$TabBar$Focus = function (a) {
	return {$: 'Focus', a: a};
};
var QiTASC$hatchinq$Hatchinq$TabBar$SelectTab = F2(
	function (a, b) {
		return {$: 'SelectTab', a: a, b: b};
	});
var QiTASC$hatchinq$Hatchinq$Util$arrowLeftKeyCode = 37;
var QiTASC$hatchinq$Hatchinq$Util$arrowRightKeyCode = 39;
var elm$html$Html$Events$onFocus = function (msg) {
	return A2(
		elm$html$Html$Events$on,
		'focus',
		elm$json$Json$Decode$succeed(msg));
};
var mdgriffith$elm_ui$Element$Events$onFocus = A2(elm$core$Basics$composeL, mdgriffith$elm_ui$Internal$Model$Attr, elm$html$Html$Events$onFocus);
var QiTASC$hatchinq$Hatchinq$TabBar$view = F3(
	function (_n0, attributes, _n1) {
		var lift = _n0.lift;
		var theme = _n0.theme;
		var state = _n1.state;
		var tabButtons = _n1.tabButtons;
		var selectedTab = _n1.selectedTab;
		var onTabSelect = _n1.onTabSelect;
		var textContent = function (text) {
			return A2(
				mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[
						mdgriffith$elm_ui$Element$width(
						A2(mdgriffith$elm_ui$Element$minimum, 90, mdgriffith$elm_ui$Element$fill)),
						mdgriffith$elm_ui$Element$Font$center,
						mdgriffith$elm_ui$Element$centerY,
						A2(mdgriffith$elm_ui$Element$paddingXY, 16, 0)
					]),
				QiTASC$hatchinq$Hatchinq$Theme$textWithEllipsis(text));
		};
		var iconContent = function (iconName) {
			return A2(
				mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[
						mdgriffith$elm_ui$Element$width(
						A2(mdgriffith$elm_ui$Element$minimum, 90, mdgriffith$elm_ui$Element$fill)),
						mdgriffith$elm_ui$Element$Font$center,
						mdgriffith$elm_ui$Element$centerY,
						A2(mdgriffith$elm_ui$Element$paddingXY, 16, 0)
					]),
				QiTASC$hatchinq$Hatchinq$Theme$icon(iconName));
		};
		var iconAndTextContent = F2(
			function (iconName, text) {
				return A2(
					mdgriffith$elm_ui$Element$column,
					_List_fromArray(
						[
							mdgriffith$elm_ui$Element$width(
							A2(mdgriffith$elm_ui$Element$minimum, 90, mdgriffith$elm_ui$Element$fill)),
							mdgriffith$elm_ui$Element$Font$center,
							mdgriffith$elm_ui$Element$centerY,
							A2(mdgriffith$elm_ui$Element$paddingXY, 16, 0)
						]),
					_List_fromArray(
						[
							A2(
							mdgriffith$elm_ui$Element$el,
							_List_fromArray(
								[
									mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
									A2(mdgriffith$elm_ui$Element$paddingXY, 0, 6)
								]),
							QiTASC$hatchinq$Hatchinq$Theme$icon(iconName)),
							QiTASC$hatchinq$Hatchinq$Theme$textWithEllipsis(text)
						]));
			});
		var findSelectedTabIndex = function (list) {
			return elm$core$List$head(
				A2(
					elm$core$List$filterMap,
					function (_n15) {
						var index = _n15.a;
						var tab = _n15.b;
						return _Utils_eq(tab, selectedTab) ? elm$core$Maybe$Just(index) : elm$core$Maybe$Nothing;
					},
					list));
		};
		var elementAttributes = QiTASC$hatchinq$Hatchinq$Attribute$toElement(attributes);
		var defaultElementAttributes = _Utils_ap(
			_List_fromArray(
				[
					mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$shrink)
				]),
			function () {
				if (tabButtons.$ === 'IconAndText') {
					return _List_fromArray(
						[
							mdgriffith$elm_ui$Element$height(
							mdgriffith$elm_ui$Element$px(72))
						]);
				} else {
					return _List_fromArray(
						[
							mdgriffith$elm_ui$Element$height(
							mdgriffith$elm_ui$Element$px(48))
						]);
				}
			}());
		var contentElement = F3(
			function (content, index, tab) {
				return A2(
					mdgriffith$elm_ui$Element$el,
					_Utils_ap(
						_List_fromArray(
							[
								mdgriffith$elm_ui$Element$width(
								A2(mdgriffith$elm_ui$Element$maximum, 360, mdgriffith$elm_ui$Element$shrink)),
								mdgriffith$elm_ui$Element$height(mdgriffith$elm_ui$Element$fill),
								mdgriffith$elm_ui$Element$inFront(
								A2(
									mdgriffith$elm_ui$Element$el,
									_List_fromArray(
										[
											mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
											mdgriffith$elm_ui$Element$height(mdgriffith$elm_ui$Element$fill),
											mdgriffith$elm_ui$Element$htmlAttribute(
											elm$html$Html$Attributes$class('ripple focusPrimaryRipple'))
										]),
									A2(
										mdgriffith$elm_ui$Element$el,
										_List_fromArray(
											[
												mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
												mdgriffith$elm_ui$Element$height(
												mdgriffith$elm_ui$Element$px(2)),
												mdgriffith$elm_ui$Element$alignBottom,
												mdgriffith$elm_ui$Element$Background$color(theme.colors.primary.color),
												mdgriffith$elm_ui$Element$htmlAttribute(
												A2(elm$html$Html$Attributes$style, 'transition', 'all 0.25s')),
												mdgriffith$elm_ui$Element$htmlAttribute(
												A2(elm$html$Html$Attributes$style, 'will-change', 'transform')),
												_Utils_eq(tab, selectedTab) ? mdgriffith$elm_ui$Element$htmlAttribute(
												A2(elm$html$Html$Attributes$style, 'transform', 'scaleY(1)')) : mdgriffith$elm_ui$Element$htmlAttribute(
												A2(elm$html$Html$Attributes$style, 'transform', 'scaleY(0)'))
											]),
										mdgriffith$elm_ui$Element$none))),
								mdgriffith$elm_ui$Element$Events$onClick(
								lift(
									A2(
										QiTASC$hatchinq$Hatchinq$TabBar$SelectTab,
										index,
										onTabSelect(tab))))
							]),
						_Utils_ap(
							_Utils_eq(tab, selectedTab) ? _List_fromArray(
								[
									mdgriffith$elm_ui$Element$Font$color(theme.colors.primary.color)
								]) : _List_fromArray(
								[
									mdgriffith$elm_ui$Element$Font$color(theme.colors.gray.dark)
								]),
							_Utils_eq(index, state.focused) ? _List_fromArray(
								[
									mdgriffith$elm_ui$Element$Background$color(theme.colors.primary.lighter)
								]) : _List_fromArray(
								[
									mdgriffith$elm_ui$Element$mouseOver(
									_List_fromArray(
										[
											mdgriffith$elm_ui$Element$Background$color(theme.colors.primary.lightest)
										]))
								]))),
					content);
			});
		var _n2 = function () {
			switch (tabButtons.$) {
				case 'TextOnly':
					var textItems = tabButtons.a;
					return _Utils_Tuple3(
						A2(
							elm$core$List$indexedMap,
							F2(
								function (index, _n4) {
									var text = _n4.a;
									var tab = _n4.b;
									return A3(
										contentElement,
										textContent(text),
										index,
										tab);
								}),
							textItems),
						A2(
							elm$core$Maybe$map,
							function (_n5) {
								var tab = _n5.b;
								return tab;
							},
							A2(
								elm$core$Array$get,
								state.focused,
								elm$core$Array$fromList(textItems))),
						findSelectedTabIndex(
							A2(
								elm$core$List$indexedMap,
								F2(
									function (index, _n6) {
										var tab = _n6.b;
										return _Utils_Tuple2(index, tab);
									}),
								textItems)));
				case 'IconOnly':
					var iconItems = tabButtons.a;
					return _Utils_Tuple3(
						A2(
							elm$core$List$indexedMap,
							F2(
								function (index, _n7) {
									var iconName = _n7.a;
									var tab = _n7.b;
									return A3(
										contentElement,
										iconContent(iconName),
										index,
										tab);
								}),
							iconItems),
						A2(
							elm$core$Maybe$map,
							function (_n8) {
								var tab = _n8.b;
								return tab;
							},
							A2(
								elm$core$Array$get,
								state.focused,
								elm$core$Array$fromList(iconItems))),
						findSelectedTabIndex(
							A2(
								elm$core$List$indexedMap,
								F2(
									function (index, _n9) {
										var tab = _n9.b;
										return _Utils_Tuple2(index, tab);
									}),
								iconItems)));
				default:
					var items = tabButtons.a;
					return _Utils_Tuple3(
						A2(
							elm$core$List$indexedMap,
							F2(
								function (index, _n10) {
									var iconName = _n10.a;
									var text = _n10.b;
									var tab = _n10.c;
									return A3(
										contentElement,
										A2(iconAndTextContent, iconName, text),
										index,
										tab);
								}),
							items),
						A2(
							elm$core$Maybe$map,
							function (_n11) {
								var tab = _n11.c;
								return tab;
							},
							A2(
								elm$core$Array$get,
								state.focused,
								elm$core$Array$fromList(items))),
						findSelectedTabIndex(
							A2(
								elm$core$List$indexedMap,
								F2(
									function (index, _n12) {
										var tab = _n12.c;
										return _Utils_Tuple2(index, tab);
									}),
								items)));
			}
		}();
		var buttons = _n2.a;
		var maybeFocusedTab = _n2.b;
		var selectedTabIndex = _n2.c;
		var buttonsCount = elm$core$List$length(buttons);
		var keyDownAttributes = _List_fromArray(
			[
				QiTASC$hatchinq$Hatchinq$Util$keysDownAttribute(
				elm$core$Dict$fromList(
					_Utils_ap(
						_List_fromArray(
							[
								_Utils_Tuple2(
								QiTASC$hatchinq$Hatchinq$Util$arrowLeftKeyCode,
								lift(
									QiTASC$hatchinq$Hatchinq$TabBar$Focus(
										(state.focused <= 1) ? 0 : (state.focused - 1)))),
								_Utils_Tuple2(
								QiTASC$hatchinq$Hatchinq$Util$arrowRightKeyCode,
								lift(
									QiTASC$hatchinq$Hatchinq$TabBar$Focus(
										(_Utils_cmp(state.focused, buttonsCount - 1) > -1) ? (buttonsCount - 1) : (state.focused + 1))))
							]),
						function () {
							if (maybeFocusedTab.$ === 'Just') {
								var focusedTab = maybeFocusedTab.a;
								return _List_fromArray(
									[
										_Utils_Tuple2(
										QiTASC$hatchinq$Hatchinq$Util$enterKeyCode,
										lift(
											A2(
												QiTASC$hatchinq$Hatchinq$TabBar$SelectTab,
												state.focused,
												onTabSelect(focusedTab))))
									]);
							} else {
								return _List_Nil;
							}
						}())))
			]);
		return A2(
			mdgriffith$elm_ui$Element$row,
			_Utils_ap(
				_List_fromArray(
					[
						mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
						mdgriffith$elm_ui$Element$Font$family(
						_List_fromArray(
							[theme.font.main])),
						mdgriffith$elm_ui$Element$Font$size(14),
						mdgriffith$elm_ui$Element$Font$bold,
						mdgriffith$elm_ui$Element$htmlAttribute(
						A2(elm$html$Html$Attributes$style, 'text-transform', 'uppercase')),
						mdgriffith$elm_ui$Element$htmlAttribute(
						A2(elm$html$Html$Attributes$attribute, 'tabindex', '0')),
						mdgriffith$elm_ui$Element$Events$onFocus(
						lift(
							QiTASC$hatchinq$Hatchinq$TabBar$Focus(
								A2(elm$core$Maybe$withDefault, 0, selectedTabIndex)))),
						mdgriffith$elm_ui$Element$Events$onLoseFocus(
						lift(QiTASC$hatchinq$Hatchinq$TabBar$Blur))
					]),
				_Utils_ap(
					keyDownAttributes,
					_Utils_ap(defaultElementAttributes, elementAttributes))),
			buttons);
	});
var QiTASC$hatchinq$Hatchinq$TabBar$configure = function (config) {
	return QiTASC$hatchinq$Hatchinq$TabBar$view(config);
};
var QiTASC$hatchinq$Examples$tabBar = QiTASC$hatchinq$Hatchinq$TabBar$configure(
	{lift: QiTASC$hatchinq$Examples$TabBarLift, theme: QiTASC$hatchinq$Examples$theme});
var QiTASC$hatchinq$Examples$InputStateChange = function (a) {
	return {$: 'InputStateChange', a: a};
};
var QiTASC$hatchinq$Hatchinq$TextField$Blur = function (a) {
	return {$: 'Blur', a: a};
};
var QiTASC$hatchinq$Hatchinq$TextField$Focus = function (a) {
	return {$: 'Focus', a: a};
};
var QiTASC$hatchinq$Hatchinq$TextField$Impossible = function (a) {
	return {$: 'Impossible', a: a};
};
var mdgriffith$elm_ui$Element$Input$Above = {$: 'Above'};
var mdgriffith$elm_ui$Element$Input$Label = F3(
	function (a, b, c) {
		return {$: 'Label', a: a, b: b, c: c};
	});
var mdgriffith$elm_ui$Element$Input$labelAbove = mdgriffith$elm_ui$Element$Input$Label(mdgriffith$elm_ui$Element$Input$Above);
var mdgriffith$elm_ui$Element$Input$multiline = F2(
	function (attrs, multi) {
		return A3(
			mdgriffith$elm_ui$Element$Input$textHelper,
			{autofill: elm$core$Maybe$Nothing, spellchecked: multi.spellcheck, type_: mdgriffith$elm_ui$Element$Input$TextArea},
			attrs,
			{label: multi.label, onChange: multi.onChange, placeholder: multi.placeholder, text: multi.text});
	});
var QiTASC$hatchinq$Hatchinq$TextField$view = F3(
	function (_n0, attributes, _n1) {
		var theme = _n0.theme;
		var lift = _n0.lift;
		var id = _n1.id;
		var label = _n1.label;
		var value = _n1.value;
		var state = _n1.state;
		var onChange = _n1.onChange;
		var standardLabelAttributes = _List_fromArray(
			[
				mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
				mdgriffith$elm_ui$Element$height(mdgriffith$elm_ui$Element$shrink),
				mdgriffith$elm_ui$Element$Font$family(
				_List_fromArray(
					[
						mdgriffith$elm_ui$Element$Font$typeface('Avenir')
					])),
				mdgriffith$elm_ui$Element$Font$size(16),
				mdgriffith$elm_ui$Element$htmlAttribute(
				A2(elm$html$Html$Attributes$style, 'transition', 'all .2s ease')),
				mdgriffith$elm_ui$Element$htmlAttribute(
				A2(elm$html$Html$Attributes$style, 'transform-origin', 'top left')),
				mdgriffith$elm_ui$Element$htmlAttribute(
				A2(elm$html$Html$Attributes$style, 'pointer-events', 'none')),
				mdgriffith$elm_ui$Element$htmlAttribute(
				A2(elm$html$Html$Attributes$style, '-webkit-font-smoothing', 'antialiased'))
			]);
		var isDisabled = _Utils_eq(onChange, elm$core$Maybe$Nothing);
		var labelAttributes = _Utils_eq(
			state,
			QiTASC$hatchinq$Hatchinq$TextField$InternalState(
				elm$core$Maybe$Just(id))) ? A2(
			elm$core$List$cons,
			A2(mdgriffith$elm_ui$Element$paddingXY, 16, 8),
			A2(
				elm$core$List$cons,
				mdgriffith$elm_ui$Element$Font$color(theme.colors.secondary.color),
				A2(
					elm$core$List$cons,
					mdgriffith$elm_ui$Element$htmlAttribute(
						A2(elm$html$Html$Attributes$style, 'transform', 'scale(0.75)')),
					standardLabelAttributes))) : ((value !== '') ? A2(
			elm$core$List$cons,
			A2(mdgriffith$elm_ui$Element$paddingXY, 16, 8),
			A2(
				elm$core$List$cons,
				mdgriffith$elm_ui$Element$Font$color(
					isDisabled ? theme.colors.gray.color : theme.colors.gray.dark),
				A2(
					elm$core$List$cons,
					mdgriffith$elm_ui$Element$htmlAttribute(
						A2(elm$html$Html$Attributes$style, 'transform', 'scale(0.75)')),
					standardLabelAttributes))) : A2(
			elm$core$List$cons,
			A2(mdgriffith$elm_ui$Element$paddingXY, 12, 20),
			A2(
				elm$core$List$cons,
				mdgriffith$elm_ui$Element$Font$color(
					isDisabled ? theme.colors.gray.color : theme.colors.gray.dark),
				standardLabelAttributes)));
		var labelElement = A2(
			mdgriffith$elm_ui$Element$el,
			labelAttributes,
			mdgriffith$elm_ui$Element$text(label));
		var focusedAttributes = ((!isDisabled) && _Utils_eq(
			state,
			QiTASC$hatchinq$Hatchinq$TextField$InternalState(
				elm$core$Maybe$Just(id)))) ? _List_fromArray(
			[
				mdgriffith$elm_ui$Element$Background$color(theme.colors.gray.lighter),
				mdgriffith$elm_ui$Element$Border$color(theme.colors.secondary.color)
			]) : _List_Nil;
		var defaultInternalConfig = {multiline: false};
		var internalConfig = A2(QiTASC$hatchinq$Hatchinq$Attribute$toInternalConfig, attributes, defaultInternalConfig);
		var inputAttributes = _List_fromArray(
			[
				mdgriffith$elm_ui$Element$Events$onFocus(
				lift(
					QiTASC$hatchinq$Hatchinq$TextField$Focus(id))),
				mdgriffith$elm_ui$Element$Events$onLoseFocus(
				lift(
					QiTASC$hatchinq$Hatchinq$TextField$Blur(id))),
				mdgriffith$elm_ui$Element$height(mdgriffith$elm_ui$Element$fill),
				mdgriffith$elm_ui$Element$Background$color(QiTASC$hatchinq$Hatchinq$Theme$transparent),
				mdgriffith$elm_ui$Element$Border$width(0),
				mdgriffith$elm_ui$Element$focused(_List_Nil),
				mdgriffith$elm_ui$Element$htmlAttribute(
				elm$html$Html$Attributes$disabled(isDisabled)),
				mdgriffith$elm_ui$Element$paddingEach(
				{
					bottom: 10,
					left: 12,
					right: 12,
					top: internalConfig.multiline ? 3 : 6
				})
			]);
		return A2(
			mdgriffith$elm_ui$Element$el,
			_Utils_ap(
				_List_fromArray(
					[
						mdgriffith$elm_ui$Element$Background$color(theme.colors.gray.lighter),
						mdgriffith$elm_ui$Element$Border$roundEach(
						{bottomLeft: 0, bottomRight: 0, topLeft: 4, topRight: 4}),
						mdgriffith$elm_ui$Element$Border$widthEach(
						{bottom: 2, left: 0, right: 0, top: 0}),
						mdgriffith$elm_ui$Element$Border$color(
						isDisabled ? QiTASC$hatchinq$Hatchinq$Theme$transparent : theme.colors.gray.color),
						mdgriffith$elm_ui$Element$Font$family(
						_List_fromArray(
							[theme.font.main])),
						mdgriffith$elm_ui$Element$Font$color(
						isDisabled ? theme.colors.gray.withAlpha(0.48) : QiTASC$hatchinq$Hatchinq$Theme$black),
						mdgriffith$elm_ui$Element$Font$size(16),
						mdgriffith$elm_ui$Element$width(
						mdgriffith$elm_ui$Element$px(280)),
						mdgriffith$elm_ui$Element$height(
						mdgriffith$elm_ui$Element$px(56)),
						mdgriffith$elm_ui$Element$mouseOver(
						(isDisabled || _Utils_eq(
							state,
							QiTASC$hatchinq$Hatchinq$TextField$InternalState(
								elm$core$Maybe$Just(id)))) ? _List_Nil : A2(
							elm$core$List$cons,
							mdgriffith$elm_ui$Element$Background$color(theme.colors.gray.light),
							A2(
								elm$core$List$cons,
								mdgriffith$elm_ui$Element$Border$color(theme.colors.gray.color),
								_List_Nil))),
						mdgriffith$elm_ui$Element$inFront(labelElement),
						mdgriffith$elm_ui$Element$htmlAttribute(
						elm$html$Html$Attributes$disabled(isDisabled)),
						mdgriffith$elm_ui$Element$paddingEach(
						{bottom: 4, left: 0, right: 0, top: 20})
					]),
				_Utils_ap(
					focusedAttributes,
					QiTASC$hatchinq$Hatchinq$Attribute$toElement(attributes))),
			internalConfig.multiline ? A2(
				mdgriffith$elm_ui$Element$Input$multiline,
				_Utils_ap(
					_List_fromArray(
						[
							mdgriffith$elm_ui$Element$htmlAttribute(
							A2(elm$html$Html$Attributes$attribute, 'rows', '1'))
						]),
					inputAttributes),
				{
					label: A2(mdgriffith$elm_ui$Element$Input$labelAbove, _List_Nil, mdgriffith$elm_ui$Element$none),
					onChange: A2(
						elm$core$Maybe$withDefault,
						A2(elm$core$Basics$composeL, lift, QiTASC$hatchinq$Hatchinq$TextField$Impossible),
						onChange),
					placeholder: elm$core$Maybe$Nothing,
					spellcheck: false,
					text: value
				}) : A2(
				mdgriffith$elm_ui$Element$Input$text,
				inputAttributes,
				{
					label: mdgriffith$elm_ui$Element$Input$labelHidden(label),
					onChange: A2(
						elm$core$Maybe$withDefault,
						A2(elm$core$Basics$composeL, lift, QiTASC$hatchinq$Hatchinq$TextField$Impossible),
						onChange),
					placeholder: elm$core$Maybe$Nothing,
					text: value
				}));
	});
var QiTASC$hatchinq$Hatchinq$TextField$configure = function (config) {
	return QiTASC$hatchinq$Hatchinq$TextField$view(config);
};
var QiTASC$hatchinq$Examples$textField = QiTASC$hatchinq$Hatchinq$TextField$configure(
	{lift: QiTASC$hatchinq$Examples$InputStateChange, theme: QiTASC$hatchinq$Examples$theme});
var QiTASC$hatchinq$Hatchinq$Attribute$Id = function (a) {
	return {$: 'Id', a: a};
};
var QiTASC$hatchinq$Hatchinq$Attribute$id = function (idString) {
	return QiTASC$hatchinq$Hatchinq$Attribute$Id(idString);
};
var QiTASC$hatchinq$Hatchinq$Card$Icon = function (a) {
	return {$: 'Icon', a: a};
};
var QiTASC$hatchinq$Hatchinq$Card$Image = function (a) {
	return {$: 'Image', a: a};
};
var QiTASC$hatchinq$Hatchinq$Card$MediaTop = {$: 'MediaTop'};
var QiTASC$hatchinq$Hatchinq$Card$expandable = QiTASC$hatchinq$Hatchinq$Attribute$custom(
	function (v) {
		return _Utils_update(
			v,
			{expandable: true});
	});
var QiTASC$hatchinq$Hatchinq$Card$layout = function (msg) {
	return QiTASC$hatchinq$Hatchinq$Attribute$custom(
		function (v) {
			return _Utils_update(
				v,
				{layout: msg});
		});
};
var QiTASC$hatchinq$Hatchinq$DataTable$Column = function (a) {
	return {$: 'Column', a: a};
};
var QiTASC$hatchinq$Hatchinq$DataTable$column = F3(
	function (header, width, toElement) {
		return QiTASC$hatchinq$Hatchinq$DataTable$Column(
			{header: header, sorter: elm$core$Maybe$Nothing, viewFunc: toElement, width: width});
	});
var QiTASC$hatchinq$Hatchinq$DataTable$expansion = F3(
	function (expandable, expand, expandedContent) {
		return QiTASC$hatchinq$Hatchinq$Attribute$custom(
			function (v) {
				return _Utils_update(
					v,
					{
						expansion: elm$core$Maybe$Just(
							_Utils_Tuple3(expandable, expand, expandedContent))
					});
			});
	});
var QiTASC$hatchinq$Hatchinq$DataTable$Update = function (a) {
	return {$: 'Update', a: a};
};
var QiTASC$hatchinq$Hatchinq$DataTable$externalSortableColumn = F4(
	function (header, width, toElement, sorter) {
		return QiTASC$hatchinq$Hatchinq$DataTable$Column(
			{
				header: header,
				sorter: elm$core$Maybe$Just(
					QiTASC$hatchinq$Hatchinq$DataTable$Update(sorter)),
				viewFunc: toElement,
				width: width
			});
	});
var QiTASC$hatchinq$Hatchinq$DataTable$Infinite = function (a) {
	return {$: 'Infinite', a: a};
};
var QiTASC$hatchinq$Hatchinq$DataTable$infinite = function (infiniteView) {
	return QiTASC$hatchinq$Hatchinq$Attribute$custom(
		function (v) {
			return _Utils_update(
				v,
				{
					dataTableType: QiTASC$hatchinq$Hatchinq$DataTable$Infinite(infiniteView)
				});
		});
};
var QiTASC$hatchinq$Hatchinq$DataTable$selection = F3(
	function (selectable, select, selectAll) {
		return QiTASC$hatchinq$Hatchinq$Attribute$custom(
			function (v) {
				return _Utils_update(
					v,
					{
						selection: elm$core$Maybe$Just(
							_Utils_Tuple3(selectable, select, selectAll))
					});
			});
	});
var QiTASC$hatchinq$Hatchinq$DataTable$Lambda = function (a) {
	return {$: 'Lambda', a: a};
};
var QiTASC$hatchinq$Hatchinq$DataTable$sortableColumn = F4(
	function (header, width, toElement, sorter) {
		return QiTASC$hatchinq$Hatchinq$DataTable$Column(
			{
				header: header,
				sorter: elm$core$Maybe$Just(
					QiTASC$hatchinq$Hatchinq$DataTable$Lambda(sorter)),
				viewFunc: toElement,
				width: width
			});
	});
var QiTASC$hatchinq$Hatchinq$Divider$withColor = function (color) {
	return QiTASC$hatchinq$Hatchinq$Attribute$custom(
		function (v) {
			return _Utils_update(
				v,
				{color: color});
		});
};
var QiTASC$hatchinq$Hatchinq$DropDown$dropDownCount = function (count) {
	return QiTASC$hatchinq$Hatchinq$Attribute$custom(
		function (v) {
			return _Utils_update(
				v,
				{dropDownCount: count});
		});
};
var QiTASC$hatchinq$Hatchinq$DropDown$label = function (labelString) {
	return QiTASC$hatchinq$Hatchinq$Attribute$custom(
		function (v) {
			return _Utils_update(
				v,
				{
					label: elm$core$Maybe$Just(labelString)
				});
		});
};
var QiTASC$hatchinq$Hatchinq$DropDown$Outlined = {$: 'Outlined'};
var QiTASC$hatchinq$Hatchinq$DropDown$outlined = QiTASC$hatchinq$Hatchinq$Attribute$custom(
	function (v) {
		return _Utils_update(
			v,
			{dropDownType: QiTASC$hatchinq$Hatchinq$DropDown$Outlined});
	});
var QiTASC$hatchinq$Hatchinq$IconButton$stopPropagation = QiTASC$hatchinq$Hatchinq$Attribute$custom(
	function (v) {
		return _Utils_update(
			v,
			{stopPropagation: true});
	});
var QiTASC$hatchinq$Hatchinq$IconButton$withTextColor = function (color) {
	return QiTASC$hatchinq$Hatchinq$Attribute$custom(
		function (v) {
			return _Utils_update(
				v,
				{
					textColor: elm$core$Maybe$Just(color)
				});
		});
};
var QiTASC$hatchinq$Hatchinq$List$control = function (toControl) {
	return QiTASC$hatchinq$Hatchinq$Attribute$custom(
		function (v) {
			return _Utils_update(
				v,
				{
					toControl: elm$core$Maybe$Just(toControl)
				});
		});
};
var QiTASC$hatchinq$Hatchinq$List$imageSrc = function (toImageSrc) {
	return QiTASC$hatchinq$Hatchinq$Attribute$custom(
		function (v) {
			return _Utils_update(
				v,
				{
					toImageSrc: elm$core$Maybe$Just(toImageSrc)
				});
		});
};
var QiTASC$hatchinq$Hatchinq$List$itemsCount = function (n) {
	return QiTASC$hatchinq$Hatchinq$Attribute$custom(
		function (v) {
			return _Utils_update(
				v,
				{
					itemsCount: elm$core$Maybe$Just(n)
				});
		});
};
var QiTASC$hatchinq$Hatchinq$List$secondaryText = function (toSecondaryText) {
	return QiTASC$hatchinq$Hatchinq$Attribute$custom(
		function (v) {
			return _Utils_update(
				v,
				{
					toSecondaryText: elm$core$Maybe$Just(toSecondaryText)
				});
		});
};
var QiTASC$hatchinq$Hatchinq$ProgressIndicator$BottomUp = {$: 'BottomUp'};
var QiTASC$hatchinq$Hatchinq$ProgressIndicator$Circular = {$: 'Circular'};
var QiTASC$hatchinq$Hatchinq$ProgressIndicator$circular = QiTASC$hatchinq$Hatchinq$Attribute$custom(
	function (v) {
		return _Utils_update(
			v,
			{progressIndicatorType: QiTASC$hatchinq$Hatchinq$ProgressIndicator$Circular});
	});
var QiTASC$hatchinq$Hatchinq$ProgressIndicator$linear = function (growthDirection) {
	return QiTASC$hatchinq$Hatchinq$Attribute$custom(
		function (v) {
			return _Utils_update(
				v,
				{
					progressIndicatorType: QiTASC$hatchinq$Hatchinq$ProgressIndicator$Linear(growthDirection)
				});
		});
};
var QiTASC$hatchinq$Hatchinq$ProgressIndicator$startDelaySeconds = function (seconds) {
	return QiTASC$hatchinq$Hatchinq$Attribute$custom(
		function (v) {
			return _Utils_update(
				v,
				{startDelaySeconds: seconds});
		});
};
var QiTASC$hatchinq$Hatchinq$ProgressIndicator$visibility = function (visible) {
	return QiTASC$hatchinq$Hatchinq$Attribute$custom(
		function (v) {
			return _Utils_update(
				v,
				{visible: visible});
		});
};
var QiTASC$hatchinq$Hatchinq$Snackbar$Plain = function (a) {
	return {$: 'Plain', a: a};
};
var QiTASC$hatchinq$Hatchinq$Snackbar$WithAction = F3(
	function (a, b, c) {
		return {$: 'WithAction', a: a, b: b, c: c};
	});
var QiTASC$hatchinq$Hatchinq$Snackbar$dismissible = QiTASC$hatchinq$Hatchinq$Attribute$custom(
	function (v) {
		return _Utils_update(
			v,
			{dismissible: true});
	});
var QiTASC$hatchinq$Hatchinq$TabBar$IconAndText = function (a) {
	return {$: 'IconAndText', a: a};
};
var QiTASC$hatchinq$Hatchinq$TabBar$IconOnly = function (a) {
	return {$: 'IconOnly', a: a};
};
var QiTASC$hatchinq$Hatchinq$TabBar$TextOnly = function (a) {
	return {$: 'TextOnly', a: a};
};
var QiTASC$hatchinq$Hatchinq$TextField$multiline = QiTASC$hatchinq$Hatchinq$Attribute$custom(
	function (v) {
		return _Utils_update(
			v,
			{multiline: true});
	});
var mdgriffith$elm_ui$Internal$Model$Paragraph = {$: 'Paragraph'};
var mdgriffith$elm_ui$Element$paragraph = F2(
	function (attrs, children) {
		return A4(
			mdgriffith$elm_ui$Internal$Model$element,
			mdgriffith$elm_ui$Internal$Model$asParagraph,
			mdgriffith$elm_ui$Internal$Model$div,
			A2(
				elm$core$List$cons,
				mdgriffith$elm_ui$Internal$Model$Describe(mdgriffith$elm_ui$Internal$Model$Paragraph),
				A2(
					elm$core$List$cons,
					mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
					A2(
						elm$core$List$cons,
						mdgriffith$elm_ui$Element$spacing(5),
						attrs))),
			mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
	});
var mdgriffith$elm_ui$Element$scrollbarX = A2(mdgriffith$elm_ui$Internal$Model$Class, mdgriffith$elm_ui$Internal$Flag$overflow, mdgriffith$elm_ui$Internal$Style$classes.scrollbarsX);
var QiTASC$hatchinq$Examples$mainContent = function (model) {
	return A2(
		mdgriffith$elm_ui$Element$column,
		_List_fromArray(
			[
				mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
				mdgriffith$elm_ui$Element$height(
				mdgriffith$elm_ui$Element$px(model.windowSize.b - QiTASC$hatchinq$Hatchinq$AppBar$appBarHeight)),
				mdgriffith$elm_ui$Element$padding(20),
				mdgriffith$elm_ui$Element$spacing(8),
				mdgriffith$elm_ui$Element$alignTop,
				mdgriffith$elm_ui$Element$scrollbars
			]),
		_List_fromArray(
			[
				A2(
				mdgriffith$elm_ui$Element$row,
				_List_fromArray(
					[
						mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
						mdgriffith$elm_ui$Element$spacing(16)
					]),
				_List_fromArray(
					[
						A2(
						QiTASC$hatchinq$Examples$tabBar,
						_List_Nil,
						{
							onTabSelect: QiTASC$hatchinq$Examples$TabBarSelect,
							selectedTab: model.selectedTab,
							state: model.tabBarState,
							tabButtons: QiTASC$hatchinq$Hatchinq$TabBar$IconAndText(
								_List_fromArray(
									[
										_Utils_Tuple3('menu', 'Main', QiTASC$hatchinq$Examples$MainTab),
										_Utils_Tuple3('settings', 'Settings / Preferences', QiTASC$hatchinq$Examples$SettingsTab),
										_Utils_Tuple3('info', 'Very large tab name that doesn\'t fit into the box', QiTASC$hatchinq$Examples$CustomTab)
									]))
						})
					])),
				A2(
				mdgriffith$elm_ui$Element$row,
				_List_fromArray(
					[
						mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
						mdgriffith$elm_ui$Element$spacing(16)
					]),
				_List_fromArray(
					[
						A2(
						QiTASC$hatchinq$Examples$tabBar,
						_List_Nil,
						{
							onTabSelect: QiTASC$hatchinq$Examples$TabBarSelect,
							selectedTab: model.selectedTab,
							state: model.tabBarState,
							tabButtons: QiTASC$hatchinq$Hatchinq$TabBar$TextOnly(
								_List_fromArray(
									[
										_Utils_Tuple2('Main', QiTASC$hatchinq$Examples$MainTab),
										_Utils_Tuple2('Settings / Preferences', QiTASC$hatchinq$Examples$SettingsTab),
										_Utils_Tuple2('Very large tab name that doesn\'t fit into the box', QiTASC$hatchinq$Examples$CustomTab)
									]))
						})
					])),
				A2(
				mdgriffith$elm_ui$Element$row,
				_List_fromArray(
					[
						mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
						mdgriffith$elm_ui$Element$spacing(16)
					]),
				_List_fromArray(
					[
						A2(
						QiTASC$hatchinq$Examples$tabBar,
						_List_Nil,
						{
							onTabSelect: QiTASC$hatchinq$Examples$TabBarSelect,
							selectedTab: model.selectedTab,
							state: model.tabBarState,
							tabButtons: QiTASC$hatchinq$Hatchinq$TabBar$IconOnly(
								_List_fromArray(
									[
										_Utils_Tuple2('menu', QiTASC$hatchinq$Examples$MainTab),
										_Utils_Tuple2('settings', QiTASC$hatchinq$Examples$SettingsTab),
										_Utils_Tuple2('info', QiTASC$hatchinq$Examples$CustomTab)
									]))
						})
					])),
				A2(
				mdgriffith$elm_ui$Element$row,
				_List_fromArray(
					[
						mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
						mdgriffith$elm_ui$Element$spacing(16)
					]),
				_List_fromArray(
					[
						A2(
						QiTASC$hatchinq$Examples$textField,
						_List_Nil,
						{
							id: QiTASC$hatchinq$Examples$FirstInputField,
							label: 'My input field',
							onChange: elm$core$Maybe$Just(
								QiTASC$hatchinq$Examples$InputChange(QiTASC$hatchinq$Examples$FirstInputField)),
							state: model.inputField,
							value: model.inputValue
						}),
						A2(
						QiTASC$hatchinq$Examples$textField,
						_List_fromArray(
							[
								QiTASC$hatchinq$Hatchinq$Attribute$width(mdgriffith$elm_ui$Element$fill)
							]),
						{
							id: QiTASC$hatchinq$Examples$SecondInputField,
							label: 'Second field',
							onChange: (_Utils_eq(model.checkboxValue, elm$core$Maybe$Nothing) || _Utils_eq(
								model.checkboxValue,
								elm$core$Maybe$Just(false))) ? elm$core$Maybe$Nothing : elm$core$Maybe$Just(
								QiTASC$hatchinq$Examples$InputChange(QiTASC$hatchinq$Examples$SecondInputField)),
							state: model.inputField,
							value: model.secondInputValue
						})
					])),
				A2(
				mdgriffith$elm_ui$Element$row,
				_List_fromArray(
					[
						mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
						mdgriffith$elm_ui$Element$spacing(16)
					]),
				_List_fromArray(
					[
						A2(
						QiTASC$hatchinq$Examples$textField,
						_List_fromArray(
							[
								QiTASC$hatchinq$Hatchinq$TextField$multiline,
								QiTASC$hatchinq$Hatchinq$Attribute$height(
								mdgriffith$elm_ui$Element$px(100))
							]),
						{
							id: QiTASC$hatchinq$Examples$FirstMultiline,
							label: 'My input field',
							onChange: elm$core$Maybe$Just(
								QiTASC$hatchinq$Examples$InputChange(QiTASC$hatchinq$Examples$FirstMultiline)),
							state: model.inputField,
							value: model.multilineValue
						}),
						A2(
						QiTASC$hatchinq$Examples$textField,
						_List_fromArray(
							[
								QiTASC$hatchinq$Hatchinq$TextField$multiline,
								QiTASC$hatchinq$Hatchinq$Attribute$height(
								mdgriffith$elm_ui$Element$px(100)),
								QiTASC$hatchinq$Hatchinq$Attribute$width(mdgriffith$elm_ui$Element$fill)
							]),
						{
							id: QiTASC$hatchinq$Examples$SecondMultiline,
							label: 'Second field',
							onChange: (_Utils_eq(model.checkboxValue, elm$core$Maybe$Nothing) || _Utils_eq(
								model.checkboxValue,
								elm$core$Maybe$Just(false))) ? elm$core$Maybe$Nothing : elm$core$Maybe$Just(
								QiTASC$hatchinq$Examples$InputChange(QiTASC$hatchinq$Examples$SecondMultiline)),
							state: model.inputField,
							value: model.secondMultilineValue
						})
					])),
				A2(
				mdgriffith$elm_ui$Element$row,
				_List_fromArray(
					[
						mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
						mdgriffith$elm_ui$Element$spacing(16)
					]),
				_List_fromArray(
					[
						A3(
						QiTASC$hatchinq$Examples$dropDown,
						QiTASC$hatchinq$Examples$Default,
						_List_fromArray(
							[
								QiTASC$hatchinq$Hatchinq$DropDown$label('Default Dropdown')
							]),
						{
							itemToString: elm$core$Basics$identity,
							items: _List_fromArray(
								['a very long text that doesn\'t fit in item', 'b', 'c']),
							onChange: elm$core$Maybe$Just(
								function (item) {
									return A2(QiTASC$hatchinq$Examples$DropdownValueChange, QiTASC$hatchinq$Examples$Default, item);
								}),
							state: model.defaultDropdown,
							value: model.defaultDropdownValue
						}),
						A2(
						QiTASC$hatchinq$Examples$checkbox,
						_List_Nil,
						{
							onChange: elm$core$Maybe$Just(
								function (value) {
									return QiTASC$hatchinq$Examples$CheckboxValueChange(value);
								}),
							value: model.checkboxValue
						}),
						A2(
						QiTASC$hatchinq$Examples$checkbox,
						_List_Nil,
						{
							onChange: (_Utils_eq(model.checkboxValue, elm$core$Maybe$Nothing) || _Utils_eq(
								model.checkboxValue,
								elm$core$Maybe$Just(false))) ? elm$core$Maybe$Nothing : elm$core$Maybe$Just(
								function (_n0) {
									return QiTASC$hatchinq$Examples$NoOp;
								}),
							value: elm$core$Maybe$Nothing
						}),
						A3(
						QiTASC$hatchinq$Examples$dropDown,
						QiTASC$hatchinq$Examples$Disabled,
						_List_fromArray(
							[
								QiTASC$hatchinq$Hatchinq$DropDown$label(
								(_Utils_eq(model.checkboxValue, elm$core$Maybe$Nothing) || _Utils_eq(
									model.checkboxValue,
									elm$core$Maybe$Just(false))) ? 'Disabled Dropdown' : 'Enabled Dropdown'),
								QiTASC$hatchinq$Hatchinq$Attribute$width(
								mdgriffith$elm_ui$Element$px(200))
							]),
						{
							itemToString: elm$core$Basics$identity,
							items: _List_fromArray(
								['a', 'b', 'c']),
							onChange: (_Utils_eq(model.checkboxValue, elm$core$Maybe$Nothing) || _Utils_eq(
								model.checkboxValue,
								elm$core$Maybe$Just(false))) ? elm$core$Maybe$Nothing : elm$core$Maybe$Just(
								function (item) {
									return A2(QiTASC$hatchinq$Examples$DropdownValueChange, QiTASC$hatchinq$Examples$Disabled, item);
								}),
							state: model.disabledDropdown,
							value: model.disabledDropdownValue
						}),
						A3(
						QiTASC$hatchinq$Examples$dropDown,
						QiTASC$hatchinq$Examples$FullWidth,
						_List_fromArray(
							[
								QiTASC$hatchinq$Hatchinq$DropDown$label('Full Width Outlined Dropdown'),
								QiTASC$hatchinq$Hatchinq$DropDown$dropDownCount(2),
								QiTASC$hatchinq$Hatchinq$Attribute$width(mdgriffith$elm_ui$Element$fill),
								QiTASC$hatchinq$Hatchinq$DropDown$outlined
							]),
						{
							itemToString: elm$core$Basics$identity,
							items: _List_fromArray(
								['a', 'b', 'c', 'd']),
							onChange: (_Utils_eq(model.checkboxValue, elm$core$Maybe$Nothing) || _Utils_eq(
								model.checkboxValue,
								elm$core$Maybe$Just(false))) ? elm$core$Maybe$Nothing : elm$core$Maybe$Just(
								function (item) {
									return A2(QiTASC$hatchinq$Examples$DropdownValueChange, QiTASC$hatchinq$Examples$FullWidth, item);
								}),
							state: model.fullWidthDropdown,
							value: model.fullWidthDropdownValue
						})
					])),
				A2(
				mdgriffith$elm_ui$Element$row,
				_List_fromArray(
					[
						mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
						mdgriffith$elm_ui$Element$spacing(16)
					]),
				_List_fromArray(
					[
						A2(
						mdgriffith$elm_ui$Element$el,
						_List_fromArray(
							[
								mdgriffith$elm_ui$Element$height(mdgriffith$elm_ui$Element$fill)
							]),
						A2(
							mdgriffith$elm_ui$Element$el,
							_List_fromArray(
								[
									mdgriffith$elm_ui$Element$height(mdgriffith$elm_ui$Element$shrink),
									mdgriffith$elm_ui$Element$scrollbarX,
									mdgriffith$elm_ui$Element$Border$width(1),
									mdgriffith$elm_ui$Element$Border$color(QiTASC$hatchinq$Examples$theme.colors.gray.light)
								]),
							A2(
								QiTASC$hatchinq$Examples$denseDataTable,
								_List_fromArray(
									[
										A3(
										QiTASC$hatchinq$Hatchinq$DataTable$selection,
										function (p) {
											return A2(elm$core$Set$member, p.id, model.selectedPersons);
										},
										F2(
											function (p, checked) {
												return A2(
													QiTASC$hatchinq$Examples$DataTableSelectionChange,
													elm$core$Maybe$Just(p),
													checked);
											}),
										function (allSelected) {
											return A2(QiTASC$hatchinq$Examples$DataTableSelectionChange, elm$core$Maybe$Nothing, allSelected);
										}),
										A3(
										QiTASC$hatchinq$Hatchinq$DataTable$expansion,
										function (p) {
											return A2(elm$core$Set$member, p.id, model.expandedPersons);
										},
										F2(
											function (p, expanded) {
												return A2(QiTASC$hatchinq$Examples$DataTableExpansionChange, p, expanded);
											}),
										function (p) {
											return mdgriffith$elm_ui$Element$text(
												A2(elm$core$Maybe$withDefault, 'Nothing', p.additionalInfo));
										})
									]),
								{
									columns: _List_fromArray(
										[
											A3(
											QiTASC$hatchinq$Hatchinq$DataTable$column,
											mdgriffith$elm_ui$Element$text('First name'),
											mdgriffith$elm_ui$Element$px(100),
											F2(
												function (_n1, person) {
													return mdgriffith$elm_ui$Element$text(person.firstName);
												})),
											A4(
											QiTASC$hatchinq$Hatchinq$DataTable$sortableColumn,
											mdgriffith$elm_ui$Element$text('Last name'),
											mdgriffith$elm_ui$Element$px(100),
											F2(
												function (_n2, person) {
													return mdgriffith$elm_ui$Element$text(person.lastName);
												}),
											elm$core$List$sortBy(
												function (p) {
													return p.lastName;
												})),
											A4(
											QiTASC$hatchinq$Hatchinq$DataTable$sortableColumn,
											mdgriffith$elm_ui$Element$text('Age'),
											mdgriffith$elm_ui$Element$px(100),
											F2(
												function (_n3, person) {
													return mdgriffith$elm_ui$Element$text(
														elm$core$String$fromInt(person.age));
												}),
											elm$core$List$sortBy(
												function (p) {
													return p.age;
												}))
										]),
									items: QiTASC$hatchinq$Examples$persons,
									state: model.dataTable
								}))),
						A2(
						mdgriffith$elm_ui$Element$el,
						_List_fromArray(
							[
								mdgriffith$elm_ui$Element$height(mdgriffith$elm_ui$Element$fill)
							]),
						A2(
							mdgriffith$elm_ui$Element$el,
							_List_fromArray(
								[
									mdgriffith$elm_ui$Element$height(mdgriffith$elm_ui$Element$shrink),
									mdgriffith$elm_ui$Element$width(
									mdgriffith$elm_ui$Element$px(250)),
									mdgriffith$elm_ui$Element$scrollbarX,
									mdgriffith$elm_ui$Element$Border$width(1),
									mdgriffith$elm_ui$Element$Border$color(QiTASC$hatchinq$Examples$theme.colors.gray.light)
								]),
							A2(
								QiTASC$hatchinq$Examples$dataTable,
								_List_fromArray(
									[
										A3(
										QiTASC$hatchinq$Hatchinq$DataTable$selection,
										function (p) {
											return A2(elm$core$Set$member, p.id, model.selectedPersons);
										},
										F2(
											function (p, checked) {
												return A2(
													QiTASC$hatchinq$Examples$DataTableSelectionChange,
													elm$core$Maybe$Just(p),
													checked);
											}),
										function (allSelected) {
											return A2(QiTASC$hatchinq$Examples$DataTableSelectionChange, elm$core$Maybe$Nothing, allSelected);
										}),
										QiTASC$hatchinq$Hatchinq$Attribute$width(mdgriffith$elm_ui$Element$shrink)
									]),
								{
									columns: _List_fromArray(
										[
											A3(
											QiTASC$hatchinq$Hatchinq$DataTable$column,
											mdgriffith$elm_ui$Element$text('First name'),
											mdgriffith$elm_ui$Element$px(100),
											F2(
												function (_n4, person) {
													return mdgriffith$elm_ui$Element$text(person.firstName);
												})),
											A4(
											QiTASC$hatchinq$Hatchinq$DataTable$sortableColumn,
											mdgriffith$elm_ui$Element$text('Last name'),
											mdgriffith$elm_ui$Element$px(100),
											F2(
												function (_n5, person) {
													return mdgriffith$elm_ui$Element$text(person.lastName);
												}),
											elm$core$List$sortBy(
												function (p) {
													return p.lastName;
												})),
											A4(
											QiTASC$hatchinq$Hatchinq$DataTable$sortableColumn,
											mdgriffith$elm_ui$Element$text('Age'),
											mdgriffith$elm_ui$Element$px(100),
											F2(
												function (_n6, person) {
													return mdgriffith$elm_ui$Element$text(
														elm$core$String$fromInt(person.age));
												}),
											elm$core$List$sortBy(
												function (p) {
													return p.age;
												}))
										]),
									items: QiTASC$hatchinq$Examples$persons,
									state: model.dataTable
								}))),
						A2(
						mdgriffith$elm_ui$Element$el,
						_List_fromArray(
							[
								mdgriffith$elm_ui$Element$height(mdgriffith$elm_ui$Element$fill),
								mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill)
							]),
						A2(
							mdgriffith$elm_ui$Element$el,
							_List_fromArray(
								[
									mdgriffith$elm_ui$Element$height(mdgriffith$elm_ui$Element$shrink),
									mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
									mdgriffith$elm_ui$Element$Border$width(1),
									mdgriffith$elm_ui$Element$Border$color(QiTASC$hatchinq$Examples$theme.colors.gray.light)
								]),
							A2(
								QiTASC$hatchinq$Examples$dataTable,
								_List_fromArray(
									[
										QiTASC$hatchinq$Hatchinq$Attribute$height(
										mdgriffith$elm_ui$Element$px(300)),
										QiTASC$hatchinq$Hatchinq$Attribute$width(mdgriffith$elm_ui$Element$fill),
										QiTASC$hatchinq$Hatchinq$DataTable$infinite(
										{
											loadExtraItems: function (direction) {
												return elm$core$Maybe$Just(
													{
														excessCount: 0,
														loadCount: elm$core$List$length(QiTASC$hatchinq$Examples$persons),
														loadMsg: QiTASC$hatchinq$Examples$LoadPeople(direction)
													});
											},
											loadingBottom: model.loadingBottom,
											loadingTop: model.loadingTop
										}),
										QiTASC$hatchinq$Hatchinq$Attribute$id('infinite-data-table')
									]),
								{
									columns: _List_fromArray(
										[
											A3(
											QiTASC$hatchinq$Hatchinq$DataTable$column,
											mdgriffith$elm_ui$Element$text('First name'),
											A2(mdgriffith$elm_ui$Element$minimum, 100, mdgriffith$elm_ui$Element$fill),
											F2(
												function (_n7, person) {
													return mdgriffith$elm_ui$Element$text(person.firstName);
												})),
											A3(
											QiTASC$hatchinq$Hatchinq$DataTable$column,
											mdgriffith$elm_ui$Element$text('Last name'),
											A2(mdgriffith$elm_ui$Element$minimum, 100, mdgriffith$elm_ui$Element$fill),
											F2(
												function (_n8, person) {
													return mdgriffith$elm_ui$Element$text(person.lastName);
												})),
											A4(
											QiTASC$hatchinq$Hatchinq$DataTable$externalSortableColumn,
											mdgriffith$elm_ui$Element$text('Age'),
											A2(mdgriffith$elm_ui$Element$minimum, 100, mdgriffith$elm_ui$Element$fill),
											F2(
												function (_n9, person) {
													return mdgriffith$elm_ui$Element$text(
														elm$core$String$fromInt(person.age));
												}),
											QiTASC$hatchinq$Examples$DataTableSortChange)
										]),
									items: model.infinitePersons,
									state: model.dataTable
								}))),
						A2(
						mdgriffith$elm_ui$Element$el,
						_List_fromArray(
							[
								mdgriffith$elm_ui$Element$height(mdgriffith$elm_ui$Element$fill),
								mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill)
							]),
						A2(
							mdgriffith$elm_ui$Element$el,
							_List_fromArray(
								[
									mdgriffith$elm_ui$Element$height(mdgriffith$elm_ui$Element$shrink),
									mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
									mdgriffith$elm_ui$Element$Border$width(1),
									mdgriffith$elm_ui$Element$Border$color(QiTASC$hatchinq$Examples$theme.colors.gray.light)
								]),
							A2(
								QiTASC$hatchinq$Examples$denseDataTable,
								_List_fromArray(
									[
										QiTASC$hatchinq$Hatchinq$Attribute$height(
										mdgriffith$elm_ui$Element$px(300)),
										QiTASC$hatchinq$Hatchinq$Attribute$width(mdgriffith$elm_ui$Element$fill),
										QiTASC$hatchinq$Hatchinq$DataTable$infinite(
										{
											loadExtraItems: function (direction) {
												return elm$core$Maybe$Just(
													{
														excessCount: 0,
														loadCount: elm$core$List$length(QiTASC$hatchinq$Examples$persons),
														loadMsg: QiTASC$hatchinq$Examples$LoadPeople(direction)
													});
											},
											loadingBottom: model.loadingBottom,
											loadingTop: model.loadingTop
										}),
										QiTASC$hatchinq$Hatchinq$Attribute$id('infinite-data-table2')
									]),
								{
									columns: _List_fromArray(
										[
											A3(
											QiTASC$hatchinq$Hatchinq$DataTable$column,
											mdgriffith$elm_ui$Element$text('First name'),
											A2(mdgriffith$elm_ui$Element$minimum, 100, mdgriffith$elm_ui$Element$fill),
											F2(
												function (_n10, person) {
													return mdgriffith$elm_ui$Element$text(person.firstName);
												})),
											A3(
											QiTASC$hatchinq$Hatchinq$DataTable$column,
											mdgriffith$elm_ui$Element$text('Last name'),
											A2(mdgriffith$elm_ui$Element$minimum, 100, mdgriffith$elm_ui$Element$fill),
											F2(
												function (_n11, person) {
													return mdgriffith$elm_ui$Element$text(person.lastName);
												})),
											A4(
											QiTASC$hatchinq$Hatchinq$DataTable$externalSortableColumn,
											mdgriffith$elm_ui$Element$text('Age'),
											A2(mdgriffith$elm_ui$Element$minimum, 100, mdgriffith$elm_ui$Element$fill),
											F2(
												function (_n12, person) {
													return mdgriffith$elm_ui$Element$text(
														elm$core$String$fromInt(person.age));
												}),
											QiTASC$hatchinq$Examples$DataTableSortChange)
										]),
									items: model.infinitePersons,
									state: model.dataTable
								}))),
						A2(
						mdgriffith$elm_ui$Element$column,
						_List_fromArray(
							[
								mdgriffith$elm_ui$Element$height(mdgriffith$elm_ui$Element$fill),
								mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
								mdgriffith$elm_ui$Element$Border$width(1),
								mdgriffith$elm_ui$Element$Border$color(QiTASC$hatchinq$Examples$theme.colors.gray.light)
							]),
						_List_fromArray(
							[
								A2(
								QiTASC$hatchinq$Examples$dataTable,
								_List_fromArray(
									[
										QiTASC$hatchinq$Hatchinq$Attribute$height(
										mdgriffith$elm_ui$Element$px(240)),
										QiTASC$hatchinq$Hatchinq$Attribute$width(mdgriffith$elm_ui$Element$fill)
									]),
								{
									columns: _List_fromArray(
										[
											A3(
											QiTASC$hatchinq$Hatchinq$DataTable$column,
											mdgriffith$elm_ui$Element$text('First name'),
											A2(mdgriffith$elm_ui$Element$minimum, 100, mdgriffith$elm_ui$Element$fill),
											F2(
												function (_n13, person) {
													return mdgriffith$elm_ui$Element$text(person.firstName);
												})),
											A3(
											QiTASC$hatchinq$Hatchinq$DataTable$column,
											mdgriffith$elm_ui$Element$text('Last name'),
											A2(mdgriffith$elm_ui$Element$minimum, 100, mdgriffith$elm_ui$Element$fill),
											F2(
												function (_n14, person) {
													return mdgriffith$elm_ui$Element$text(person.lastName);
												})),
											A4(
											QiTASC$hatchinq$Hatchinq$DataTable$externalSortableColumn,
											mdgriffith$elm_ui$Element$text('Age'),
											A2(mdgriffith$elm_ui$Element$minimum, 100, mdgriffith$elm_ui$Element$fill),
											F2(
												function (_n15, person) {
													return mdgriffith$elm_ui$Element$text(
														elm$core$String$fromInt(person.age));
												}),
											QiTASC$hatchinq$Examples$DataTableSortChange)
										]),
									items: model.persons,
									state: model.dataTable
								}),
								A2(
								QiTASC$hatchinq$Examples$paginator,
								_List_Nil,
								{nextPage: QiTASC$hatchinq$Examples$NoOp, offset: 3, previousPage: QiTASC$hatchinq$Examples$NoOp, rowsPerPage: 4, total: 8})
							]))
					])),
				A2(
				mdgriffith$elm_ui$Element$row,
				_List_fromArray(
					[
						mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
						mdgriffith$elm_ui$Element$spacing(16)
					]),
				_List_fromArray(
					[
						A2(
						mdgriffith$elm_ui$Element$el,
						_List_fromArray(
							[
								mdgriffith$elm_ui$Element$height(mdgriffith$elm_ui$Element$fill)
							]),
						A2(
							mdgriffith$elm_ui$Element$el,
							_List_fromArray(
								[
									mdgriffith$elm_ui$Element$Border$width(1),
									mdgriffith$elm_ui$Element$Border$color(QiTASC$hatchinq$Examples$theme.colors.gray.light)
								]),
							A3(
								QiTASC$hatchinq$Examples$list,
								QiTASC$hatchinq$Examples$WithImagesAndSecondaryTextAndSelectable,
								_List_fromArray(
									[
										QiTASC$hatchinq$Hatchinq$List$imageSrc(
										function (person) {
											return person.imageSrc;
										}),
										QiTASC$hatchinq$Hatchinq$List$secondaryText(
										function (person) {
											return A2(elm$core$Maybe$withDefault, '', person.additionalInfo);
										}),
										QiTASC$hatchinq$Hatchinq$List$itemsCount(2)
									]),
								{
									activated: model.list4Value,
									items: QiTASC$hatchinq$Examples$persons,
									onSelect: elm$core$Maybe$Just(
										function (person) {
											return A2(QiTASC$hatchinq$Examples$ListValueChange, QiTASC$hatchinq$Examples$WithImagesAndSecondaryTextAndSelectable, person);
										}),
									state: model.list4State,
									toPrimaryText: function (person) {
										return person.firstName + (' ' + person.lastName);
									}
								}))),
						A2(
						mdgriffith$elm_ui$Element$el,
						_List_fromArray(
							[
								mdgriffith$elm_ui$Element$height(mdgriffith$elm_ui$Element$fill)
							]),
						A2(
							mdgriffith$elm_ui$Element$el,
							_List_fromArray(
								[
									mdgriffith$elm_ui$Element$Border$width(1),
									mdgriffith$elm_ui$Element$Border$color(QiTASC$hatchinq$Examples$theme.colors.gray.light)
								]),
							A3(
								QiTASC$hatchinq$Examples$list,
								QiTASC$hatchinq$Examples$WithImagesAndSelectable,
								_List_fromArray(
									[
										QiTASC$hatchinq$Hatchinq$List$imageSrc(
										function (person) {
											return person.imageSrc;
										}),
										QiTASC$hatchinq$Hatchinq$List$control(
										function (person) {
											return A2(
												QiTASC$hatchinq$Examples$iconButton,
												_List_fromArray(
													[
														QiTASC$hatchinq$Hatchinq$IconButton$withTextColor(
														QiTASC$hatchinq$Examples$theme.colors.gray.withAlpha(0.46)),
														QiTASC$hatchinq$Hatchinq$IconButton$stopPropagation
													]),
												{
													icon: 'delete',
													onPress: elm$core$Maybe$Just(QiTASC$hatchinq$Examples$PressMinus)
												});
										})
									]),
								{
									activated: model.list3Value,
									items: QiTASC$hatchinq$Examples$persons,
									onSelect: elm$core$Maybe$Just(
										function (person) {
											return A2(QiTASC$hatchinq$Examples$ListValueChange, QiTASC$hatchinq$Examples$WithImagesAndSelectable, person);
										}),
									state: model.list3State,
									toPrimaryText: function (person) {
										return person.firstName + (' ' + person.lastName);
									}
								}))),
						A2(
						mdgriffith$elm_ui$Element$el,
						_List_fromArray(
							[
								mdgriffith$elm_ui$Element$height(mdgriffith$elm_ui$Element$fill)
							]),
						A2(
							mdgriffith$elm_ui$Element$el,
							_List_fromArray(
								[
									mdgriffith$elm_ui$Element$Border$width(1),
									mdgriffith$elm_ui$Element$Border$color(QiTASC$hatchinq$Examples$theme.colors.gray.light)
								]),
							A3(
								QiTASC$hatchinq$Examples$list,
								QiTASC$hatchinq$Examples$WithSecondaryText,
								_List_fromArray(
									[
										QiTASC$hatchinq$Hatchinq$List$secondaryText(
										function (person) {
											return A2(elm$core$Maybe$withDefault, '', person.additionalInfo);
										}),
										QiTASC$hatchinq$Hatchinq$Attribute$width(
										mdgriffith$elm_ui$Element$px(200)),
										QiTASC$hatchinq$Hatchinq$Attribute$height(
										mdgriffith$elm_ui$Element$px(150))
									]),
								{
									activated: elm$core$Maybe$Nothing,
									items: QiTASC$hatchinq$Examples$persons,
									onSelect: elm$core$Maybe$Nothing,
									state: model.list2State,
									toPrimaryText: function (person) {
										return person.firstName + (' ' + person.lastName);
									}
								}))),
						A2(
						mdgriffith$elm_ui$Element$el,
						_List_fromArray(
							[
								mdgriffith$elm_ui$Element$height(mdgriffith$elm_ui$Element$fill)
							]),
						A2(
							mdgriffith$elm_ui$Element$el,
							_List_fromArray(
								[
									mdgriffith$elm_ui$Element$Border$width(1),
									mdgriffith$elm_ui$Element$Border$color(QiTASC$hatchinq$Examples$theme.colors.gray.light)
								]),
							A3(
								QiTASC$hatchinq$Examples$list,
								QiTASC$hatchinq$Examples$Simple,
								_List_fromArray(
									[
										QiTASC$hatchinq$Hatchinq$Attribute$width(
										mdgriffith$elm_ui$Element$px(150)),
										QiTASC$hatchinq$Hatchinq$List$itemsCount(5)
									]),
								{
									activated: elm$core$Maybe$Nothing,
									items: QiTASC$hatchinq$Examples$persons,
									onSelect: elm$core$Maybe$Nothing,
									state: model.list1State,
									toPrimaryText: function (person) {
										return person.firstName + (' ' + person.lastName);
									}
								})))
					])),
				A2(
				mdgriffith$elm_ui$Element$row,
				_List_fromArray(
					[
						mdgriffith$elm_ui$Element$spacing(24)
					]),
				_List_fromArray(
					[
						A2(
						mdgriffith$elm_ui$Element$el,
						_List_fromArray(
							[mdgriffith$elm_ui$Element$alignTop]),
						A2(
							QiTASC$hatchinq$Examples$card,
							_List_Nil,
							{
								actions: _List_fromArray(
									[
										_Utils_Tuple2(
										'Button 1',
										QiTASC$hatchinq$Examples$SnackbarAlert(
											QiTASC$hatchinq$Hatchinq$Snackbar$Plain('Snackbar message'))),
										_Utils_Tuple2(
										'Button 2',
										QiTASC$hatchinq$Examples$SnackbarAlert(
											A3(
												QiTASC$hatchinq$Hatchinq$Snackbar$WithAction,
												'Snackbar message with action',
												'Repeat',
												QiTASC$hatchinq$Examples$SnackbarAlert(
													QiTASC$hatchinq$Hatchinq$Snackbar$Plain('Snackbar message')))))
									]),
								content: A2(
									mdgriffith$elm_ui$Element$paragraph,
									_List_fromArray(
										[
											mdgriffith$elm_ui$Element$paddingEach(
											{bottom: 4, left: 4, right: 4, top: 4})
										]),
									_List_fromArray(
										[
											mdgriffith$elm_ui$Element$text('This card is not expandable and it uses an image as the Thumbnail. It has some simple text content in a paragraph which does not require scrollbars to view in its entirety.')
										])),
								media: mdgriffith$elm_ui$Element$html(
									A2(
										elm$html$Html$img,
										_List_fromArray(
											[
												A2(elm$html$Html$Attributes$style, 'width', '100%'),
												A2(elm$html$Html$Attributes$style, 'height', '100%'),
												A2(elm$html$Html$Attributes$style, 'object-fit', 'cover'),
												elm$html$Html$Attributes$src('https://homepages.cae.wisc.edu/~ece533/images/goldhill.bmp')
											]),
										_List_Nil)),
								state: model.cardState,
								thumbnail: QiTASC$hatchinq$Hatchinq$Card$Image('https://upload.wikimedia.org/wikipedia/commons/3/39/Lichtenstein_img_processing_test.png'),
								titles: {
									head: 'MediaCenter With Header and Subheader',
									subHead: elm$core$Maybe$Just('Here is a very long subtitle that does not fit within the allotted space. The overflow of this is handled by an ellipsis.')
								}
							})),
						A2(
						mdgriffith$elm_ui$Element$el,
						_List_fromArray(
							[mdgriffith$elm_ui$Element$alignTop]),
						A2(
							QiTASC$hatchinq$Examples$card,
							_List_fromArray(
								[QiTASC$hatchinq$Hatchinq$Card$expandable]),
							{
								actions: _List_fromArray(
									[
										_Utils_Tuple2(
										'Button 1',
										QiTASC$hatchinq$Examples$SnackbarAlert(
											QiTASC$hatchinq$Hatchinq$Snackbar$Plain('Snackbar message'))),
										_Utils_Tuple2(
										'Button 2',
										QiTASC$hatchinq$Examples$SnackbarAlert(
											A3(
												QiTASC$hatchinq$Hatchinq$Snackbar$WithAction,
												'Snackbar message with action',
												'Repeat',
												QiTASC$hatchinq$Examples$SnackbarAlert(
													QiTASC$hatchinq$Hatchinq$Snackbar$Plain('Snackbar message'))))),
										_Utils_Tuple2(
										'Button 3',
										QiTASC$hatchinq$Examples$SnackbarAlert(
											QiTASC$hatchinq$Hatchinq$Snackbar$Plain('Snackbar message'))),
										_Utils_Tuple2(
										'Button 4',
										QiTASC$hatchinq$Examples$SnackbarAlert(
											A3(
												QiTASC$hatchinq$Hatchinq$Snackbar$WithAction,
												'Snackbar message with action',
												'Repeat',
												QiTASC$hatchinq$Examples$SnackbarAlert(
													QiTASC$hatchinq$Hatchinq$Snackbar$Plain('Snackbar message'))))),
										_Utils_Tuple2(
										'Button 5',
										QiTASC$hatchinq$Examples$SnackbarAlert(
											QiTASC$hatchinq$Hatchinq$Snackbar$Plain('Snackbar message'))),
										_Utils_Tuple2(
										'Button 6',
										QiTASC$hatchinq$Examples$SnackbarAlert(
											A3(
												QiTASC$hatchinq$Hatchinq$Snackbar$WithAction,
												'Snackbar message with action',
												'Repeat',
												QiTASC$hatchinq$Examples$SnackbarAlert(
													QiTASC$hatchinq$Hatchinq$Snackbar$Plain('Snackbar message')))))
									]),
								content: A2(
									mdgriffith$elm_ui$Element$paragraph,
									_List_fromArray(
										[
											mdgriffith$elm_ui$Element$paddingEach(
											{bottom: 4, left: 4, right: 4, top: 4})
										]),
									_List_fromArray(
										[
											mdgriffith$elm_ui$Element$text('This card is expandable and uses an image as the thumbnail. It has a horizontal scrollbar because all of the buttons do not fit within the card width.')
										])),
								media: mdgriffith$elm_ui$Element$html(
									A2(
										elm$html$Html$img,
										_List_fromArray(
											[
												A2(elm$html$Html$Attributes$style, 'width', '100%'),
												A2(elm$html$Html$Attributes$style, 'height', '100%'),
												A2(elm$html$Html$Attributes$style, 'object-fit', 'cover'),
												elm$html$Html$Attributes$src('https://homepages.cae.wisc.edu/~ece533/images/goldhill.bmp')
											]),
										_List_Nil)),
								state: model.cardState,
								thumbnail: QiTASC$hatchinq$Hatchinq$Card$Image('https://upload.wikimedia.org/wikipedia/commons/3/39/Lichtenstein_img_processing_test.png'),
								titles: {head: 'Header Only', subHead: elm$core$Maybe$Nothing}
							})),
						A2(
						mdgriffith$elm_ui$Element$el,
						_List_fromArray(
							[mdgriffith$elm_ui$Element$alignTop]),
						A2(
							QiTASC$hatchinq$Examples$card,
							_List_fromArray(
								[
									QiTASC$hatchinq$Hatchinq$Card$layout(QiTASC$hatchinq$Hatchinq$Card$MediaTop),
									QiTASC$hatchinq$Hatchinq$Card$expandable
								]),
							{
								actions: _List_fromArray(
									[
										_Utils_Tuple2(
										'Button 1',
										QiTASC$hatchinq$Examples$SnackbarAlert(
											QiTASC$hatchinq$Hatchinq$Snackbar$Plain('Snackbar message'))),
										_Utils_Tuple2(
										'Button 2',
										QiTASC$hatchinq$Examples$SnackbarAlert(
											A3(
												QiTASC$hatchinq$Hatchinq$Snackbar$WithAction,
												'Snackbar message with action',
												'Repeat',
												QiTASC$hatchinq$Examples$SnackbarAlert(
													QiTASC$hatchinq$Hatchinq$Snackbar$Plain('Snackbar message')))))
									]),
								content: A2(
									mdgriffith$elm_ui$Element$el,
									_List_fromArray(
										[
											mdgriffith$elm_ui$Element$paddingEach(
											{bottom: 4, left: 4, right: 4, top: 4})
										]),
									mdgriffith$elm_ui$Element$text('This card has the following:\n\n- Header\n\n- Subheader\n\n- Buttons\n\n- Content\n\nIt uses a different icon as the Thumbnail and has both a Header and Subheader.\nThe content of this card is too large for the provided display area. Therefore, horizontal and vertical scrollbars are present.')),
								media: mdgriffith$elm_ui$Element$html(
									A2(
										elm$html$Html$img,
										_List_fromArray(
											[
												A2(elm$html$Html$Attributes$style, 'width', '100%'),
												A2(elm$html$Html$Attributes$style, 'height', '100%'),
												A2(elm$html$Html$Attributes$style, 'object-fit', 'cover'),
												elm$html$Html$Attributes$src('https://homepages.cae.wisc.edu/~ece533/images/goldhill.bmp')
											]),
										_List_Nil)),
								state: model.cardState,
								thumbnail: QiTASC$hatchinq$Hatchinq$Card$Icon('location_city'),
								titles: {
									head: 'MediaTop',
									subHead: elm$core$Maybe$Just('With Subheader')
								}
							})),
						A2(
						mdgriffith$elm_ui$Element$el,
						_List_fromArray(
							[mdgriffith$elm_ui$Element$alignTop]),
						A2(
							QiTASC$hatchinq$Examples$card,
							_List_fromArray(
								[
									QiTASC$hatchinq$Hatchinq$Card$layout(QiTASC$hatchinq$Hatchinq$Card$MediaTop),
									QiTASC$hatchinq$Hatchinq$Card$expandable
								]),
							{
								actions: _List_Nil,
								content: A2(
									mdgriffith$elm_ui$Element$paragraph,
									_List_fromArray(
										[
											mdgriffith$elm_ui$Element$paddingEach(
											{bottom: 4, left: 4, right: 4, top: 4})
										]),
									_List_fromArray(
										[
											mdgriffith$elm_ui$Element$text('This card is expandable and does not have buttons.')
										])),
								media: mdgriffith$elm_ui$Element$html(
									A2(
										elm$html$Html$img,
										_List_fromArray(
											[
												A2(elm$html$Html$Attributes$style, 'width', '100%'),
												A2(elm$html$Html$Attributes$style, 'height', '100%'),
												A2(elm$html$Html$Attributes$style, 'object-fit', 'cover'),
												elm$html$Html$Attributes$src('https://homepages.cae.wisc.edu/~ece533/images/goldhill.bmp')
											]),
										_List_Nil)),
								state: model.cardState,
								thumbnail: QiTASC$hatchinq$Hatchinq$Card$Icon('settings'),
								titles: {head: 'MediaTop Header Only', subHead: elm$core$Maybe$Nothing}
							}))
					])),
				A2(
				mdgriffith$elm_ui$Element$row,
				_List_fromArray(
					[
						mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
						mdgriffith$elm_ui$Element$spacing(16)
					]),
				_List_fromArray(
					[
						A2(
						QiTASC$hatchinq$Examples$progressIndicator,
						_List_fromArray(
							[
								QiTASC$hatchinq$Hatchinq$ProgressIndicator$visibility(model.progressIndicatorVisiblity1),
								QiTASC$hatchinq$Hatchinq$ProgressIndicator$circular
							]),
						{progress: model.progressIndicator1}),
						A2(
						QiTASC$hatchinq$Examples$progressIndicator,
						_List_fromArray(
							[
								QiTASC$hatchinq$Hatchinq$ProgressIndicator$visibility(model.progressIndicatorVisiblity1),
								QiTASC$hatchinq$Hatchinq$ProgressIndicator$linear(QiTASC$hatchinq$Hatchinq$ProgressIndicator$BottomUp)
							]),
						{progress: model.progressIndicator1})
					])),
				A2(
				mdgriffith$elm_ui$Element$row,
				_List_fromArray(
					[
						mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
						mdgriffith$elm_ui$Element$spacing(16)
					]),
				_List_fromArray(
					[
						A2(
						QiTASC$hatchinq$Examples$progressIndicator,
						_List_fromArray(
							[
								QiTASC$hatchinq$Hatchinq$ProgressIndicator$visibility(model.progressIndicatorVisiblity1),
								QiTASC$hatchinq$Hatchinq$ProgressIndicator$circular,
								QiTASC$hatchinq$Hatchinq$ProgressIndicator$startDelaySeconds(0.5)
							]),
						{progress: model.progressIndicator2}),
						A2(
						QiTASC$hatchinq$Examples$progressIndicator,
						_List_fromArray(
							[
								QiTASC$hatchinq$Hatchinq$ProgressIndicator$visibility(model.progressIndicatorVisiblity1),
								QiTASC$hatchinq$Hatchinq$ProgressIndicator$linear(QiTASC$hatchinq$Hatchinq$ProgressIndicator$TopDown),
								QiTASC$hatchinq$Hatchinq$ProgressIndicator$startDelaySeconds(0.5)
							]),
						{progress: model.progressIndicator2})
					])),
				A2(
				mdgriffith$elm_ui$Element$row,
				_List_fromArray(
					[
						mdgriffith$elm_ui$Element$spacing(16)
					]),
				_List_fromArray(
					[
						A2(
						QiTASC$hatchinq$Examples$button,
						_List_Nil,
						{
							label: 'Snackbar',
							onPress: elm$core$Maybe$Just(
								QiTASC$hatchinq$Examples$SnackbarAlert(
									QiTASC$hatchinq$Hatchinq$Snackbar$Plain('Snackbar message')))
						}),
						A2(
						QiTASC$hatchinq$Examples$button,
						_List_Nil,
						{
							label: 'Snackbar With Action',
							onPress: elm$core$Maybe$Just(
								QiTASC$hatchinq$Examples$SnackbarAlert(
									A3(
										QiTASC$hatchinq$Hatchinq$Snackbar$WithAction,
										'Snackbar message with action',
										'Alert Again',
										QiTASC$hatchinq$Examples$SnackbarAlert(
											QiTASC$hatchinq$Hatchinq$Snackbar$Plain('Tried again but failed')))))
						})
					])),
				A2(
				mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[
						mdgriffith$elm_ui$Element$height(mdgriffith$elm_ui$Element$fill),
						mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
						mdgriffith$elm_ui$Element$centerX
					]),
				A2(
					QiTASC$hatchinq$Examples$snackbar,
					_List_fromArray(
						[QiTASC$hatchinq$Hatchinq$Snackbar$dismissible]),
					{state: model.snackbarState})),
				QiTASC$hatchinq$Examples$divider(
				_List_fromArray(
					[
						QiTASC$hatchinq$Hatchinq$Divider$withColor(QiTASC$hatchinq$Examples$theme.colors.primary.color)
					])),
				QiTASC$hatchinq$Examples$divider(_List_Nil)
			]));
};
var mdgriffith$elm_ui$Internal$Model$FocusStyleOption = function (a) {
	return {$: 'FocusStyleOption', a: a};
};
var mdgriffith$elm_ui$Element$focusStyle = mdgriffith$elm_ui$Internal$Model$FocusStyleOption;
var QiTASC$hatchinq$Examples$noOutline = mdgriffith$elm_ui$Element$focusStyle(
	{backgroundColor: elm$core$Maybe$Nothing, borderColor: elm$core$Maybe$Nothing, shadow: elm$core$Maybe$Nothing});
var QiTASC$hatchinq$Examples$rightSidePanel = A2(QiTASC$hatchinq$Hatchinq$SidePanel$configure, QiTASC$hatchinq$Examples$rightPanelConfig, _List_Nil);
var QiTASC$hatchinq$Hatchinq$AppBar$elevate = function (q) {
	return QiTASC$hatchinq$Hatchinq$Attribute$custom(
		function (v) {
			return _Utils_update(
				v,
				{elevate: q});
		});
};
var QiTASC$hatchinq$Hatchinq$AppBar$navigate = function (message) {
	return QiTASC$hatchinq$Hatchinq$Attribute$custom(
		function (v) {
			return _Utils_update(
				v,
				{
					navigation: elm$core$Maybe$Just(message)
				});
		});
};
var QiTASC$hatchinq$Hatchinq$AppBar$placeholder = function (source) {
	return A2(
		mdgriffith$elm_ui$Element$el,
		A2(
			elm$core$List$cons,
			mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
			A2(
				elm$core$List$cons,
				mdgriffith$elm_ui$Element$height(
					mdgriffith$elm_ui$Element$px(QiTASC$hatchinq$Hatchinq$AppBar$appBarHeight)),
				QiTASC$hatchinq$Hatchinq$Attribute$toElement(source))),
		mdgriffith$elm_ui$Element$none);
};
var elm$html$Html$node = elm$virtual_dom$VirtualDom$node;
var elm$html$Html$Attributes$href = function (url) {
	return A2(
		elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
var elm$html$Html$Attributes$rel = _VirtualDom_attribute('rel');
var QiTASC$hatchinq$Hatchinq$Theme$stylesheet = function (theme) {
	return mdgriffith$elm_ui$Element$html(
		A2(
			elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					A3(
					elm$html$Html$node,
					'link',
					_List_fromArray(
						[
							elm$html$Html$Attributes$rel('stylesheet'),
							elm$html$Html$Attributes$href('https://fonts.googleapis.com/icon?family=Material+Icons')
						]),
					_List_Nil),
					A3(
					elm$html$Html$node,
					'style',
					_List_Nil,
					_List_fromArray(
						[
							elm$html$Html$text(
							'\n                        ::-webkit-scrollbar {\n                            width:6px;\n                            height:6px;\n                        }\n\n                        ::-webkit-scrollbar-track {\n                            -webkit-border-radius:5px;\n                            border-radius:5px;\n                            background:rgba(0,0,0,0.08);\n                        }\n\n                        ::-webkit-scrollbar-thumb {\n                            -webkit-border-radius:5px;\n                            border-radius:5px;\n                            background:rgba(0,0,0,0.24);\n                        }\n\n                        ::-webkit-scrollbar-thumb:hover {\n                            background:rgba(0,0,0,0.48);\n                        }\n\n                        ::-webkit-scrollbar-thumb:window-inactive {\n                            background:rgba(0,0,0,0.08);\n                        }\n\n                        .focusPrimaryRipple {\n                            --ripple-color: rgba(' + (elm$core$String$fromInt(
								QiTASC$hatchinq$Hatchinq$Color$red(theme.colors.primary.original)) + (',' + (elm$core$String$fromInt(
								QiTASC$hatchinq$Hatchinq$Color$green(theme.colors.primary.original)) + (',' + (elm$core$String$fromInt(
								QiTASC$hatchinq$Hatchinq$Color$blue(theme.colors.primary.original)) + (',0.24);\n                        }\n\n                        .focusSecondaryRipple {\n                            --ripple-color: rgba(' + (elm$core$String$fromInt(
								QiTASC$hatchinq$Hatchinq$Color$red(theme.colors.secondary.original)) + (',' + (elm$core$String$fromInt(
								QiTASC$hatchinq$Hatchinq$Color$green(theme.colors.secondary.original)) + (',' + (elm$core$String$fromInt(
								QiTASC$hatchinq$Hatchinq$Color$blue(theme.colors.secondary.original)) + ',0.24);\n                        }\n\n                        .focusGrayRipple {\n                            --ripple-color: rgba(0,0,0,0.24);\n                        }\n\n                        .focusWhiteRipple {\n                            --ripple-color: rgba(255,255,255,0.24);\n                        }\n\n                        .button {\n                            position: relative;\n                            overflow: hidden;\n                            transform: translate3d(0, 0, 0);\n                        }\n\n                        .button:after {\n                            content: "";\n                            display: block;\n                            position: absolute;\n                            width: 100%;\n                            height: 100%;\n                            top: 0;\n                            left: 0;\n                            pointer-events: none;\n                            background-image: radial-gradient(circle, var(--ripple-color, #555) 10%, transparent 10.01%);\n                            background-repeat: no-repeat;\n                            background-position: 50%;\n                            transform: scale(10, 10);\n                            opacity: 0;\n                            transition: transform .25s, opacity 1s;\n                        }\n\n                        .button:active:after {\n                            transform: scale(0, 0);\n                            opacity: 1;\n                            transition: 0s;\n                        }\n\n                        .ripple {\n                            position: relative;\n                            overflow: hidden;\n                            transform: translate3d(0, 0, 0);\n                        }\n\n                        .ripple:before {\n                            content: "";\n                            display: block;\n                            position: absolute;\n                            width: 100%;\n                            height: 100%;\n                            top: 0;\n                            left: 0;\n                            pointer-events: none;\n                            background-image: radial-gradient(circle, var(--ripple-color, #555) 10%, transparent 10.01%);\n                            background-repeat: no-repeat;\n                            background-position: 50%;\n                            transform: scale(0, 0);\n                            opacity: 0;\n                            transition: opacity .5s, transform 1s .5s;\n\n                        }\n\n                        .ripple:active:before {\n                            transform: scale(20, 20);\n                            opacity: 1;\n                            transition: transform .5s, opacity .25s;\n                        }\n\n                        .progress-indicator-primary-bar {\n                            display: block;\n                            transform-origin: top left;\n                            left: -145.166611%;\n\n                            -webkit-animation: progress-indicator-primary-bar-translate 2s infinite linear;\n                            -webkit-transition: none;\n                            -webkit-transform: scaleX(0);\n\n                            animation: progress-indicator-primary-bar-translate 2s infinite linear;\n                            transition: none;\n                            transform: scaleX(0);\n                        }\n\n                        @keyframes progress-indicator-primary-bar-translate {\n                            0%      {\n                                -webkit-transform: translateX(0);\n                                transform: translateX(0);\n                            }\n\n                            20%     {\n                                -webkit-animation-timing-function: cubic-bezier(.5,0,.701732,.495819);\n                                animation-timing-function: cubic-bezier(.5,0,.701732,.495819);\n                                -webkit-transform: translateX(0);\n                                transform: translateX(0);\n                            }\n\n                            59.15%  {\n                                -webkit-animation-timing-function: cubic-bezier(.302435,.381352,.55,.956352);\n                                animation-timing-function: cubic-bezier(.302435,.381352,.55,.956352);\n                                -webkit-transform: translateX(83.67142%);\n                                transform: translateX(83.67142%);\n                            }\n\n                            100%    {\n                                -webkit-transform: translateX(200.611057%);\n                                transform: translateX(200.611057%);\n                            }\n                        }\n\n                        .progress-indicator-primary-bar-inner {\n                            display: inline-block;\n\n                            -webkit-animation: progress-indicator-primary-bar-scale 2s infinite linear;\n                            animation: progress-indicator-primary-bar-scale 2s infinite linear;\n                        }\n\n                        @keyframes progress-indicator-primary-bar-scale {\n                            0%      {\n                                -webkit-transform: scaleX(.08);\n                                transform: scaleX(.08);\n                            }\n                            36.65%  {\n                                -webkit-animation-timing-function: cubic-bezier(.334731,.12482,.785844,1);\n                                animation-timing-function: cubic-bezier(.334731,.12482,.785844,1);\n                                -webkit-transform: scaleX(.08);\n                                transform: scaleX(.08);\n                            }\n\n                            69.15%  {\n                                -webkit-animation-timing-function: cubic-bezier(.06,.11,.6,1);\n                                animation-timing-function: cubic-bezier(.06,.11,.6,1);\n                                -webkit-transform: scaleX(.661479);\n                                transform: scaleX(.661479);\n                            }\n                            100%    {\n                                -webkit-transform: scaleX(.08);\n                                transform: scaleX(.08);\n                            }\n                        }\n\n                        .progress-indicator-secondary-bar {\n                            display: block;\n                            transform-origin: top left;\n                            left: -54.888891%;\n\n                            -webkit-animation: progress-indicator-secondary-bar-translate 2s infinite linear;\n                            -webkit-transition: none;\n                            -webkit-transform: scaleX(0);\n\n                            animation: progress-indicator-secondary-bar-translate 2s infinite linear;\n                            transition: none;\n                            transform: scaleX(0);\n                        }\n\n                        @keyframes progress-indicator-secondary-bar-translate {\n                            0%      {\n                                -webkit-animation-timing-function: cubic-bezier(.15,0,.515058,.409685);\n                                animation-timing-function: cubic-bezier(.15,0,.515058,.409685);\n                                -webkit-transform: translateX(0);\n                                transform: translateX(0);\n                            }\n\n                            25%     {\n                                -webkit-animation-timing-function: cubic-bezier(.31033,.284058,.8,.733712);\n                                animation-timing-function: cubic-bezier(.31033,.284058,.8,.733712);\n                                -webkit-transform: translateX(37.651913%);\n                                transform: translateX(37.651913%);\n                            }\n                            48.35%  {\n                                -webkit-animation-timing-function: cubic-bezier(.4,.627035,.6,.902026);\n                                animation-timing-function: cubic-bezier(.4,.627035,.6,.902026);\n                                -webkit-transform: translateX(84.386165%);\n                                transform: translateX(84.386165%);\n                            }\n                            100%    {\n                                -webkit-transform: translateX(160.277782%);\n                                transform: translateX(160.277782%);\n                            }\n                        }\n\n                        .progress-indicator-secondary-bar-inner {\n                            display: inline-block;\n\n                            -webkit-animation: progress-indicator-secondary-bar-scale 2s infinite linear;\n                            animation: progress-indicator-secondary-bar-scale 2s infinite linear;\n                        }\n\n                        @keyframes progress-indicator-secondary-bar-scale {\n                            0%      {\n                                -webkit-animation-timing-function: cubic-bezier(.205028,.057051,.57661,.453971);\n                                animation-timing-function: cubic-bezier(.205028,.057051,.57661,.453971);\n                                -webkit-transform: scaleX(.08);\n                                transform: scaleX(.08);\n                            }\n\n                            19.15%  {\n                                -webkit-animation-timing-function: cubic-bezier(.152313,.196432,.648374,1.004315);\n                                animation-timing-function: cubic-bezier(.152313,.196432,.648374,1.004315);\n                                -webkit-transform: scaleX(.457104);\n                                transform: scaleX(.457104);\n                            }\n                            44.15%  {\n                                -webkit-animation-timing-function: cubic-bezier(.257759,-.003163,.211762,1.38179);\n                                animation-timing-function: cubic-bezier(.257759,-.003163,.211762,1.38179);\n                                -webkit-transform: scaleX(.72796);\n                                transform: scaleX(.72796);\n                            }\n                            100%    {\n                                -webkit-transform: scaleX(.08);\n                                transform: scaleX(.08);\n                            }\n                        }\n\n                        .progress-indicator-circular-container {\n                            display: inline-block !important;\n                            position: relative !important;\n\n                            -webkit-animation: progress-indicator-circular-container-rotate 1568ms linear infinite;\n                            animation: progress-indicator-circular-container-rotate 1568ms linear infinite;\n                        }\n\n                        @keyframes progress-indicator-circular-container-rotate {\n                            100%    {\n                                -webkit-transform: rotate(360deg);\n                                transform: rotate(360deg);\n                            }\n                        }\n\n                        .progress-indicator-circular-spinner {\n                            position: absolute !important;\n                            width: 100% !important;\n                            height: 100% !important;\n                            transition: opacity .5s;\n                            border-color: inherit;\n\n                            -webkit-animation: progress-indicator-circular-spinner-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n                            animation: progress-indicator-circular-spinner-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n                        }\n\n                        @keyframes progress-indicator-circular-spinner-rotate {\n                            12.5%   {\n                                -webkit-transform: rotate(135deg);\n                                transform: rotate(135deg);\n                            }\n                            25%     {\n                                -webkit-transform: rotate(270deg);\n                                transform: rotate(270deg);\n                            }\n                            37.5%   {\n                                -webkit-transform: rotate(405deg);\n                                transform: rotate(405deg);\n                            }\n                            50%     {\n                                -webkit-transform: rotate(540deg);\n                                transform: rotate(540deg);\n                            }\n                            62.5%   {\n                                -webkit-transform: rotate(675deg);\n                                transform: rotate(675deg);\n                            }\n                            75%     {\n                                -webkit-transform: rotate(810deg);\n                                transform: rotate(810deg);\n                            }\n                            87.5%   {\n                                -webkit-transform: rotate(945deg);\n                                transform: rotate(945deg);\n                            }\n                            100%    {\n                                -webkit-transform: rotate(1080deg);\n                                transform: rotate(1080deg);\n                            }\n                        }\n\n                        .circle {\n                            border-radius: 50%;\n                        }\n\n                        .progress-indicator-circular-determinate-container {\n                            position: relative !important;\n                        }\n\n                        .progress-indicator-circular-determinate-container.lt50 {\n                            clip-path: polygon(50% 0%, 50% 100%, 100% 100%, 100% 0%);\n                        }\n\n                        .progress-indicator-circular-determinate-container .circle {\n                            width: 100% !important;\n                            height: 100% !important;\n                            border-width: 4px;\n                            border-style: solid;\n                            border-color: inherit;\n                            border-radius: 50%;\n                            -webkit-animation: none;\n                            animation: none;\n                            position: absolute;\n                        }\n\n                        .progress-indicator-circular-determinate-container .circle.half {\n                            clip-path: polygon(50% 0%, 50% 100%, 0% 100%, 0% 0%);\n                        }\n\n                        .circle-clipper {\n                            flex-basis: auto !important;\n                            display: inline-block !important;\n                            position: relative !important;\n                            width: 50% !important;\n                            height: 100% !important;\n                            overflow: hidden;\n                            border-color: inherit;\n                        }\n\n                        .circle-clipper .circle {\n                            width: 200% !important;\n                            height: 100% !important;\n                            border-width: 4px;\n                            border-style: solid;\n                            border-color: inherit;\n                            border-bottom-color: transparent !important;\n                            border-radius: 50%;\n                            -webkit-animation: none;\n                            animation: none;\n                            position: absolute;\n                            top: 0;\n                            right: 0;\n                            bottom: 0;\n                        }\n\n                        .left {\n                            float: left !important;\n                        }\n\n                        .right {\n                            float: right !important;\n                        }\n\n                        .circle-clipper.left .circle {\n                            left: 0;\n                            border-right-color: transparent !important;\n                            -webkit-transform: rotate(129deg);\n                            transform: rotate(129deg);\n\n                            -webkit-animation: left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n                            animation: left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n                        }\n\n                        @keyframes left-spin {\n                            0% {\n                                -webkit-transform: rotate(130deg);\n                                transform: rotate(130deg);\n                            }\n\n                            50% {\n                                -webkit-transform: rotate(-5deg);\n                                transform: rotate(-5deg);\n                            }\n                            100% {\n                                -webkit-transform: rotate(130deg);\n                                transform: rotate(130deg);\n                            }\n                        }\n\n                        .circle-clipper.right .circle {\n                            left: -100%;\n                            border-left-color: transparent !important;\n                            -webkit-transform: rotate(-129deg);\n                            transform: rotate(-129deg);\n\n                            -webkit-animation: right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n                            animation: right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n                        }\n\n                        @keyframes right-spin {\n                            0% {\n                                -webkit-transform: rotate(-130deg);\n                                transform: rotate(-130deg);\n                            }\n                            50% {\n                                -webkit-transform: rotate(5deg);\n                                transform: rotate(5deg);\n                            }\n                            100% {\n                                -webkit-transform: rotate(-130deg);\n                                transform: rotate(-130deg);\n                            }\n                        }\n\n                        .gap-patch {\n                            position: absolute !important;\n                            top: 0;\n                            left: 45%;\n                            width: 10% !important;\n                            height: 100% !important;\n                            overflow: hidden;\n                            border-color: inherit;\n                        }\n\n                        .gap-patch .circle {\n                            width: 1000%;\n                            left: -450%;\n                        }\n                    '))))))))))))
						]))
				])));
};
var mdgriffith$elm_ui$Internal$Model$OnlyDynamic = F2(
	function (a, b) {
		return {$: 'OnlyDynamic', a: a, b: b};
	});
var mdgriffith$elm_ui$Internal$Model$StaticRootAndDynamic = F2(
	function (a, b) {
		return {$: 'StaticRootAndDynamic', a: a, b: b};
	});
var mdgriffith$elm_ui$Internal$Model$AllowHover = {$: 'AllowHover'};
var mdgriffith$elm_ui$Internal$Model$Layout = {$: 'Layout'};
var mdgriffith$elm_ui$Internal$Model$focusDefaultStyle = {
	backgroundColor: elm$core$Maybe$Nothing,
	borderColor: elm$core$Maybe$Nothing,
	shadow: elm$core$Maybe$Just(
		{
			blur: 0,
			color: A4(mdgriffith$elm_ui$Internal$Model$Rgba, 155 / 255, 203 / 255, 1, 1),
			offset: _Utils_Tuple2(0, 0),
			size: 3
		})
};
var mdgriffith$elm_ui$Internal$Model$optionsToRecord = function (options) {
	var combine = F2(
		function (opt, record) {
			switch (opt.$) {
				case 'HoverOption':
					var hoverable = opt.a;
					var _n4 = record.hover;
					if (_n4.$ === 'Nothing') {
						return _Utils_update(
							record,
							{
								hover: elm$core$Maybe$Just(hoverable)
							});
					} else {
						return record;
					}
				case 'FocusStyleOption':
					var focusStyle = opt.a;
					var _n5 = record.focus;
					if (_n5.$ === 'Nothing') {
						return _Utils_update(
							record,
							{
								focus: elm$core$Maybe$Just(focusStyle)
							});
					} else {
						return record;
					}
				default:
					var renderMode = opt.a;
					var _n6 = record.mode;
					if (_n6.$ === 'Nothing') {
						return _Utils_update(
							record,
							{
								mode: elm$core$Maybe$Just(renderMode)
							});
					} else {
						return record;
					}
			}
		});
	var andFinally = function (record) {
		return {
			focus: function () {
				var _n0 = record.focus;
				if (_n0.$ === 'Nothing') {
					return mdgriffith$elm_ui$Internal$Model$focusDefaultStyle;
				} else {
					var focusable = _n0.a;
					return focusable;
				}
			}(),
			hover: function () {
				var _n1 = record.hover;
				if (_n1.$ === 'Nothing') {
					return mdgriffith$elm_ui$Internal$Model$AllowHover;
				} else {
					var hoverable = _n1.a;
					return hoverable;
				}
			}(),
			mode: function () {
				var _n2 = record.mode;
				if (_n2.$ === 'Nothing') {
					return mdgriffith$elm_ui$Internal$Model$Layout;
				} else {
					var actualMode = _n2.a;
					return actualMode;
				}
			}()
		};
	};
	return andFinally(
		A3(
			elm$core$List$foldr,
			combine,
			{focus: elm$core$Maybe$Nothing, hover: elm$core$Maybe$Nothing, mode: elm$core$Maybe$Nothing},
			options));
};
var mdgriffith$elm_ui$Internal$Model$toHtml = F2(
	function (mode, el) {
		switch (el.$) {
			case 'Unstyled':
				var html = el.a;
				return html(mdgriffith$elm_ui$Internal$Model$asEl);
			case 'Styled':
				var styles = el.a.styles;
				var html = el.a.html;
				return A2(
					html,
					mode(styles),
					mdgriffith$elm_ui$Internal$Model$asEl);
			case 'Text':
				var text = el.a;
				return mdgriffith$elm_ui$Internal$Model$textElement(text);
			default:
				return mdgriffith$elm_ui$Internal$Model$textElement('');
		}
	});
var mdgriffith$elm_ui$Internal$Model$renderRoot = F3(
	function (optionList, attributes, child) {
		var options = mdgriffith$elm_ui$Internal$Model$optionsToRecord(optionList);
		var embedStyle = function () {
			var _n0 = options.mode;
			if (_n0.$ === 'NoStaticStyleSheet') {
				return mdgriffith$elm_ui$Internal$Model$OnlyDynamic(options);
			} else {
				return mdgriffith$elm_ui$Internal$Model$StaticRootAndDynamic(options);
			}
		}();
		return A2(
			mdgriffith$elm_ui$Internal$Model$toHtml,
			embedStyle,
			A4(
				mdgriffith$elm_ui$Internal$Model$element,
				mdgriffith$elm_ui$Internal$Model$asEl,
				mdgriffith$elm_ui$Internal$Model$div,
				attributes,
				mdgriffith$elm_ui$Internal$Model$Unkeyed(
					_List_fromArray(
						[child]))));
	});
var mdgriffith$elm_ui$Internal$Model$SansSerif = {$: 'SansSerif'};
var mdgriffith$elm_ui$Internal$Model$rootStyle = function () {
	var families = _List_fromArray(
		[
			mdgriffith$elm_ui$Internal$Model$Typeface('Open Sans'),
			mdgriffith$elm_ui$Internal$Model$Typeface('Helvetica'),
			mdgriffith$elm_ui$Internal$Model$Typeface('Verdana'),
			mdgriffith$elm_ui$Internal$Model$SansSerif
		]);
	return _List_fromArray(
		[
			A2(
			mdgriffith$elm_ui$Internal$Model$StyleClass,
			mdgriffith$elm_ui$Internal$Flag$bgColor,
			A3(
				mdgriffith$elm_ui$Internal$Model$Colored,
				'bg-' + mdgriffith$elm_ui$Internal$Model$formatColorClass(
					A4(mdgriffith$elm_ui$Internal$Model$Rgba, 1, 1, 1, 0)),
				'background-color',
				A4(mdgriffith$elm_ui$Internal$Model$Rgba, 1, 1, 1, 0))),
			A2(
			mdgriffith$elm_ui$Internal$Model$StyleClass,
			mdgriffith$elm_ui$Internal$Flag$fontColor,
			A3(
				mdgriffith$elm_ui$Internal$Model$Colored,
				'fc-' + mdgriffith$elm_ui$Internal$Model$formatColorClass(
					A4(mdgriffith$elm_ui$Internal$Model$Rgba, 0, 0, 0, 1)),
				'color',
				A4(mdgriffith$elm_ui$Internal$Model$Rgba, 0, 0, 0, 1))),
			A2(
			mdgriffith$elm_ui$Internal$Model$StyleClass,
			mdgriffith$elm_ui$Internal$Flag$fontSize,
			mdgriffith$elm_ui$Internal$Model$FontSize(20)),
			A2(
			mdgriffith$elm_ui$Internal$Model$StyleClass,
			mdgriffith$elm_ui$Internal$Flag$fontFamily,
			A2(
				mdgriffith$elm_ui$Internal$Model$FontFamily,
				A3(elm$core$List$foldl, mdgriffith$elm_ui$Internal$Model$renderFontClassName, 'font-', families),
				families))
		]);
}();
var mdgriffith$elm_ui$Element$layoutWith = F3(
	function (_n0, attrs, child) {
		var options = _n0.options;
		return A3(
			mdgriffith$elm_ui$Internal$Model$renderRoot,
			options,
			A2(
				elm$core$List$cons,
				mdgriffith$elm_ui$Internal$Model$htmlClass(
					A2(
						elm$core$String$join,
						' ',
						_List_fromArray(
							[mdgriffith$elm_ui$Internal$Style$classes.root, mdgriffith$elm_ui$Internal$Style$classes.any, mdgriffith$elm_ui$Internal$Style$classes.single]))),
				_Utils_ap(mdgriffith$elm_ui$Internal$Model$rootStyle, attrs)),
			child);
	});
var QiTASC$hatchinq$Examples$view = function (model) {
	return A3(
		mdgriffith$elm_ui$Element$layoutWith,
		{
			options: _List_fromArray(
				[QiTASC$hatchinq$Examples$noOutline])
		},
		_List_fromArray(
			[
				mdgriffith$elm_ui$Element$inFront(
				A2(
					QiTASC$hatchinq$Examples$appBar,
					_List_fromArray(
						[
							QiTASC$hatchinq$Hatchinq$AppBar$navigate(QiTASC$hatchinq$Examples$ToggleNavigation),
							QiTASC$hatchinq$Hatchinq$AppBar$elevate(true)
						]),
					{
						buttons: _List_fromArray(
							[
								{
								icon: 'search',
								id: elm$core$Maybe$Just('appbar-button-1'),
								message: QiTASC$hatchinq$Examples$SearchPage
							},
								{
								icon: 'person',
								id: elm$core$Maybe$Just('appbar-button-2'),
								message: QiTASC$hatchinq$Examples$OpenUserOptions
							},
								{icon: 'more_vert', id: elm$core$Maybe$Nothing, message: QiTASC$hatchinq$Examples$OpenUserOptions}
							]),
						title: mdgriffith$elm_ui$Element$text('Hatchinq Examples')
					}))
			]),
		A2(
			mdgriffith$elm_ui$Element$column,
			_List_fromArray(
				[
					mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill),
					mdgriffith$elm_ui$Element$height(mdgriffith$elm_ui$Element$fill)
				]),
			_List_fromArray(
				[
					QiTASC$hatchinq$Hatchinq$Theme$stylesheet(QiTASC$hatchinq$Examples$theme),
					QiTASC$hatchinq$Hatchinq$AppBar$placeholder(_List_Nil),
					A2(
					mdgriffith$elm_ui$Element$row,
					_List_fromArray(
						[
							mdgriffith$elm_ui$Element$height(mdgriffith$elm_ui$Element$fill),
							mdgriffith$elm_ui$Element$width(mdgriffith$elm_ui$Element$fill)
						]),
					_List_fromArray(
						[
							QiTASC$hatchinq$Examples$leftSidePanel(
							{
								buttons: _List_fromArray(
									[
										{
										containerContent: QiTASC$hatchinq$Examples$buttonsContent(model),
										icon: 'apps',
										id: elm$core$Maybe$Just('buttons-tab-button'),
										title: 'Buttons'
									},
										{
										containerContent: QiTASC$hatchinq$Examples$filesContent(model),
										icon: 'folder',
										id: elm$core$Maybe$Just('files-tab-button'),
										title: 'Files'
									}
									]),
								state: model.leftSidePanelState,
								topPageOffset: QiTASC$hatchinq$Hatchinq$AppBar$appBarHeight
							}),
							QiTASC$hatchinq$Examples$mainContent(model),
							QiTASC$hatchinq$Examples$rightSidePanel(
							{
								buttons: _List_fromArray(
									[
										{
										containerContent: QiTASC$hatchinq$Examples$filesContent(model),
										icon: 'account_balance',
										id: elm$core$Maybe$Just('projects-tab-button'),
										title: 'Projects'
									},
										{
										containerContent: QiTASC$hatchinq$Examples$filesContent(model),
										icon: 'settings',
										id: elm$core$Maybe$Just('settings-tab-button'),
										title: 'Settings'
									}
									]),
								state: model.rightSidePanelState,
								topPageOffset: QiTASC$hatchinq$Hatchinq$AppBar$appBarHeight
							})
						]))
				])));
};
var elm$browser$Browser$element = _Browser_element;
var QiTASC$hatchinq$Examples$main = elm$browser$Browser$element(
	{init: QiTASC$hatchinq$Examples$init, subscriptions: QiTASC$hatchinq$Examples$subscriptions, update: QiTASC$hatchinq$Examples$update, view: QiTASC$hatchinq$Examples$view});
_Platform_export({'Examples':{'init':QiTASC$hatchinq$Examples$main(
	elm$json$Json$Decode$succeed(
		{}))(0)}});}(this));