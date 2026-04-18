import random
import string 

def generate_pass(min_length,numbers=True,spec_char=True):
    letters=string.ascii_letters
    digits=string.digits
    special=string.punctuation

    print(letters,digits,special)
    # pass

# generate_pass(10,False,False)
