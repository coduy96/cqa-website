---
id: achitecture
title: Architecture
sidebar_label: Architecture
---

## Architecture chính của một project Beebee (Dành cho team phát triển)

Để quản lý được state, team quyết định chọn mô hình MVC-style architecture, bằng việc sử dụng framework <a href="https://github.com/jonataslaw/getx" >GetX</a> như là một backbone cho cả hai injection và uni-directional dataflow và áp dụng a Command layer phía trên để quản lý lớp logic của ứng dụng. 

![hinh-anh](https://i.ibb.co/0hxnCb1/CQA-Programming-architecture-1.png)
