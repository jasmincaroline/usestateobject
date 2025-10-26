# 🎓 **Teacher's Grade Manager**

**A simple, responsive React application designed to help educators efficiently manage and track student academic performance.**

---

## ✨ **Overview**
![UseStateObject gif](https://github.com/user-attachments/assets/c26c91f0-8e74-4b0c-9f94-6a80487993e8)

The **Teacher's Grade Manager** is an **intuitive** tool built with **React** to simplify the administrative burden on educators. It provides a quick and centralized platform where teachers can:
* **Add** new students.
* **Record** their grades.
* **Edit** existing entries.
* **Instantly visualize** the pass/fail status.

---

## 🚀 **Features**

The application offers the following core functionalities:

### **Data Management**

* **Add Student:** Quickly register a student with their **name**, **subject**, and recorded **grade**.
* **Entry Management:** Easily **edit** or **delete** existing student entries.

### **Logic and Validation**

* **Automatic Calculation:** Instant determination of **Pass/Fail** status.
* **Validation:** Ensures that **all fields** are filled and the **grade** is strictly between **0 and 10**.

### **Design & Usability**

* **Centralized Layout:** Features a clean *header* perfect for including a **school logo** and the project title.
* **Responsive Design:** The layout adapts flawlessly across **different screen sizes** (mobile, tablet, and desktop).

---

## 💡 **Pass/Fail Logic**

The student's status is automatically evaluated based on the following criteria:

| Status | Criteria |
| :--- | :--- |
| **PASSED** | If $\text{Grade} \ge 6$ |
| **FAILED** | If $\text{Grade} < 6$ |

---
