---
id: module1
title: Modules
sidebar_label: Modules
---

## Back-end

### Authentication
Xác thực tính hợp lệ của tài khoản và phân role cho user
```javascript
// Input:
{
    username: 'aaaa' || String
    password: 'aaaa' || String
}
Output:'JavaScript syntax highlighting'
```

### Filter
Filter dữ liệu từ phía server
```javascript
// Input:
{
    startDate: 'timestamp' || String
    endDate: 'timestamp' || String
    format: 'day' or 'month' or 'year' || String
}
// Output:
{

}
```

### GetSaleData
Lấy thông tin liên quan đến dữ liệu bán hàng
```javascript
// Input:
{
    username: 'aaaa' || String
    password: 'aaaa' || String
}
Output:'JavaScript syntax highlighting'
```

### Realtime
Khởi tạo liên kết realtime giữa server và client
```javascript
// Input:
{
    username: 'aaaa' || String
    password: 'aaaa' || String
}
Output:'JavaScript syntax highlighting'
```

### GetProductInfo
Lấy thông tin sản phẩm 
```javascript
// Input:
{
    username: 'aaaa' || String
    password: 'aaaa' || String
}
Output:'JavaScript syntax highlighting'
```

### EditCampaign
Chỉnh sửa nội dung của chiến dịch
```javascript
// Input:
{
    username: 'aaaa' || String
    password: 'aaaa' || String
}
Output:'JavaScript syntax highlighting'
```

### CreateNewCampaign
Tạo chiến dịch mới
```javascript
// Input:
{
    username: 'aaaa' || String
    password: 'aaaa' || String
}
Output:'JavaScript syntax highlighting'
```

### DeleteCampaign
Xóa chiến dịch
```javascript
// Input:
{
    username: 'aaaa' || String
    password: 'aaaa' || String
}
Output:'JavaScript syntax highlighting'
```

### EditTarget
Chỉnh sửa mục tiêu
```javascript
// Input:
{
    username: 'aaaa' || String
    password: 'aaaa' || String
}
Output:'JavaScript syntax highlighting'
```

### CreateNewTarget
Tạo mục tiêu mới
```javascript
// Input:
{
    username: 'aaaa' || String
    password: 'aaaa' || String
}
Output:'JavaScript syntax highlighting'
```

### DeleteTarget
Xóa mục tiêu
```javascript
// Input:
{
    username: 'aaaa' || String
    password: 'aaaa' || String
}
Output:'JavaScript syntax highlighting'
```

## Front-end

### UIStatemanagement

Quản lý và cập nhật thành phần trong giao diện khi có sự thay đổi
```javascript
// Input:
Observable: 'variable.Obx' || Observable Variable
//Output
Action: Change the UI
```

### ResizeScreen
Thay đổi kích thước màn hình làm việc của Beebee, giúp thu ngọn Beebee từ màn hình làm việc lớn thành widget nhỏ.
```javascript
// Input:
Event: 'toControlling', 'toStarting',  'toDetailing'|| Method from WindowsController Class
// Output
CurrentState: 'ONCONTROLLING', 'ONSTART', 'ONDETAILING' || Observable String
```

### Set top layer
Thuộc tính HWND_TOPMOST giúp windows luôn nằm trên top layer
```javascript
// Input:
SetWindowPos(GetRootWindow(registrar_->GetView()), HWND_TOPMOST, x, y, width,
                 height, SWP_NOACTIVATE | SWP_NOOWNERZORDER);
```