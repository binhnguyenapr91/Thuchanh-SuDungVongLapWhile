# Thuchanh-SuDungVongLapWhile
Luyện tập sử dụng vòng lặp While
Mục tiêu
Luyện tập sử dụng vòng lặp while.

Mô tả
Để hoàn thành bài thực hành, học viên cần:

Đưa mã nguồn lên GitHub
Dán link của repository lên phần nộp bài trên CodeGymX
Bài 1: Viết chương trình nhận vào một số từ hộp thoại, việc nhập kết thúc khi người dùng nhập vào giá trị -1. Mỗi giá trị nhập được sẽ được hiển thị ra và thực hiện tính tổng các giá trị đó. 

Hướng dẫn
Bước 1: Khai báo biến num để lưu giá trị nhập vào từ hộp thoại.

let num = prompt("Enter a number: ");
Bước 2: Khai báo biến total = 0, lưu tổng.

let total = 0;
Bước 3: Phân tích vòng lặp

Điều kiện vòng lặp thực hiện: num != -1

Bước 4: Viết mã phần thân vòng lặp

while( num != -1 ) {
   num = prompt("Enter a number: ");
   alert(number);
   //phần code tính tổng
   total += num;
} 
Bước 5: Hiển thị tổng

Bước 6: Thực thi chương trình. Quan sát kết quả

===================

Bài 2: Viết chương hình hiển thị thẻ <hr> theo độ rộng từ 1 đến 100. Kết quả sẽ được hiển thị như hình



Hướng dẫn
Bước 1: Phân tích vòng lặp while

Điều kiện vòng lặp thực hiện: Độ rộng thẻ hr <= 100

Vòng lặp thực hiện thế nào: Hiển thị thẻ hr với độ rộng bắt đầu từ 1 đến 100.

Bước 2: Viết vòng lặp while

let i = 1;

while (i < 100) {
    //phân thân vòng lặp
    document.write("<hr width = " + i + "%>");
    i++;
}
Bước 3: Chạy chương trình. Quan sát kết quả.
