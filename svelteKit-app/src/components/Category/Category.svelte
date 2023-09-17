<script>
	import { categories } from "../../mock/categories";
	import { categoryOrder } from "../../mock/categoryOrder";
  import "./category.css"

  const sortedCategories = categoryOrder.map(categoryId => categories[categoryId]);
</script>

<div id="category-wrapper">
  <ul id="category-menu">
    {#each sortedCategories as category}
    <li class="category-menu-list">
      <img src={category.picture} alt={category.picture}>
      <h3 class="menu-list-title">{category.name}</h3>
    </li>
    {/each}
  </ul>
</div>

