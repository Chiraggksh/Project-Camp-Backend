const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err)); //promise.resolve already resolve krke deta h : it returns a promise alr in fulfilled state and uski value jo hm daalte h vo hoti h
  };
};

export { asyncHandler };

//iska fyda yeee h naa toh br brr catch block lgana h and also naa next ka use krnaa which im not even using just function bnaoo and jo apko main kaam krna h vo krdoww
