<script lang="ts">
	import { languages, tableNumber } from "../../mock/headerData";
  import "./header.css"

  let language = languages[0].name
  let isToggle = false

  const selectToggle = () => {
    isToggle = !isToggle
  }

  const hadleSelectedLanguage = (selectedLanguage: string) => {
    language = selectedLanguage
    isToggle = false
  }

  const handleClickCallWaiter = () => {
    alert("Waiter Called")
  }

</script>

<header id="header">
  <ul id="header-menu">
    <li class="header-menu-language">
      <button on:click={() => selectToggle()}>
        <p>{language}</p>
        <img src="/chevron-down.png" alt="chevron-icon" style={`transform: ${isToggle ? "rotate(180deg)" : "rotate(0)"}`}>
      </button>

      {#if isToggle}
        <div class="header-menu-language-list">
          {#each languages as selectedLanguage}
            <button on:click={() => hadleSelectedLanguage(selectedLanguage.name)}>
              {selectedLanguage.name}
            </button>
          {/each}
        </div>
      {/if}
    </li>

    <li class="header-menu-call" >
      <button on:click={() => handleClickCallWaiter()}>
        <img src="/notifications_active.png" alt="notifications-icon" />
        <p>Call Waiter</p>
      </button>
    </li>

    <li class="header-menu-bill" >
      <img src="/receipt.png" alt="receipt-icon">
      <p>View Bill</p>
    </li>

    <li class="header-menu-shopping" >
      <img src="shopping_cart.png" alt="shopping-cart-icon">
      <p>My Cart</p>
      <div class="menu-shopping-count">0</div>
    </li>

    <li class="header-menu-table" >
      <img src="/table.png" alt="table-icon" />
      <p class="menu-table-number">{tableNumber}</p>
    </li>
  </ul>
</header>