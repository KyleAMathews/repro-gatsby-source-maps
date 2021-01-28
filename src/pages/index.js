import React, {useEffect, useState} from "react";

import {Box, Text} from "@chakra-ui/react"

export default function Home() {
  

const [content, setContent] = useState("foo");

console.log(content)

useEffect( () => {
  setContent("baz");
},[])

  return (
    <Box onClick={() => setContent("bar")}>
      <Text>Click me: {content}</Text>

    </Box> 
  )
}
