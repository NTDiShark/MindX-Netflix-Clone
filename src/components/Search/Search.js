import { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { router } from "../../constants/router";
import { useRecoilState } from "recoil";
import { valueSearchStore } from "../../store/valueSearchStore";
import "./Search.css";

const Search = () => {
  const [valueSeach, setValueSeach] = useRecoilState(valueSearchStore);

  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (!valueSeach) {
      navigate(router.HOME);
    } else {
      navigate(router.SEARCH);
    }
  }, [valueSeach]);

  return (
    <div>
      <input
        value={valueSeach}
        onChange={(e) => setValueSeach(e.target.value)}
        className="input-search"
        placeholder="Search Movie"
      />
    </div>
  );
};

export default Search;
