export default function getCurrentMonthYear() {
    const date = new Date();
    return new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(date);
  }