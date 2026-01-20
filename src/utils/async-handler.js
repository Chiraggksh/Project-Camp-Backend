const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));  //promise.resolve already resolve krke deta h : it returns a promise alr in fulfilled state and uski value jo hm daalte h vo hoti h
  };
};

export { asyncHandler };
