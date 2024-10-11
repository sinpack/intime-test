import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { validateNotEmpty } from '$lib/helpers';

export const actions: Actions = {
  submitForm: async ({ request }) => {
    const data = await request.formData();

    const name = data.get('name') as string;
    const email = data.get('email') as string;
    const subjectTitle = data.get('subjectTitle') as string;
    const subjectContent = data.get('subjectContent') as string;

    const errors: { [key: string]: string } = {};

    if (validateNotEmpty(name)) {
      errors.name = 'Απαιτείται όνομα';
    }

    if (validateNotEmpty(email)) {
      errors.email = 'Απαιτείται email';
    }

    if (validateNotEmpty(subjectTitle)) {
      errors.subjectTitle = 'Απαιτείται τίτλος περιεχομένου';
    }

    if (validateNotEmpty(subjectContent)) {
      errors.subjectContent = 'Απαιτείται περιεχόμενο';
    }

    if (Object.keys(errors).length > 0) {
      return fail(400, { errors, name, email, subjectTitle, subjectContent });
    }

    // Make the request to the backend server
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        subjectTitle,
        subjectContent,
      }),
    });

    // Handle non-OK response
    if (!response.ok) {
      return fail(500, { message: 'Κάτι συνέβη, παρακαλώ ξαναπροσπαθήστε αργότερα' });
    }

    // Parse the response and return success
    const result = await response.json();

    return {
      success: true,
      message: result.message,
    };
  },
};
