<script lang="ts">
  import { enhance } from '$app/forms';
  import type { ActionData } from '../../routes/contact/$types';
  import TextField from './Input/TextField.svelte';

  export let form: ActionData;
  let errors;
  let formData;

  $: formData = {
    name: form?.name || '',
    email: form?.email || '',
    subjectTitle: form?.subjectTitle || '',
    subjectContent: form?.subjectContent || '',
  };

  $: errors = {
    name: form?.errors?.name || '',
    email: form?.errors?.email || '',
    subjectTitle: form?.errors?.subjectTitle || '',
    subjectContent: form?.errors?.subjectContent || '',
  };

  const resetError = (field: keyof typeof errors) => {
    errors[field] = '';
  };

  const handleChange = (field: keyof typeof formData, value: string) => {
    resetError(field);
    formData[field] = value;
  };
</script>

<form
  method="POST"
  action="?/submitForm"
  use:enhance
  class="flex flex-col w-full basis-1/2 px-5 py-20 h-full"
>
  {#if form?.success}
    <p class="text-green-600">{form.message}</p>
  {/if}

  <h2 class="text-3xl font-semibold mb-4 text-center">Φόρμα επικοινωνίας</h2>
  <fieldset>
    <TextField
      bind:value={formData.name}
      name="name"
      title="Όνομα Εταιρείας"
      placeholder="Προσθέστε το όνομα της εταιρείας"
      error={errors.name}
      errorLabel={errors.name}
      onChange={(value) => handleChange('name', value)}
      onFocus={() => resetError('name')}
    />

    <TextField
      bind:value={formData.email}
      name="email"
      title="Το email σας"
      placeholder="Προσθέστε το email σας"
      type="email"
      error={errors.email}
      errorLabel={errors.email}
      onChange={(value) => handleChange('email', value)}
      onFocus={() => resetError('email')}
    />

    <TextField
      bind:value={formData.subjectTitle}
      name="subjectTitle"
      title="Θέμα μηνύματος"
      placeholder="Προσθέστε το θέμα του μηνύματος σας"
      error={errors.subjectTitle}
      errorLabel={errors.subjectTitle}
      onChange={(value) => handleChange('subjectTitle', value)}
      onFocus={() => resetError('subjectTitle')}
    />

    <TextField
      bind:value={formData.subjectContent}
      name="subjectContent"
      title="Το μήνυμά σας"
      placeholder="Προσθέστε το μήνυμα σας"
      isTextarea={true}
      error={errors.subjectContent}
      errorLabel={errors.subjectContent}
      onChange={(value) => handleChange('subjectContent', value)}
      onFocus={() => resetError('subjectContent')}
    />
  </fieldset>
  <button
    type="submit"
    class="flex justify-center self-center w-1/2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
  >
    ΥΠΟΒΟΛΗ
  </button>
</form>
