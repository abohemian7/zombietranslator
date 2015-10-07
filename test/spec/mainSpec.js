(function(){
    describe("main file",function(){
        describe("ruleOne", function(){
            it("should return true if passed a string matching /^[r]/",function(){
                expect(ruleOne("r ")).toBe(true);
            })
            it("should return false if passed a null value",function(){
                expect(ruleOne(null)).toBe(false);
            })
            it("should return true if only r is passed",function(){
                expect(ruleOne("r")).toBe(true);
            })
        })
    })
})