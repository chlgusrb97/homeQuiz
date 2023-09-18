<script lang="ts">
  import {page} from "$app/stores"
	import { categories } from "../../mock/categories";
	import { categoryOrder } from "../../mock/categoryOrder";
	import { products } from "../../mock/products";
	import type { ProductData } from "../../types/products.types";
  import "./products.css"

  type TitleCategory = {
    description?: string,
    name: string,

  }

  const categoryId = $page.params.categoryId
  const sortedCategories = categoryOrder.map(categoryId => categories[categoryId]);
  const titleCategory: TitleCategory = {
    description: "",
    name: ""
  }
  const productsList: ProductData[] = []
  
  const getFindedCategory = () => {    
    for(let i = 0; i < sortedCategories.length; i++) {
      if(categoryId === sortedCategories[i].name.replace(/\s+/g, '_').toLocaleLowerCase()) {
        titleCategory.name = sortedCategories[i].name

        if(sortedCategories[i].description) {
          titleCategory.description = sortedCategories[i].description
        }

        sortedCategories[i].productOrder.forEach((order) => {
          if(Object.keys(products).includes(order)) {
            productsList.push(products[order])
          }
        })

        return
      }
    }
  }

  getFindedCategory()

  const formatDollor= (frice: number) => {
    const dollor = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format((frice / 100 ))

    return dollor
  }
</script>

<div id="products-wrapper">
  <div class="products-top">
    <button class="products-top-back" on:click={() => history.back()}>
      <i class="products-top-back-arrow"></i>
    </button>
    <div class="products-top-title">
      <h1>{titleCategory.name}</h1>
      {#if titleCategory.description}
        <i class="products-top-title-dotted"></i>
        <p>{titleCategory.description}</p>
      {/if}
    </div>
  </div>
  <ul class="products-menu">
    {#each productsList as product}
      <li class="products-menu-list">
        <div class="products-menu-list-image">
          {#if product.picture}
            <img src={product.picture} alt={product.picture}>
          {:else}
            <p class="list-image-non">{product.name}</p>
          {/if}
        </div>
        <p class="products-menu-list-name">{product.name}</p>
        <p class="products-menu-list-price">{formatDollor(product.price)}</p>
      </li>
    {/each}
  </ul>
</div>