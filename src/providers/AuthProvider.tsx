// "use client";
// import React, { createContext, useContext, useState } from "react";

// const AuthContext = createContext({
//   userId: null,
//   login: (userId: any) => {},
//   logout: () => {},
// });

// export const AuthProvider = ({ children }: any) => {
//   const [userId, setUserId] = useState(null);

//   const login = (userId: any) => {
//     setUserId(userId);
//   };

//   const logout = () => {
//     setUserId(null);
//   };

//   return (
//     <AuthContext.Provider value={{ userId, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };
