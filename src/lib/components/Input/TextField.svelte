<!-- TextField.svelte -->
<script lang="ts">
  export let value: string = '';
  export let placeholder: string = 'Enter text';
  export let type: string = 'text';
  export let disabled: boolean = false;
  export let error: string = '';
  export let errorLabel: string = '';
  export let maxLength: number = 100;
  export let title: string = '';
  export let onChange: (value: string) => void = () => {};
  export let onFocus: () => void = () => {};
  export let onBlur: () => void = () => {};
  export let isTextarea: boolean = false;
  export let name: string;

  const handleInputChange = (event: Event) => {
    const input = event.target as HTMLInputElement | HTMLTextAreaElement;
    onChange(input.value);
  };
</script>

<div class="relative mb-5">
  <span class="block text-gray-700 font-medium mb-1">{title}</span>
  {#if isTextarea}
    <textarea
      {name}
      bind:value
      class={`w-full border rounded-md px-4 py-2 
        ${disabled ? 'bg-gray-200 cursor-not-allowed' : 'bg-white'} 
        ${error ? 'border-red-500' : 'border-gray-300'} 
        focus:outline-none focus:ring-2 focus:ring-blue-400 
        ${disabled ? 'opacity-50' : 'opacity-100'}`}
      {placeholder}
      maxlength={maxLength}
      on:input={handleInputChange}
      on:focus={onFocus}
      on:blur={onBlur}
      {disabled}
    ></textarea>
  {:else}
    <input
      {name}
      {...{ type }}
      bind:value
      class={`w-full border rounded-md px-4 py-2 
        ${disabled ? 'bg-gray-200 cursor-not-allowed' : 'bg-white'} 
        ${error ? 'border-red-500' : 'border-gray-300'} 
        focus:outline-none focus:ring-2 focus:ring-blue-400 
        ${disabled ? 'opacity-50' : 'opacity-100'}`}
      {placeholder}
      maxlength={maxLength}
      on:input={handleInputChange}
      on:focus={onFocus}
      on:blur={onBlur}
      {disabled}
      required={false}
    />
  {/if}

  {#if error}
    <span class="text-red-500 text-sm mt-1">{errorLabel}</span>
  {/if}
</div>
