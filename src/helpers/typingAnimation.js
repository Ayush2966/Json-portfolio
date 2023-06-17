import {
  useEffect
} from "react";

const typeJSON = (userData, data, setData, delay, setTypingStatus) => {
  useEffect(() => {
    // set index
    let i = 0;

    // start typing character by character
    const interval = setInterval(() => {

      // append character
      setData(
        (prevText) => prevText + JSON.stringify(userData, null, 2).charAt(i) + (i === 0 ? "" : "")
      );

      // add new line after first '{' in JSON
      if (i === 1) {
        setData(
          (prevText) => prevText + "\n "
        )
      }
      i++;

      // stop typing once all data is printed
      if (i === JSON.stringify(userData, null, 2).length) {
        clearInterval(interval);
        setTypingStatus(false)
        console.log("hello")
      }
    }, delay);


    return () => clearInterval(interval);

  }, []);

}

const typeString = (userData, data, setData) => {
  // set index
  let i = 0;
  useEffect(() => {
    // start typing character by character
    const interval = setInterval(() => {

      // append character
      setData(
        (prevText) => prevText + userData[i]
      );
      i++;

      // stop typing once all data is printed
      if (i === userData.length) {
        clearInterval(interval);
        console.log("hello")
      }
    }, 50);


    return () => clearInterval(interval);

  }, []);

}

export {
  typeJSON,
  typeString
};