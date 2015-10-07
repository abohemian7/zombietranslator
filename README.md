
I struggled with Jasmine and Karma.  Hooking it up was completely arcane to me.  Also, I didn't implement functions that are easy to write test,
since each was passed a position (evaluated against the string in $('#english').val()).

With a little help I think this would be trivial, unfortunately I haven't extended myself for help yet because I've been busy with other things.
I hope I can get some time with someone to better understand.  With 10-20 minutes of one-on-one I believe I would have been able to easily complete
all aspects of this project.

## The Rules

1. lower-case "r" at the end of words replaced with "rh".
2.  an "a" or "A" is replaced with "hra". *Edited to be easier.*
3. the starts of sentences are capitalized (the "start of a sentence" is any occurrence of ".!?", followed by a space, followed by a letter.)
4. "e" or "E" is replaced by "rr"
5. "i" or "I" is replaced by "rrRr"
6. "o" or "O" is replaced by "rrrRr"
7. "u" or "U" is replaced by "rrrrRr"
8. "r" or "R" is replaced by "RR"
9.  ends of translation include "... unnngggghhh" if it is non-alphanumeric
10.  every fourth space includes " ... brains ... ",
  since zombies periodically space-out and think of brains

Expects:

zombify:
expect(zombify("test")).toBe("trrst");
expect(zombify("broken")).toBe("bRRrrrRrkrrn");
expect(zombify(null)).isUndefined(true);

unzombify:
expect(unzombify(" ... brains ... ").toBe(" ");
expect(unzombify("RRrrrRrt").toBe("rot);
expect(unzombify("trrst").toBe("test");

Rule 1:
expect(ruleOne("r ")).toBe(true);
expect(ruleOne(" r")).toBe(false);
expect(ruleOne("R")).toBe(false);

Rule 2:
expect(ruleTwo("a")).toBe(true);
expect(ruleTwo("&")).toBe(false);
expect(ruleTwo("A")).toBe(true);

Rule 3:
expect(ruleThree(".ab")).toBe(false);
expect(ruleThree("&")).toBe(false);
expect(ruleThree("A")).toBe(true);

Rule 4:
expect(ruleFour("e")).toBe(true);
expect(ruleFour("E")).toBe(true);
expect(ruleFour(null)).toBe(false);

Rule 5:
expect(ruleFive("I")).toBe(true);
expect(ruleFive("ii")).toBe(true);
expect(ruleFive(null)).toBe(false);

Rule 6:
expect(ruleSix("U")).toBe(true);
expect(ruleSix("ui")).toBe(true);
expect(ruleSix(null)).toBe(false);

Rule 7:
expect(ruleSeven("UU")).toBe(true);
expect(ruleSeven"turn")).toBe(true);
expect(ruleSeven(null)).toBe(false);

Rule 8:
expect(ruleEight("RrRr")).toBe(true);
expect(ruleEight("r")).toBe(true);
expect(ruleEight(null)).toBe(false);

Rule 9:
expect(ruleNine("UU ")).toBe(true);
expect(ruleNine("do this")).toBe(true);
expect(ruleNine("true")).toBe(false);

Rule 10:
expect(ruleTen("UU    ")).toBe(true);
expect(ruleTen("do this one more time, yeah, one more time")).toBe(true);
expect(ruleTen("true")).toBe(false);


