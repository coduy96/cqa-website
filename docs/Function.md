---
id: EV01
title: Sale data function detailing
sidebar_label: Sale data function detailing
---

## User's requirements

<!-- + Thông tin realtime 

+ User role:
    + User (người dùng bình thường)
    + Admin (quản lý) -->

+ <a href="#giao-diện-truy-cập-nhanh">Giao diện truy cập nhanh</a> (Dành cho User):

    + Hiện thị trên top layer của màn hình
    + Khởi động cùng windows
    + Thu phóng cửa sổ làm việc 

+ <a href="#theo-dỗi-sức-bán">Theo dỗi sức bán</a> (Dành cho User):

    + Của chiến dịch
    + Của sản phẩm trong chiến dịch
    + Của mục tiêu trong chiến dịch 

+ <a href="#quản-lý-chiến-dịch">Quản lý chiến dịch</a> (Dành cho admin):

    + Theo dỗi chiến dịch
    + Tạo chiến dịch mới
    + Chỉnh sửa thông số của chiến dịch
    + Xóa chiến dịch
    + Thêm sản phẩm vào chiến dịch
    + Thêm mục tiêu cho chiến dịch

+ <a href="#quản-lý-mục-tiêu">Quản lý mục tiêu</a> (Dành cho admin):

    + Theo dỗi mục tiêu
    + Tạo mới mục tiêu
    + Chỉnh sửa thông số của mục tiêu
    + Xóa mục tiêu

<!-- ## Thông tin realtime

Khi có bất kì sự thay đổi dữ liệu trên cơ sở dữ liệu Beebee ( thêm, sửa, xóa). Tất cả người dùng sẽ được cập nhật thông tin ngay tức thì.

Module cấu thành:
+ Listener module
+ Update UI module
+ UI state management

Work flow của chức năng: -->

## Problems solving

### Giao diện truy cập nhanh

#### Mô tả
 + Ứng dụng sẽ tự khởi động khi người dùng mở máy, người dùng không cần phải kích hoạt mở ứng dụng.
 + Ứng dụng luôn nằm trên top layer của màn hình, giúp người dùng truy cập nhanh vào ứng dụng mà không cần phải thoát khỏi ứng dụng đang làm việc.
 + Thu phóng cửa sổ làm việc giúp người dùng mở rộng màn hình làm việc khi cần thiết và thu nhỏ thành widget khi không có nhu cầu sử dụng.

#### Module cấu thành
+ <a href="module1#resizescreen">ResizeScreen(FrontEnd)</a>
+ <a href="module1#uistatemanagement">UIStatemanagement(frontend)</a>

#### Workflow
![giaodientruycapnhanh](https://i.ibb.co/162HVPq/cqa-page-route-1.png)

### Quản lý chiến dịch

#### Mô tả
Kết nối sản phẩm riêng lẻ thành một chiến dịch, giúp việc quản lý và đặt mục tiêu trở nên có ý nghĩa hơn.

+ Tạo chiến dịch mới:
    + Đặt tên cho chiến dịch
    + Thêm sản phẩm vào chiến dịch
    + Cài đặt mô tả cho chiến dịch

+ Chỉnh sửa thông tin cho chiến dịch
    + Đặt lại tên
    + Thêm hoặc xóa sản phẩm ra khỏi chiến dịch
    + Đặt lại mô tả cho chiến dịch


### Theo dỗi sức bán

#### Mô tả
Theo dỗi sức bán gồm 2 phần chính:
+ Xem nhanh: Xem nhanh thông số bán hàng trong tuần.
    + Hiển thị theo dạng biểu đồ tròn
    + Số sản phẩm bán được của từng chiến dịch trong ngày
    + Phần trăm đạt mục tiêu đạt được trong tuần

+ Xem chi tiết: Thông tin được hiển thị theo nhu cầu của user thông qua công cụ filter
    + Hiển thị theo dạng biểu đồ cột
    + Công cụ filter hỗ trợ hiển thị dữ liệu theo nhu cầu chi tiết của người dùng
    + Chọn định dạng hiển thị (ngày, tháng, năm)
    + Thời điểm bắt đầu (ngày, tháng, năm)
    + Thời điểm kết thúc (ngày, tháng, năm)

#### Module cấu thành
+ <a href="module1#realtime">Realtime(backend)</a>
+ <a href="module1#authentication">Authentication(backend)</a>
+ <a href="module1#filter">Filter(frontend)</a>
+ <a href="module1#uistatemanagement">UIStatemanagement(frontend)</a>
+ <a href="module1#getsaledata">GetSaleData(backend)</a>
#### Workflow
![theodoisucban](https://i.ibb.co/Y7DfdNY/cqatheodoimuctieu.png)

### Quản lý chiến dịch

#### Mô tả
Kết nối sản phẩm riêng lẻ thành một chiến dịch, giúp việc quản lý và đặt mục tiêu trở nên có ý nghĩa hơn.

+ Tạo chiến dịch mới:
    + Đặt tên cho chiến dịch
    + Thêm sản phẩm vào chiến dịch
    + Cài đặt mô tả cho chiến dịch

+ Chỉnh sửa thông tin cho chiến dịch
    + Đặt lại tên
    + Thêm hoặc xóa sản phẩm ra khỏi chiến dịch
    + Đặt lại mô tả cho chiến dịch

#### Module cấu thành 
+ <a href="module1#authentication">Authentication(backend)</a>
+ <a href="module1#createnewcampaign">CreateNewCampaign(backend)</a>
+ <a href="module1#editcampaign">EditCampaign(backend)</a>
+ <a href="module1#getproductinfo">GetProductInfo(backend)</a>
+ <a href="module1#deletecampaign">DeleteCampaign(backend)</a>
+ <a href="module1#uistatemanagement">UIStatemanagement(frontend)</a>

#### Workflow
![theodoisucban](https://i.ibb.co/nk5cNzj/cqaquanlychiendich.png)

### Quản lý mục tiêu

#### Mô tả
Thể hiện và quản lý mục tiêu.

+ Tạo mục tiêu mới:
    + Chọn vào chiến dịch cần đặt mục tiêu
    + Chọn tuần
    + Số lượng mục tiêu

+ Chỉnh sửa thông tin cho mục tiêu
    + Chọn lại số tuần
    + Đặt lại số lượng mục tiêu

#### Module cấu thành 
+ <a href="module1#createnewtarget">CreateNewTarget(backend)</a>
+ <a href="module1#edittarget">EditTarget(backend)</a>
+ <a href="module1#deletetarget">DeleteTarget(backend)</a>
+ <a href="module1#uistatemanagement">UIStatemanagement(frontend)</a>

#### Workflow
![theodoisucban](https://i.ibb.co/ZSxmGr0/cqaquanlymuctieu.png)