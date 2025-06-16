s = input("Введите строку: ")
max_len = current_len = 0

for char in s:
    if char.isdigit():
        current_len += 1
        if current_len > max_len:
            max_len = current_len
    else:
        current_len = 0

print(f"Максимальная длина цифровой последовательности: {max_len}")





1












