import { useState } from "react";

import MyInput from "../UI/MyInput";

const SearchPost = ({ onSearchPost }: { onSearchPost: Function }) => {
  const [search, setSearch] = useState('');

  const onSearch = (text: string) => {
    setSearch(text);
    onSearchPost(text);
  };

  return (
    <div className="container p-2">
      <div className="mb-2">
        <MyInput
          value={search}
          onChange={(e: any) => onSearch(e.target.value)}
          type="text"
          placeholder="Search text"
        />
      </div>
    </div>
  );
};

export default SearchPost;
