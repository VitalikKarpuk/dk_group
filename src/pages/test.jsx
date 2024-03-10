export default function Page() {
  async function createInvoice(formData) {
    "use server";

    const rawFormData = {
      customerId: formData.get("customerId"),
      amount: formData.get("amount"),
      status: formData.get("status"),
    };
    await console.log(rawFormData);

    // mutate data
    // revalidate cache
  }

  return (
    <form action={createInvoice}>
      <input />
    </form>
  );
}
