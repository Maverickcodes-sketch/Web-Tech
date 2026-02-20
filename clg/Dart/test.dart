int add(int a, int b) {
  return a + b;
}

int subtract(int a, int b) => a - b;

class Person {
  String name;
  int age;
  Person(this.name, this.age);
  void display() {
    print("Name: " + name);
    print("Age: " + age.toString());
  }
}

double  multiply(double a, double b) =>a*b;


class Student extends Person {
  String Branch;
  Student(String name, int age, this.Branch) : super(name, age);
  void display() {
    super.display();
    print("Branch: " + Branch);
  }
}

Future<void> fetchData() async {
  await Future.delayed(Duration(seconds: 2));
  print("Data fetched");
}

void main() {
  Set<int> nums = {1, 2, 3, 4, 5};
  print(nums);
  Map<String, int> map = {'one': 1, 'two': 2, 'three': 3};
  print(map["two"]);
  List<String> list = ['apple', 'banana', 'cherry'];
  for (int i = 0; i < list.length; i++) {
    print(list[i]);
  }
  list.forEach((n) => print("Fruit is " + n));
  print(add(5, 3));
  print(subtract(10, 4));
  String? name;
  print(name);
  Student s1 = Student("Alice", 20, "Computer Science");
  s1.display();
  fetchData();
 print(name??"Name is null");
}
