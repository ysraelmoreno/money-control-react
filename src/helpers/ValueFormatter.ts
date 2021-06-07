export function formatDate(timezone: string, date: Date) {
  return new Intl.DateTimeFormat(timezone).format(new Date(date));
}

type MoneyFormat = {
  locale: string;
  style: string;
  currency: string;
  value: number;
};

export function formatCurrencyMoney({
  locale,
  style,
  currency,
  value,
}: MoneyFormat) {
  return new Intl.NumberFormat(locale, {
    style: style,
    currency: currency,
  }).format(value);
}
