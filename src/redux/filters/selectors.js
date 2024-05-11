// import { createSelector } from "@reduxjs/toolkit";
// import Fuse from "fuse.js";
// import { selectContacts } from "../contacts/selectors";

// export const selectFilters = (state) => state.filters.name;

// // export const selectVisibleContacts = createSelector(
// //   [selectContacts, selectFilters],
// //   (contacts, inputValue) => {
// //     const options = {
// //       includeScore: true,
// //       keys: [
// //         {
// //           name: "name",
// //           weight: 0.3,
// //         },
// //         {
// //           name: "number",
// //           weight: 0.7,
// //         },
// //       ],
// //     };
// //     const fuse = new Fuse(contacts, options);
// //     const result = fuse.search(inputValue);
// //     if (result.length === 0) {
// //       return contacts;
// //     }
// //     return result.map((res) => res.item);
// //   }
// // );
