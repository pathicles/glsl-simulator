
export default class ASTVisitor {
    constructor(callbacks = {})
    {
        this._callbacks = callbacks;
        for (key in this._callbacks) { // Keep braces in case this assert is stripped out.
            console.assert(key !== "undefined", "Visitor callback provided for node type 'undefined'. This is a bug. Function text: " + this._callbacks[key].toString());
        }
    }
    // Subclasses should override this to plug in their overridden visit methods.
    visitorForType(type)
    {
        if (type in this._callbacks)
            return this._callbacks[type];

        return this.defaultVisitor;
    }

    visitNode(node)
    {
        if (!node || !node.type)
            return;

        var callback = this.visitorForType(node.type);
        return callback.call(this, node);
    }

    visitList(nodeList)
    {
        if (!(nodeList instanceof Array) || !nodeList.length)
            return;

        var result = [];
        for (var i = 0; i < nodeList.length; ++i)
            result.push(this.visitNode(nodeList[i]));

        return result;
    }

    defaultVisitor(node)
    {
        for (var key in node) {
            var val = node[key];
            if (val instanceof Array)
                this.visitList(val);
            else if (val instanceof Object && val.type)
                this.visitNode(val);
        }
    }    
}


