(function(){
    describe("main file",function(){
        describe("ruleOne", function(){
            it("should return true if passed a string matching /^[r]/",function(){
                expect(ruleOne("r ")).toBe(true);
            })
        })
    })
})