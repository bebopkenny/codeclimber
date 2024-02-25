import React, { useState } from "react";

function MyForm() {
  const [formValues, setFormValues] = useState({
    number: "",
    name: "",
    prompt: "",
    timpeComplexity: "",
    spaceComplexity: "",
    code: "",
    explanation: "",
    topic: [],
    difficulty: "easy",
    progress: "pending",
    relatedLinks: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);

    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  //list of the attributes:
  //problem number
  //name
  //prompt
  //time comp
  //space comp
  //code
  //explanation
  //topic Array [linked list,...]
  //progress enum [pending, completed]
  //difficulty [easy,med, hard]
  //related links

  return (
    <form onSubmit={handleSubmit}>
      <label>
        No.
        <input
          type="text"
          name="problemNumber"
          value={formValues.number}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Name
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Description
        <input
          type="text"
          name="description"
          value={formValues.description}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Time Complexity
        <input
          type="text"
          name="timeComp"
          value={formValues.timpeComplexity}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Space Complexity
        <input
          type="text"
          name="spaceComp"
          value={formValues.spaceComplexity}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Code
        <input
          type="text"
          name="code"
          value={formValues.code}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Explanation
        <input
          type="text"
          name="explanation"
          value={formValues.explanation}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Topic
        <input
          type="text"
          name="topic"
          value={formValues.number}
          onChange={handleInputChange}
        />
      </label>
{/* Unordered List for the topic */}




      <label>
        Difficulty
        <input
          type="text"
          name="problemNumber"
          value={formValues.number}
          onChange={handleInputChange}
        />
      </label>
      <label>Related Links
      <input
          type="text"
          name="problemNumber"
          value={formValues.number}
          onChange={handleInputChange}
        />
      </label>
    </form>
  );
}
/*
Array, String, Hash Table, Dynamic Programming, Math, Sorting, Greedy, Depth-First-Search, Binary Search, 
Database, Breadth-First Search, Tree, Matrix, Two Pointers, Bit Manipulation, Binary Tree, Heap (Priority Queue), Stack, 
Prefix Sum, Simulation, Graph, Desgin, Counting, Sliding Window, Bracktracking, Union Find, Enumeration, Linked List, Ordered Set, 
Monotonic Stack, Number Theory, Trie, Divide and Conquer, Recursion, Bitmask, Queue, Binaray Search Tree, Segment Tree, Memoriztion, Geometry
*/

