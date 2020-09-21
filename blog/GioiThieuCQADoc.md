---
slug: report2
title: Giới thiệu Beebee document
author: Duy Co
author_title: POT Team
author_url: https://github.com/coduy96
author_image_url: https://avatars3.githubusercontent.com/u/12905952?s=460&u=5e0b6c0b7878baf2d304e218c0f2f9d0d3cce6f7&v=4
tags: [introduction]
---
Bài viết sẽ cung cấp thông tin về các thành phần tạo nên một project Beebee và cách mà các thành phần đó tương tác kết nối với nhau.
<!--truncate-->
<h3>
Thành phần cấu tạo nên project Beebee
</h3>
Có những thành phần quan trọng sau đây giúp cấu thành nên một project Beebee:

+ Work flow (Link):
    + Là bản vẽ mô tả Function(Link)
    + Giúp lập trình viên hiểu rỏ về luồng đi của dữ liệu
    + Phát triển chức năng nhanh hơn
    + Bảo trì ứng dụng dễ dàng hơn

+ Module (Link):
    + Được phát triển để giải quyết một vấn đề nhỏ có tình tái sử dụng trong một Function(link)
    + Là thành phần cấu tạo nên Function(link)
    + Có dữ liệu input và output được thiết kế theo khuôn mẫu để đảm bản tính toàn vẹn của dữ liệu
    + Khoanh vùng bugs dễ dàng
    + Dễ mở rộng ứng dụng khi có nhu cầu
    + Tăng tốc độ lập trình
    + Phương thức lập trình được đồng bộ không bị phân mảnh
    + Thành viên mới gia nhập dễ nắm bắt yêu cầu công việc

+ Function (link):
    + Giải quyết một vấn đề hay nhu cầu nào đó của người dùng
    + Là thành phần cấu tạo nên một EV hoàn chỉnh
    + Được cấu thành từ nhiều module
    + Là sự kết hợp giữa UI và module
    + Phân vùng bugs theo EV một cách đơn giản

+ UI (link):
    + Giao diện người dùng
    + Thành phần có tính tương tác trực tiếp với người dùng

+ EV (link):
    + Là phiên bản được phát hành đến người dùng
    + Phải đáp ứng các tiêu chí về hoạt động ổn định

<h3>
Quan hệ giữa các thành phần
</h3>

![link-anh](https://i.ibb.co/JHMLc2B/CQA-relation.png" )