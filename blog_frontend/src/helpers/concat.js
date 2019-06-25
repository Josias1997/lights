const concat = (separator) => {
    return Array.prototype.slice.call(arguments, 1).join(separator)
};

export default concat;