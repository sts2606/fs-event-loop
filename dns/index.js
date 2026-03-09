import dns from 'dns';

dns.resolve4('google.com', (err, addresses) => {
  if (err) {
    console.error("Помилка розв\\'язання доменного імені:", err);
    return;
  }
  console.log(`IP-адреси для google.com: ${addresses.join(', ')}`);
});

const ip = '8.8.8.8';
dns.reverse(ip, (err, hostnames) => {
  if (err) {
    console.error('Помилка зворотного пошуку:', err);
    return;
  }
  console.log(`Доменні імена для IP-адреси ${ip}: ${hostnames.join(', ')}`);
});
