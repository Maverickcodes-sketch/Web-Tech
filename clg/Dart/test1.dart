import 'dart:io';

class Node {
  int data;
  Node? next;
  Node(this.data);
}

// void count(int n) {
//   if (n == 0) {
//     return;
//   }
//   print(n);
//   count(n - 1);
// }

void main() {
  List<Map<String,dynamic>> students=[
    {"name":"Alice","age":20},
    {"name":"Bob","age":22},
    {"name":"Charlie","age":19}
  ];  
  for (var student in students) {
    print("Name: ${student['name']}, Age: ${student['age']}");  
  }
  // print("Enter number of elements:");
  // Node? head;
  // int n = int.parse(stdin.readLineSync()!);
  // for (int i = 0; i < n; i++) {
  //   int data = int.parse(stdin.readLineSync()!);
  //   if (head == null) {
  //     head = Node(data);
  //   } else {
  //     Node current = head;
  //     while (current.next != null) {
  //       current = current.next!;
  //     }
  //     current.next = Node(data);
  //   }
  // }
  // Node? temp = head;
  // while (temp != null) {
  //   stdout.write(temp.data.toString() + " ");
  //   temp = temp.next;
  // }
  // print("Enter name:");
  // String name = stdin.readLineSync()!;
  // print("Hello, $name!");
  // print("Enter age:");
  // int age = int.parse(stdin.readLineSync()!);
  // print("Your age is $age");
  // count(5);
}
