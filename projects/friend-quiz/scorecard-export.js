function exportScorecardImage(latestComparisonResult, currentTheme) {
  if (!latestComparisonResult) return;
  const canvas = document.createElement('canvas');
  canvas.width = 1080;
  canvas.height = 1920;
  const ctx = canvas.getContext('2d');

  const isLight = currentTheme === 'light';
  ctx.fillStyle = isLight ? '#F0F0F0' : '#0F0F0F';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = isLight ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.roundRect(80, 200, 920, 1520, 48);
  ctx.stroke();

  ctx.fillStyle = isLight ? '#4F4F4F' : '#8F8F8F';
  ctx.font = '700 36px Inter, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('COMPATIBILITY SCORECARD', 540, 360);

  ctx.fillStyle = isLight ? '#1C4494' : '#6CA0F8';
  ctx.font = '800 64px Inter, sans-serif';
  ctx.fillText(`${latestComparisonResult.name1}  x  ${latestComparisonResult.name2}`, 540, 460);

  ctx.fillStyle = '#24ACD4';
  ctx.font = '800 220px Inter, monospace';
  ctx.fillText(`${latestComparisonResult.percentage}%`, 540, 820);

  ctx.fillStyle = isLight ? '#0F0F0F' : '#F0F0F0';
  ctx.font = '600 44px Inter, sans-serif';
  const label = latestComparisonResult.type === 'similarity' ? 'Overall Similarity Match' : 'Knowledge Accuracy Match';
  ctx.fillText(label, 540, 940);

  ctx.strokeStyle = isLight ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(180, 1080);
  ctx.lineTo(900, 1080);
  ctx.stroke();

  ctx.fillStyle = isLight ? '#4F4F4F' : '#8F8F8F';
  ctx.font = '400 34px Inter, sans-serif';
  ctx.fillText('Take the quiz and test your compatibility:', 540, 1260);

  ctx.fillStyle = isLight ? '#0F0F0F' : '#F0F0F0';
  ctx.font = '700 42px Inter, sans-serif';
  ctx.fillText('thataustrianone.eu', 540, 1340);

  const link = document.createElement('a');
  link.download = `compatibility-${latestComparisonResult.name1}-${latestComparisonResult.name2}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
}