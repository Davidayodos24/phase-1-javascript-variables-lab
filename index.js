const companyName = 'Scuber';
const mostProfitableNeighborhood = 'Chelsea';
const companyCeo = 'Susan Smith'
describe('mostProfitableNeighborhood', function () {
  it('is declared as equal to Chelsea', function () {
      let mostProfitableNeighborhood = 'Chelsea';
      expect(mostProfitableNeighborhood).to.equal('Chelsea');
  });
});


describe('mostProfitableNeighborhood', function () {
    it('is declared as equal to Chelsea', function () {
        expect(mostProfitableNeighborhood).to.equal('Chelsea');
    });

    it('is defined using let', function () {
        expect(js).to.match(/let mostProfitableNeighborhood/, "Expected mostProfitableNeighborhood to be defined using let");
    });
});



describe('companyCeo', function () {
    it('is declared as equal to Susan Smith', function () {
        expect(companyCeo).to.equal('Susan Smith');
    });

    it('is defined using let', function () {
        expect(js).to.match(/let companyCeo/, "Expected companyCeo to be defined using let");
    });
});
