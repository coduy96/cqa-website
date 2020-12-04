---
id: module1
title: Modules
sidebar_label: Modules
---

## Back-end

### Authentication
Xác thực tính hợp lệ của tài khoản và phân role cho user
```javascript
Input:
{
    username: 'aaaa' || String
    password: 'aaaa' || String
}
Output: {'AuthData'}
```

### Filter
Filter dữ liệu từ phía server
```javascript
Input:
{
    startDate: 'timestamp' || String
    endDate: 'timestamp' || String
    format: 'day' or 'month' or 'year' || String
}
Output:{'ListData'}
```

### Realtime
Khởi tạo liên kết realtime giữa server và client
```javascript
Input: CreateInstanceListener(AuthData)

Output: StreamData
```

### EditTarget
Chỉnh sửa mục tiêu
```javascript
Input:
{
    complete: 100 || Number
    createDate: November 24/2012 at 10:32:02 AM || Timestamp
    target: 123 || Number
    week: 41 || Number
}
Output:{"Edit status"}
```

### CreateNewTarget
Tạo mục tiêu mới
```javascript
Input:
{
    complete: 100 || Number
    createDate: November 24/2012 at 10:32:02 AM || Timestamp
    target: 123 || Number
    week: 41 || Number
}
Output:{"Create status"}
```

### DeleteTarget
Xóa mục tiêu
```javascript
// Input:
{
    id: 'aaaa' || String
}
Output:{"Delete status"}
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