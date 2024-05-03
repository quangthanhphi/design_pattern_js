//vi phạm nguyên tắc SOLID, có nhiều if lỗi 1 hàm, các hàm còn lại sẽ try catch 
function getPrice(originalPrice, typePromotion = 'default'){

  //Giảm giá khi người dùng đặt trước một sản phẩm của VINFAST
  if(typePromotion === 'preOrder') {
    return originalPrice * 0.8; // giảm 20%
  } //Ở SOLID thì nó đã phá vỡ nguyên tắc đầu tiên. Đó là Nguyên tắc trách nhiệm duy nhất

  //Tiếp tục thêm tính năng khuyến mãi thông thường, ví dụ Nếu giá gốc < 200 thì giảm 10%, còn > thì giảm tối đa 30
  if(typePromotion === 'promotion') {
    return originalPrice <= 200 ? originalPrice * 0.9 : originalPrice - 30;
  } 
  // Black friday
  if(typePromotion === 'blackFriday') {
    return originalPrice <= 200 ? originalPrice * 0.8 : originalPrice - 50;
  } 
  // 11/11 ...
  if(typePromotion === '11/11/2024') {
    return originalPrice <= 200 ? originalPrice * 0.8 : originalPrice - 50;
  } 
  // Thời chưa có marketing
  if(typePromotion === 'default') {
    return originalPrice;
  } 
}

console.log(`-->PRICE::`, getPrice(200,'preOrder'))