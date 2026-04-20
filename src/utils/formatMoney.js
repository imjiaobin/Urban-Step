export function formatMoney(num, currency = 'TWD', locale = 'zh-TW') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
  }).format(num);
}