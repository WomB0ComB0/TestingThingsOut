#pragma once
#include <iostream>
#include <string>
#include <utility>
using namespace std;
class MoveIt {
private:
	int num;
	string sentence;
	int* ptr;
	int size;
public:
	MoveIt(int num = 0, string const& sentence = nullptr, int size = 1) : num(num),
		sentence(sentence), size(size) {
		cout << "Running the constructor\n";
		ptr = new int[size];
		for (int i = 0; i < size; i++)
		{
			ptr[i] = i + 1;
		}
	}
	
	//destructor
	~MoveIt() {
		cout << "Running the destructor\n";
		delete[] ptr;
	}
	
	//copy constructor
	MoveIt(const MoveIt& obj) noexcept {
		cout << "In copy constructor\n";
		this->num = obj.num;
		this->sentence = obj.sentence;
		this->size = obj.size;
		ptr = new int[size];
		for (int i = 0; i < size; i++)
		{
			ptr[i] = obj.ptr[i];
		}
	}
	MoveIt& operator=(const MoveIt& obj) noexcept {
		cout << "In operator equals\n";
		if (this != &obj) {
			if (size > 0) {
				delete[] ptr;
			}
			this->num = obj.num;
			this->sentence = obj.sentence;
			this->size = obj.size;
			ptr = new int[this->size];
			for (int i = 0; i < size; i++)
			{
				this->ptr[i] = obj.ptr[i];
			}
		}
		return *this;
	}

	//move assignment operator
	MoveIt& operator=(const MoveIt&& obj) noexcept {
		cout << "In operator equals RVALUE\n";
		if (this != &obj) {
			if (size > 0) {
				delete[] ptr;
			}
			this->num = obj.num;
			this->sentence = obj.sentence;
			this->size = obj.size;
			ptr = new int[this->size];
			for (int i = 0; i < size; i++)
			{
				this->ptr[i] = obj.ptr[i];
			}
		}
		return *this;
	}
	
	//move constructor
	MoveIt(const MoveIt&& obj) noexcept {
		cout << "In move constructor\n";
		//*this = move(obj);
		this->num = obj.num;
		this->sentence = obj.sentence;
		this->size = obj.size;
		ptr = new int[size];
		for (int i = 0; i < size; i++)
		{
			ptr[i] = obj.ptr[i];
		}
	}
	void testMe() const {
		cout << "My num is: " << num << endl;
		cout << "My array is:\n";
		for (int i = 0; i < size; i++)
		{
			cout << ptr[i] << endl;
		}
	}
};