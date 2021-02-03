import React from "react";
import { BookCard } from "./BookCard";

export const BooksList = () => {
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-4 h-auto border-2 border-gray-300 space-y-4">
      <h1 className="mb-4 text-4xl">Just released</h1>
      <BookCard></BookCard>
      <BookCard></BookCard>
      <BookCard></BookCard>
      <BookCard></BookCard>
      <BookCard></BookCard>
    </div>
  );
};