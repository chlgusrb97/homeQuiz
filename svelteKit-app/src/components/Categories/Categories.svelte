<script>
	import { categories } from "../../mock/categories";
	import { categoryOrder } from "../../mock/categoryOrder";
  import "./categories.css"

  const sortedCategories = categoryOrder.map(categoryId => categories[categoryId]);
</script>

<div id="category-wrapper">
  <ul id="category-menu">
    {#each sortedCategories as category}
    <li class="category-menu-list">
      <a href={`/${category.name.replace(/\s+/g, '_').toLocaleLowerCase()}`}>
        <img class="menu-list-image" src={category.picture} alt={category.picture}>
        <h3 class="menu-list-title">{category.name}</h3>
      </a>
    </li>
    {/each}
  </ul>
</div>

