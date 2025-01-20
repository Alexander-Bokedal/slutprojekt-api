import "./_dropdown.scss";

export const createDropdown = (
  placeholder: string,
  items: string[],
  onSearch: (filteredItems: string[]) => void,
): HTMLDivElement => {
  const container = document.createElement("div");
  container.className = "search-container";

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = placeholder;
  input.className = "search-container__input"; // BEM: block__element

  const resultList = document.createElement("ul");
  resultList.className = "search-container__results"; // BEM: block__element

  input.addEventListener("input", () => {
    const query = input.value.toLowerCase();
    const filteredItems = items.filter((item) =>
      item.toLowerCase().includes(query),
    );
    onSearch(filteredItems);

    // Update the displayed results
    resultList.innerHTML = "";
    filteredItems.forEach((filteredItem) => {
      const listItem = document.createElement("li");
      listItem.textContent = filteredItem;
      listItem.className = "search-container__item"; // BEM: block__element

      resultList.appendChild(listItem);
    });
  });

  container.appendChild(input);
  container.appendChild(resultList);

  return container;
};
