import React from "react"; //Từ phiền bản 16.03 trở đi thì không cần phải import createContext từ react

// Đối tượng Context được tạo bằng React.createContext() cho phép bạn chia sẻ dữ liệu global 
// (hoặc giữa các thành phần không có mối quan hệ cha con trực tiếp) một cách thuận tiện và hiệu quả.
export const Songs = React.createContext()