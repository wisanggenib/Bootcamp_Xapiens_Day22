import React, { createRef } from 'react';

export const navigationRef = createRef();
export const MyNavigate = (name, params) => {
    navigationRef.current?.navigate(name, params);
};
// export const MyNavigateReset = () => {
//     navigationRef.navigate?.reset({
//         index: 0,
//         routes: [{ name: 'Landing' }],
//     });
// };
