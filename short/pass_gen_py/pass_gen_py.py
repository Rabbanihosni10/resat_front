import random
import string 

def generate_pass(min_length,numbers=True,spec_char=True):
    letters=string.ascii_letters
    digits=string.digits
    special=string.punctuation

    print(letters,digits,special)
    charateres=letters
    if numbers:
        charateres+=digits
    if spec_char:
        charateres+=special
    pass_wd=""
    meet_criteria=False    
    has_number=False
    has_spec_char=False

    while not meet_criteria or len(pass_wd)<min_length:
        new_char=random.choice(characters);
        pass_wd+=new_char

        if new_char in digits:
            has_number=True
        elif new_char in special:
            has_spec_char=True
        
        meets_criteria=True
        if numbers:
            meets_criteria=has_number
        if spec_char:
            meets_criteria=meets_criteria and has_spec_char
    return pass_wd    




        # new_char=random.choice(charateres)

    # pass

# generate_pass(10,False,False)
generate_pass(10)