# 1) a = true
# 2) b = false
# 3) a && b
# 4) a || b


# Challenge 3
# 1) d = 5
# 2) e = 5.0

# Challenge 4
# christine = "Hi, I'm Christine"
# likes_to =  "long walks on the beach, kinda."

# puts "#{christine} and I like #{likes_to}."

# g = "2"
# g_integer = g.to_i
# g_to_number = 2

# puts "#{g_integer} + #{g_to_number}"

# Challenge 5
puts "Pick a number between 1-10"
print "> "
choice = $stdin.gets.chomp

if choice(1..10)
    puts " #{choice * 2}"
else
    puts "You have to pick a number between 1 - 10"