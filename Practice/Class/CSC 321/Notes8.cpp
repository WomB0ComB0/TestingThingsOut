class A {
  public:
    void p()
    {
      std::cout << "A::p\n" << std::endl;
    }

    virtual void()
    {
      std::cout << "A::q\n" << std::endl;
    }

    void f()
    {
      p();
      q();
    }
};

class B : public A
{
  public:
    void p()
    {
      std::cout << "B::p\n" << std::endl;
    }

    void q()
    {
      std::cout << "B::q\n" << std::endl;
    }
};

int main() {
  A a;
  B b;

  a.f();
  b.f();
  
  a = b;
  a.f();
}