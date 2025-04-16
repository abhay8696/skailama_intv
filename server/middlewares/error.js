// Send response on 

const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // For logging in dev
  
    const statusCode = Number.isInteger(err.status) ? err.status : 500;
  
    res.status(statusCode).json({
      success: false,
      message: err.message || "Internal Server Error",
    });
  };
  
module.exports = {errorHandler};
  