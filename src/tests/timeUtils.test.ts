import { timeAgo, sortByDate, formatTime } from "../utils/timeUtils.utils";

describe("Utility Functions", () => {

  describe("timeAgo", () => {
    it("should return the correct time in hours", () => {
      const pastDate = new Date(new Date().getTime() - 2 * 60 * 60 * 1000);
      expect(timeAgo(pastDate)).toBe("2 hours");
    });

    it("should return '0 hours' for future dates", () => {
      const futureDate = new Date(new Date().getTime() + 2 * 60 * 60 * 1000);
      expect(timeAgo(futureDate)).toBe("0 hours");
    });

    it("should return the correct time in days", () => {
      const pastDate = new Date(new Date().getTime() - 5 * 24 * 60 * 60 * 1000);
      expect(timeAgo(pastDate)).toBe("5 days");
    });
  });

  describe("sortByDate", () => {
    it("should sort dates in descending order", () => {
      const date1 = new Date(2022, 5, 1);
      const date2 = new Date(2023, 5, 1);
      
      expect(sortByDate(date1, date2)).toBeGreaterThan(0);
      expect(sortByDate(date2, date1)).toBeLessThan(0);
    });

    it("should handle string date inputs", () => {
      const date1 = "2022-01-01T00:00:00Z";
      const date2 = "2023-01-01T00:00:00Z";
      
      expect(sortByDate(date1, date2)).toBeGreaterThan(0);
    });
  });

  describe("formatTime", () => {
    it("should format the time correctly", () => {
      const dateInput = "2025-01-01T15:30:00Z";
      expect(formatTime(dateInput)).toBe("15:30");
    });

    it("should handle single-digit hours and minutes", () => {
      const dateInput = "2025-01-01T05:09:00Z";
      expect(formatTime(dateInput)).toBe("05:09");
    });
  });

});
