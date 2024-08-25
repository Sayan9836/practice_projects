import React, { useCallback, useEffect, useMemo, useState } from "react";
import Button from "./child_to_parent/Button";

const Memo = () => {
  const [countFirst, SetcountFirst] = useState(0);
  const [countSecond, SetCountSecond] = useState(0);

  const onShow = useCallback(() => {
    alert(countSecond);
  }, [countSecond]);

  return (
    <div>
      <div>
        <span>{countSecond}</span>
      </div>
      <Button onClick={onShow}>show</Button>
      {/* <button onClick={() => SetcountFirst(countFirst + 1)}>btn1</button> */}
      <button onClick={() => SetCountSecond(countSecond + 1)}>btn2</button>
    </div>
  );
};

export default Memo;
