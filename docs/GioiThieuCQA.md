---
id: GioiThieuCQA
title: Giới thiệu BeeBee
sidebar_label: Giới thiệu BeeBee
slug: /
---

## Beebee là gì ?

Beebee là công cụ luôn nằm ở màn hình chính của máy tính, khi cần người dùng chỉ cần rê chuột vào biểu tượng Beebee để xem thông báo hoặc click chuột để truy cập các chức năng chính của Beebee.

Hỗ trợ tập trung, tối ưu công việc một cách hiệu quả. Cung cấp thông tin liên quan đến HR, Data và Business để mọi người nắm bắt tốt hơn về hoạt động công ty.

<iframe src="https://www.youtube.com/embed/PL-o4RBP2oE" frameborder="0" allowfullscreen width="100%"height="450px"></iframe>

## Quy trình phát triển Beebee
Beebee được phát triển theo quy trình Evolution Version độc quyền tại Pitech. EV kế tiếp sẽ được bắt đầu khi EV hiện tại đáp ứng được yêu cầu chức năng đã thiết kế trước đó. Mỗi EV sẽ bao gồm những quy trình nhỏ như sau:
+ Specification: 
    + Xác định yêu cầu cho phần mềm thông qua nhu cầu thực tế của người sử dụng.
    + Thông qua nhu cầu thiết kế chức năng để giải quyết vấn đề <a href="#work-flow" >Work flow</a>
    + Cắt nhỏ chức năng lớn thành những phần nhỏ <a href="#module" >Module</a>
    + Làm việc với design để đảm bảo thiết kế và chức năng phải có tính liên kết <a href="#ui" >UI</a>
+ Development:
    + Lập trình từng <a href="#module" >Module</a> đã được thiết kế
    + Ráp <a href="#module" >Module</a> theo bản vẽ <a href="#work-flow" >Work flow</a> để hoàn thiện chức năng
    + Ráp chức năng vào <a href="#ui" >UI</a> để hoàn thành <a href="#ev" >EV</a>
+ Validation:
    + Release beta cho Team BOT trải nghiệm trước
    + Nhận feedback và sửa lỗi
    + Khi đáp ứng đủ yêu cầu sẽ release chính thức

![link-anh](https://i.ibb.co/sJPN4SX/CQA-process-2.png)

## Thành phần cấu tạo của project Beebee

Bao gồm các thành phần sau: <a href="#work-flow" >Work flow</a>, <a href="#module" >Module</a>, <a href="#function" >Function</a>, <a href="#ui" >UI</a>, <a href="#ev" >EV</a>.

Các thành phần sẽ liên kết với nhau theo mô hình <a href="#quan-hệ-giữa-các-thành-phần">Tree relationship</a>

## Work flow

+ Là bản vẽ mô tả Function
+ Giúp lập trình viên hiểu rỏ về luồng đi của dữ liệu
+ Phát triển chức năng nhanh hơn
+ Bảo trì ứng dụng dễ dàng hơn

## Module
+ Được phát triển để giải quyết một vấn đề nhỏ có tình tái sử dụng trong một Function
+ Là thành phần cấu tạo nên Function
+ Có dữ liệu input và output được thiết kế theo khuôn mẫu để đảm bản tính toàn vẹn của dữ liệu
+ Khoanh vùng bugs dễ dàng
+ Dễ mở rộng ứng dụng khi có nhu cầu
+ Tăng tốc độ lập trình
+ Phương thức lập trình được đồng bộ không bị phân mảnh
+ Thành viên mới gia nhập dễ nắm bắt yêu cầu công việc

## Function
+ Giải quyết một vấn đề hay nhu cầu nào đó của người dùng
+ Là thành phần cấu tạo nên một EV hoàn chỉnh
+ Được cấu thành từ nhiều module
+ Là sự kết hợp giữa UI và module
+ Phân vùng bugs theo EV một cách đơn giản

## UI
+ Giao diện người dùng
+ Thành phần có tính tương tác trực tiếp với người dùng

## EV
+ Là phiên bản được phát hành đến người dùng
+ Phải đáp ứng các tiêu chí về hoạt động ổn định

## Quan hệ giữa các thành phần

![link-anh](https://i.ibb.co/JHMLc2B/CQA-relation.png" )

Quan hệ giữa các thành phần được mô phỏng dựa trên mô hình rể cây ( [Tree-relationship](https://www.grammarbank.com/family-tree-names.html/)), thành phần trên là cấu tạo của những thành phần con ở dưới.

Một chức năng hoàn chỉnh được cấu thành từ nhiều Module nhỏ và UI, những Module sẽ được gắn ghép dựa theo bản vẽ Work flow.

EV là phần tổng hợp của những chức năng hoàn chỉnh và hoạt động ổn định theo bước <a href="#quy-trình-phát-triển-beebee">Specification</a> ban đầu.
